import axios, {
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
} from "axios";
import { ApiError } from "./errors";
import { type ApiConfig, ContentType, type FullRequestParams } from "./types";

/**
 * HttpClient wrapper for axios with consistent error handling
 * This class provides a standardized way to make HTTP requests with proper error handling
 * and authentication support across the application.
 */
export class HttpClient<AuthDataType = unknown> {
    // The underlying Axios instance that performs HTTP requests
    private instance: AxiosInstance;
    // Stores authentication data (tokens, credentials, etc.) for secure requests
    private authData: AuthDataType | null = null;
    // Optional function that applies auth data to requests
    private authWorker?: ApiConfig<AuthDataType>["authWorker"];
    // Default API URL from environment variables or localhost fallback
    public baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

    /**
     * Creates a new HTTP client with optional configuration
     * @param apiConfig - Configuration options for the API client
     */
    constructor(apiConfig: ApiConfig<AuthDataType> = {}) {
        // Initialize Axios instance with base configuration
        this.instance = axios.create({
            baseURL: apiConfig.baseUrl ?? this.baseUrl,
            headers: {
                "Content-Type": ContentType.Json,
            },
            ...apiConfig.baseApiParams,
        });

        // Set up error handling interceptors
        this.setupErrorHandling();

        // Store authentication worker if provided
        if (apiConfig.authWorker) {
            this.authWorker = apiConfig.authWorker;
        }
    }

    /**
     * Configure response interceptor for error handling
     * This ensures consistent error handling across all requests
     */
    private setupErrorHandling(): void {
        this.instance.interceptors.response.use(
            // Success case - pass through the response
            (response) => response,
            // Error case - transform into standardized ApiError
            (error) => {
                if (axios.isAxiosError(error)) {
                    // Extract status code or default to 0
                    const status = error.response?.status ?? 0;
                    // Extract error message from response data, error object, or use default
                    const message =
                        (error.response?.data as { message?: string })
                            ?.message ??
                        error.message ??
                        "something went wrong";
                    // Extract error code from response data or use empty string
                    const code =
                        (error.response?.data as { code?: string })?.code ?? "";

                    // Special handling for network connectivity issues
                    if (error.message === "Network Error") {
                        throw new ApiError(
                            0,
                            "Network Error",
                            "NetworkError",
                            true,
                        );
                    }

                    // Throw standardized API error with extracted information
                    throw new ApiError(status, String(message), String(code));
                }
                // Re-throw non-Axios errors
                throw error;
            },
        );
    }

    /**
     * Sets authentication data for subsequent requests
     * @param data - Authentication data or null to clear authentication
     */
    public setAuthData = (data: AuthDataType | null): void => {
        this.authData = data;
    };

    /**
     * Converts a regular object to FormData for file uploads and multipart requests
     * @param body - Object containing form fields and values
     * @returns FormData object ready for submission
     */
    private prepareFormData(body: Record<string, unknown>): FormData {
        const formData = new FormData();
        Object.entries(body).forEach(([key, value]) => {
            if (value instanceof Blob) {
                // Handle file/blob objects directly
                formData.append(key, value);
            } else if (typeof value === "object" && value !== null) {
                // Convert objects to JSON strings
                formData.append(key, JSON.stringify(value));
            } else {
                // Convert primitive values to strings
                formData.append(key, String(value));
            }
        });
        return formData;
    }

    /**
     * Performs an HTTP request with the configured settings
     * @param params - Complete request parameters including path, method, body, etc.
     * @returns Promise resolving to the response data
     */
    public async request<T>({
        body,
        secure,
        path,
        type = ContentType.Json,
        query,
        format,
        ...params
    }: FullRequestParams): Promise<T> {
        // Apply authentication if request is secure and authWorker is available
        const authParams =
            secure && this.authWorker
                ? await this.authWorker(this.authData)
                : {};

        // Build the complete request configuration
        const requestConfig: AxiosRequestConfig = {
            ...authParams,
            ...params,
            params: query,
            responseType: format ?? "json",
            data: body,
            url: path,
        };

        // Set content type header if specified
        if (type) {
            requestConfig.headers = {
                ...requestConfig.headers,
                "Content-Type": type,
            };
        }

        // Handle FormData conversion for multipart requests
        if (type === ContentType.FormData && body && typeof body === "object") {
            requestConfig.data = this.prepareFormData(
                body as Record<string, unknown>,
            );
            // Let browser set the Content-Type with correct boundary
            delete requestConfig.headers?.["Content-Type"];
        }

        // Execute the request and return the response data
        const response: AxiosResponse<T> =
            await this.instance.request(requestConfig);
        return response.data;
    }
}

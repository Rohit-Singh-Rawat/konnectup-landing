import {
    ContentType,
    type FullRequestParams,
    type RequestParams,
} from "../types";
import { dataTaggedQueryKey } from "../queryUtils";

/**
 * User entity interface
 */
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

/**
 * Response structure for authentication operations
 */
export interface AuthResponse {
    success: boolean;
    data: {
        user: User;
        token: string;
    };
}

/**
 * Response structure for user registration
 */
export interface RegisterResponse {
    success: boolean;
}

/**
 * Request payload for creating a new user
 */
export interface CreateUserRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

/**
 * Request payload for user login
 */
export interface LoginRequest {
    email: string;
    password: string;
}

/**
 * Creates authentication-related API endpoints
 * @param request - The request function to use for API calls
 * @returns Object containing all auth endpoint methods
 */
export const createAuthEndpoints = (
    request: <T>(config: FullRequestParams) => Promise<T>,
) => ({
    /**
     * Login with email and password
     *
     * @name Login
     * @request POST:/api/v1/auth/login
     */
    login: {
        // React Query keys for caching
        baseKey: () => dataTaggedQueryKey<AuthResponse>(["auth", "login"]),

        // The actual request function
        request: (credentials: LoginRequest, params: RequestParams = {}) =>
            request<AuthResponse>({
                path: `/api/v1/auth/login`,
                method: "POST",
                body: credentials,
                type: ContentType.Json,
                ...params,
            }),
    },

    /**
     * Google OAuth authentication
     *
     * @name GoogleOauth
     * @request POST:/api/v1/auth/oauth/google
     */
    googleOauth: {
        baseKey: () =>
            dataTaggedQueryKey<AuthResponse>(["auth", "google-oauth"]),

        request: (accessToken: string, params: RequestParams = {}) =>
            request<AuthResponse>({
                path: `/api/v1/auth/oauth/google`,
                method: "POST",
                headers: { Authorization: `Bearer ${accessToken}` },
                type: ContentType.Json,
                ...params,
            }),
    },

    /**
     * LinkedIn OAuth authentication
     *
     * @name LinkedInOauth
     * @request POST:/api/v1/auth/oauth/linkedin
     */
    linkedinOauth: {
        baseKey: () =>
            dataTaggedQueryKey<AuthResponse>(["auth", "linkedin-oauth"]),

        request: (accessToken: string, params: RequestParams = {}) =>
            request<AuthResponse>({
                path: `/api/v1/auth/oauth/linkedin`,
                method: "POST",
                headers: { Authorization: `Bearer ${accessToken}` },
                type: ContentType.Json,
                ...params,
            }),
    },

    /**
     * Register a new user
     *
     * @name Register
     * @request POST:/api/v1/auth/register
     * @returns Success status without user data
     */
    create: {
        baseKey: () => dataTaggedQueryKey<RegisterResponse>(["auth", "create"]),

        request: (userData: CreateUserRequest, params: RequestParams = {}) =>
            request<RegisterResponse>({
                path: `/api/v1/auth/register`,
                method: "POST",
                body: userData,
                type: ContentType.Json,
                ...params,
            }),
    },

});

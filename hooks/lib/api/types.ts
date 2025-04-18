import type { AxiosRequestConfig } from "axios";
import type {
    UseQueryOptions,
    UseMutationOptions,
} from "@tanstack/react-query";

// Type for query parameters in API requests
export type QueryParamsType = Record<string | number, unknown>;

// Supported response formats for API requests
export type ResponseFormat = "json" | "text" | "blob" | "arraybuffer";

// Content types for API requests
export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

// Complete parameters for API requests
export interface FullRequestParams
    extends Omit<AxiosRequestConfig, "data" | "params"> {
    secure?: boolean;
    path: string;
    type?: ContentType;
    query?: QueryParamsType;
    format?: ResponseFormat;
    body?: unknown;
}

// Common request parameters without request-specific fields
export type RequestParams = Omit<
    FullRequestParams,
    "body" | "method" | "query" | "path"
>;

// Configuration for API client
export interface ApiConfig<AuthDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken">;
    authWorker?: (
        authData: AuthDataType | null,
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
}

// React Query configuration types
export type QueryConfig<TData, TError> = Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn"
>;

export type MutationConfig<TData, TError, TVariables> = Omit<
    UseMutationOptions<TData, TError, TVariables>,
    "mutationFn"
>;

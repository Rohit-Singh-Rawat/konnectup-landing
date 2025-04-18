/**
 * Enum defining all possible API error types
 */
export enum ApiErrorTypes {
    AuthenticationError = "AuthenticationError",
    ForbiddenError = "ForbiddenError",
    NotFoundError = "NotFoundError",
    UnprocessableError = "UnprocessableError",
    InternalError = "InternalError",
    ConnectionError = "ConnectionError",
}

/**
 * Custom error class for handling API errors with appropriate status codes
 */
export class ApiError extends Error {
    status: number;
    code: string;

    constructor(
        status: number,
        message: string,
        code: string,
        isConnectionError = false,
    ) {
        super(message);
        this.status = status;
        this.code = code;

        // Set error name based on status code or connection error flag
        if (isConnectionError) {
            this.name = ApiErrorTypes.ConnectionError;
        } else {
            switch (status) {
                case 401: this.name = ApiErrorTypes.AuthenticationError; break;
                case 403: this.name = ApiErrorTypes.ForbiddenError; break;
                case 404: this.name = ApiErrorTypes.NotFoundError; break;
                case 422: this.name = ApiErrorTypes.UnprocessableError; break;
                default:  this.name = ApiErrorTypes.InternalError;
            }
        }
    }
}

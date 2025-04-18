import { HttpClient } from './httpClient';
import { createAuthEndpoints } from './endpoints/auth';

/**
 * API client that provides a centralized interface for all API endpoints
 */
export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	auth = createAuthEndpoints(this.request.bind(this));
}

/**
 * Singleton API client instance for application-wide use
 */
export const apiClient = new Api({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	baseApiParams: {
		headers: { 'Content-Type': 'application/json' },
		format: 'json',
	},
	authWorker: (authData: { token: string } | null) => ({
		headers: {
			Authorization: authData?.token ? `Bearer ${authData.token}` : '',
		},
	}),
});

// Export essential types and utilities
export * from './types';
export * from './errors';
export * from './queryUtils';

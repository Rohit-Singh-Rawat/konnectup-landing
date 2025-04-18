import NextAuth, { CredentialsSignin, type UserObject } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { apiClient } from '@/hooks/lib/api/apiClient';
import { type LoginRequest } from '@/hooks/lib/api/endpoints/auth';
import { jwtDecode } from 'jwt-decode';

const { providers: authConfigProviders, ...authConfigRest } = authConfig;

/**
 * Custom error class for credential signin failures with improved error messaging
 */
class CustomCredentialsSignin extends CredentialsSignin {
	name = 'CredentialsSignin';

	constructor(message = 'Invalid credentials') {
		super(message);
		this.code = message;
	}
}

export const { auth, handlers, signIn, signOut } = NextAuth({
	...authConfigRest,
	providers: [
		...authConfigProviders,
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					if (!credentials?.email || !credentials?.password) {
						return null;
					}

					const loginData: LoginRequest = {
						email: credentials.email as string,
						password: credentials.password as string,
					};

					const response = await apiClient.auth.login.request(loginData);
					const access: UserObject = jwtDecode(response.data.token);

					return {
						token: response.data.token,
						user: {
							userId: access.userId,
							first_name: response.data.user.firstName,
							last_name: response.data.user.lastName,
							username: response.data.user.email,
							profile_pic: '',
							primary_user_type: 'user',
							emailVerified: null,
						},
					};
				} catch (error: unknown) {
					const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
					throw new CustomCredentialsSignin(errorMessage);
				}
			},
		}),
	],
});

import { type NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
	providers: [],
	secret: process.env.AUTH_SECRET ?? 'secret',
	session: { strategy: 'jwt' },
	pages: {
		signIn: '/signin',
	},
	callbacks: {
		/**
		 * Handles user sign-in
		 */

		/**
		 * Adds custom user data to the JWT
		 */
		async jwt({ token, account, user }) {
			if (user && account) {
				return { ...token, data: user };
			}
			return token;
		},

		/**
		 * Exposes user data and token to the client session
		 */
		async session({ session, token }) {
			return {
				...session,
				user: token.data?.user,
				token: token.data?.token,
			};
		},
	},
};

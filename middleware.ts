import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

/**
 * Route configuration
 */
const apiAuthPrefix = '/api/auth';
const authRoutes = ['/login', '/signUp', '/forgot'];
const publicRoutes = ['/', '/colleges'];

export default NextAuth(authConfig).auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	// Allow API auth routes to pass through
	if (isApiAuthRoute) return;

	// Redirect logged-in users away from auth pages
	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL('/', nextUrl));
		}
		return;
	}

	// Redirect unauthenticated users to login with callback URL
	if (!isLoggedIn && !isPublicRoute) {
		const callbackUrl = nextUrl.search ? `${nextUrl.pathname}?${nextUrl.search}` : nextUrl.pathname;
		return Response.redirect(
			new URL(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl)
		);
	}
});

/**
 * Middleware matcher configuration
 * Excludes static files and includes API routes
 */
export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
};

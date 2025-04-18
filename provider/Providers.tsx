'use client';
import { JSX, type ReactNode } from 'react';
import QueryProvider from './QueryProvider';
import { SessionProvider } from 'next-auth/react';
/**
 * Props for the Providers component
 */
type ProvidersProps = {
	children: ReactNode;
};

/**
 * Wraps the application with necessary providers
 * Currently only includes QueryProvider
 */
const Providers = ({ children }: ProvidersProps): JSX.Element => (
	<SessionProvider>
		<QueryProvider>{children}</QueryProvider>
	</SessionProvider>
);

export default Providers;

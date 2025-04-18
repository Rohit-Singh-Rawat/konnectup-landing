import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { type ReactNode } from "react";

/**
 * Props for the QueryProvider component
 */
type QueryProviderProps = {
    children: ReactNode;
};

// Create a single instance of QueryClient to be used throughout the app
const queryClient = new QueryClient();

/**
 * Provides React Query context to the application
 */
const QueryProvider = ({ children }: QueryProviderProps): JSX.Element => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

export default QueryProvider;

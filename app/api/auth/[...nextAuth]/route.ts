/**
 * NextAuth API route handlers
 * Exports the necessary HTTP methods for NextAuth authentication
 * This endpoint is required for client components to use NextAuth functionality
 */
import { handlers } from "@/auth";

export const { GET, POST } = handlers;

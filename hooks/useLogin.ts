import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface LoginParams {
    email: string;
    password: string;
    remember?: boolean;
}

/**
 * Hook for handling user authentication
 * Provides login functionality with error handling and success navigation
 */
const useLogin = () => {
    const router = useRouter();
    
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async ({ email, password }: LoginParams) => {
            const response = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (response?.error) {
                throw new Error(response.error);
            }

            return { success: true };
        },
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success("Logged in successfully");
            router.push("/");
        }
    });
};

export default useLogin;

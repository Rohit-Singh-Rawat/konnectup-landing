import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { apiClient } from './lib/api/apiClient';

interface CreateUserParams {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

/**
 * Hook for creating a new user and automatically signing them in
 */
const createUser = apiClient.auth.create;

const useCreateUser = () => {
	const router = useRouter();

	return useMutation({
		mutationKey: createUser.baseKey(),
		mutationFn: async ({ email, password, firstName, lastName }: CreateUserParams) => {
			// Create the user account
			const response = await createUser.request({
				email,
				password,
				firstName,
				lastName,
			});

			if (!response.success) {
				throw new Error('Failed to create user');
			}

			// Sign in the newly created user
			const signInResponse = await signIn('credentials', {
				redirect: false,
				email,
				password,
			});

			if (signInResponse?.error) {
				throw new Error(`Sign in failed: ${signInResponse.error}`);
			}

			return { success: true };
		},
		onError: (error) => {
			toast.error(error.message);
		},
		onSuccess: () => {
			toast.success('User created successfully');
			router.push('/');
		},
	});
};

export default useCreateUser;

'use client';

import { AuthLayout } from '@/components/shared/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';

export default function Login() {
	return (
		<AuthLayout title='Sing in'>
			<LoginForm />
		</AuthLayout>
	);
}

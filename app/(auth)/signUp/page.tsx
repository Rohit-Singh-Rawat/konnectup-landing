'use client';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { AuthLayout } from '@/components/shared/AuthLayout';

export default function SignUp() {
	return (
		<AuthLayout title='create account'>
			<SignUpForm />
		</AuthLayout>
	);
}

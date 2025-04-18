'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { InputField } from '@/components/auth/inputField';
import useLogin from '@/hooks/useLogin';

export function LoginForm() {
	const formSchema = z.object({
		email: z.string().email(),
		password: z.string().min(1, 'Password is required'),
	});

	type FormValues = z.infer<typeof formSchema>;

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const login = useLogin();
	const isLoading = login.isPending;

	async function onSubmit(values: z.infer<typeof formSchema>) {
		login.mutate({
			email: values.email,
			password: values.password,
		});
	}

	return (
		<Form {...form}>
			<form
				className='mt-16 lg:mt-20 space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-8 md:px-16 lg:px-28 w-full mx-auto'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className='space-y-8 md:space-y-10'>
					<InputField
						id='email'
						name='email'
						type='email'
						label='Email address'
						control={form.control}
						placeholder='Enter your email'
						disabled={isLoading}
					/>

					<InputField
						id='password'
						name='password'
						type='password'
						label='Password'
						control={form.control}
						placeholder='Enter your password'
						disabled={isLoading}
					/>
				</div>

				<Button
					type='submit'
					className='w-full py-3 sm:py-4 bg-black hover:bg-black/80 text-white font-medium mt-4 sm:mt-5'
					disabled={isLoading}
				>
					{isLoading ? 'Signing In...' : 'Sign In'}
				</Button>

				<div className='text-sm text-center mt-4'>
					<span className='text-black/60'>Don&apos;t have an account?</span>{' '}
					<Link
						href='/signUp'
						className='font-medium text-black hover:text-black/70 underline'
					>
						Create account
					</Link>
				</div>
			</form>
		</Form>
	);
}

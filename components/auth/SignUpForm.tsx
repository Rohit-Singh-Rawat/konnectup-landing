'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { InputField } from '@/components/auth/inputField';
import useCreateUser from '@/hooks/useCreateUser';

export function SignUpForm() {
	const { mutate: createUser, status } = useCreateUser();
	const formSchema = z.object({
		name: z.string().min(1, 'Full name is required'),
		email: z.string().email(),
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
			.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
			.regex(/[0-9]/, 'Password must contain at least one number')
			.regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
	});

	type FormValues = z.infer<typeof formSchema>;

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		createUser({
			email: values.email,
			password: values.password,
			firstName: values.name.split(' ')[0],
			lastName: values.name.split(' ')[1] ?? ' ',
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
						id='name'
						name='name'
						type='text'
						label='Full Name'
						control={form.control}
						disabled={status === 'pending'}
						placeholder='Enter your full name'
					/>

					<InputField
						id='email'
						name='email'
						type='email'
						label='Email address'
						control={form.control}
						placeholder='Enter your email'
						disabled={status === 'pending'}
					/>

					<InputField
						id='password'
						name='password'
						type='password'
						label='Password'
						control={form.control}
						placeholder='Enter your password'
						disabled={status === 'pending'}
					/>
				</div>

				<Button
					type='submit'
					className='w-full py-3 sm:py-4 bg-black hover:bg-black/80 text-white font-medium mt-4 sm:mt-5'
					disabled={status === 'pending'}
				>
					{status === 'pending' ? 'Signing up...' : 'Sign up'}
				</Button>

				<div className='text-sm text-center mt-4'>
					<span className='text-black/60'>Already have an account?</span>{' '}
					<Link
						href='/login'
						className='font-medium text-black hover:text-black/70 underline'
					>
						Sign in
					</Link>
				</div>
			</form>
		</Form>
	);
}

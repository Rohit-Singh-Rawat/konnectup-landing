'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InputField } from '@/components/auth/inputField';

export function SignUpForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			className='mt-16 lg:mt-20 space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-8 md:px-16 lg:px-28 w-full  mx-auto'
			onSubmit={handleSubmit}
		>
			<div className='space-y-8 md:space-y-10'>
				<InputField
					id='name'
					name='name'
					type='text'
					label='Full Name'
					value={formData.name}
					onChange={handleChange}
				/>

				<InputField
					id='email'
					name='email'
					type='email'
					label='Email address'
					value={formData.email}
					onChange={handleChange}
				/>

				<InputField
					id='password'
					name='password'
					type='password'
					label='Password'
					value={formData.password}
					onChange={handleChange}
				/>
			</div>

			<Button
				type='submit'
				className='w-full py-3 sm:py-4 bg-black hover:bg-black/80 text-white font-medium mt-4 sm:mt-5'
			>
				Sign up
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
	);
}

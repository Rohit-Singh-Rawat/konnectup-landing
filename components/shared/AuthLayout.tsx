'use client';

import { ReactNode } from 'react';

interface AuthLayoutProps {
	children: ReactNode;
	maxWidth?: string;
	title?: string;
}

export function AuthLayout({ children, maxWidth = 'max-w-7xl', title }: AuthLayoutProps) {
	return (
		<div className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'>
			<div
				className={`${maxWidth} w-full space-y-6  p-8 `}
			>
				
				{title && <div className='text-left uppercase text-3xl font-medium my-8 tracking-tight text-black  mb-6 border-b pb-5 border-black/50'>{title}</div>}
				{children}
			</div>
		</div>
	);
}

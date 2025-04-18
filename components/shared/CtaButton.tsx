'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface CtaButtonProps {
	href?: string;
	children: ReactNode;
	variant?: 'default' | 'outline' | 'white' | 'primary';
	className?: string;
	target?: '_blank' | '_self';
	fullWidth?: boolean;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

const CtaButton = ({
	href,
	children,
	variant = 'default',
	className = '',
	target = '_self',
	fullWidth = false,
	onClick,
	type = 'button',
}: CtaButtonProps) => {
	const getButtonStyle = () => {
		switch (variant) {
			case 'outline':
				return 'backdrop-blur-sm border border-white text-white hover:bg-white/10';
			case 'white':
				return 'bg-white text-primary hover:bg-gray-200 shadow-lg';
			case 'primary':
				return 'bg-primary hover:bg-primary/90 text-white';
			default:
				return '';
		}
	};

	const buttonElement = (
		<Button
			variant={variant === 'outline' ? 'outline' : 'default'}
			className={`${
				fullWidth ? 'w-full sm:min-w-[180px]' : ''
			} py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ${getButtonStyle()} ${className}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</Button>
	);

	if (href) {
		return (
			<Link
				href={href}
				target={target}
				className={fullWidth ? 'w-full sm:w-auto' : ''}
			>
				{buttonElement}
			</Link>
		);
	}

	return buttonElement;
};

export default CtaButton;

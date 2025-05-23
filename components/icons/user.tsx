import React from 'react';

interface UserIconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

const UserIcon = ({ className, ...props }: UserIconProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`lucide lucide-user-round ${className || ''}`}
			{...props}
		>
			<circle cx='12' cy='8' r='5' />
			<path d='M20 21a8 8 0 0 0-16 0' />
		</svg>
	);
};

export default UserIcon;

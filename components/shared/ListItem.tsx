'use client';

import { ReactNode } from 'react';

interface ListItemProps {
	children: ReactNode;
	className?: string;
	markerSize?: 'sm' | 'md' | 'lg';
	markerColor?: string;
}

const ListItem = ({
	children,
	className = '',
	markerSize = 'sm',
	markerColor = 'bg-white',
}: ListItemProps) => {
	const getMarkerSize = () => {
		switch (markerSize) {
			case 'sm':
				return 'w-1.5 h-1.5';
			case 'md':
				return 'w-2 h-2';
			case 'lg':
				return 'w-2.5 h-2.5';
			default:
				return 'w-1.5 h-1.5';
		}
	};

	return (
		<li className={`flex items-center ${className}`}>
			<div className={`${getMarkerSize()} ${markerColor} mr-2`}></div>
			<span>{children}</span>
		</li>
	);
};

export default ListItem;

'use client';

import { ReactNode } from 'react';

interface SectionContainerProps {
	children: ReactNode;
	id?: string;
	className?: string;
	fullHeight?: boolean;
}

const SectionContainer = ({
	children,
	id,
	className = '',
	fullHeight = false,
}: SectionContainerProps) => {
	return (
		<section
			id={id}
			className={`py-12 sm:py-16 md:py-20 max-w-6xl mx-auto ${
				fullHeight ? 'min-h-screen flex flex-col justify-center items-center' : ''
			} ${className}`}
		>
			<div className='lg:container mx-auto px-4 sm:px-6'>{children}</div>
		</section>
	);
};

export default SectionContainer;

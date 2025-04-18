'use client';

import Image, { StaticImageData } from 'next/image';

interface BackgroundImageProps {
	src: StaticImageData | string;
	alt: string;
	overlay?: boolean;
	overlayClass?: string;
	priority?: boolean;
	className?: string;
}

const BackgroundImage = ({
	src,
	alt,
	overlay = true,
	overlayClass = 'bg-gradient-to-b from-black/40 to-black/70',
	priority = false,
	className = '',
}: BackgroundImageProps) => {
	return (
		<div className='absolute inset-0 z-0'>
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				className={`object-cover ${className}`}
				sizes='100vw'
				placeholder='blur'
			/>
			{overlay && <div className={`absolute inset-0 ${overlayClass}`}></div>}
		</div>
	);
};

export default BackgroundImage;

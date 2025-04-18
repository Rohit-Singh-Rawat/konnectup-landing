'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import MotionWrapper from './MotionWrapper';

interface ServiceCardProps {
	title: string;
	description: string;
	image: StaticImageData;
	link: string;
	index?: number;
}

const ServiceCard = ({ title, description, image, link, index = 0 }: ServiceCardProps) => {
	return (
		<Link
			href={link}
			target='_blank'
		>
			<MotionWrapper
				className='group relative overflow-hidden transition-all duration-300 hover:shadow-xl h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer'
				delay={index * 0.1}
				duration={0.5}
			>
				{/* Service image with overlay */}
				<div className='relative h-full w-full overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-10 transition-opacity duration-300 group-hover:opacity-90'></div>
					<Image
						src={image}
						alt={title}
						fill
						loading='eager'
						placeholder='blur'
						className='object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out'
						sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
					/>

					{/* Service content overlay */}
					<div className='absolute inset-0 z-20 grid grid-rows-3 items-center p-4 sm:p-4 text-center'>
						<h3 className='text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 sm:mb-3 md:mb-4 row-span-2 group-hover:scale-95 group-hover:text-shadow text-shadow-lg transition-all duration-300 ease-in-out'>
							{title}
						</h3>
						<p className='text-white/90 text-sm sm:text-base max-w-xs mx-auto opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-justify'>
							{description}
						</p>
					</div>
				</div>
			</MotionWrapper>
		</Link>
	);
};

export default ServiceCard;

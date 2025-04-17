'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const CompanyInfiniteScroll = ({
	companies,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	companies: {
		name: string;
		logo: string;
		alt?: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty('--animation-direction', 'forwards');
			} else {
				containerRef.current.style.setProperty('--animation-direction', 'reverse');
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s');
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-6',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{companies.map((company, idx) => (
					<li
						className='relative flex items-center justify-center h-12 w-24 shrink-0'
						key={`${company.name}-${idx}`}
					>
						<div className='relative w-full h-full flex items-center justify-center'>
							<Image
								src={company.logo}
								alt={company.alt || `${company.name} logo`}
								width={96}
								height={48}
								className='object-contain h-full w-auto max-h-10 filter grayscale transition-all duration-300 hover:grayscale-0 hover:filter-none'
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

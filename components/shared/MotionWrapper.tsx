'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
	children: ReactNode;
	delay?: number;
	duration?: number;
	className?: string;
	once?: boolean;
	animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
}

const MotionWrapper = ({
	children,
	delay = 0,
	duration = 0.7,
	className = '',
	once = true,
	animation = 'fadeInUp',
}: MotionWrapperProps) => {
	// Common animation presets
	const animations = {
		fadeIn: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
		},
		fadeInUp: {
			initial: { opacity: 0, y: 30 },
			animate: { opacity: 1, y: 0 },
		},
		fadeInLeft: {
			initial: { opacity: 0, x: -30 },
			animate: { opacity: 1, x: 0 },
		},
		fadeInRight: {
			initial: { opacity: 0, x: 30 },
			animate: { opacity: 1, x: 0 },
		},
	};

	const selectedAnimation = animations[animation];

	return (
		<motion.div
			className={className}
			initial={selectedAnimation.initial}
			whileInView={selectedAnimation.animate}
			viewport={{ once }}
			transition={{ duration, delay }}
		>
			{children}
		</motion.div>
	);
};

export default MotionWrapper;

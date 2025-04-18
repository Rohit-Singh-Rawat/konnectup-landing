'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true }: SectionHeaderProps) => {
	return (
		<motion.div
			className={`mb-8 sm:mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<div className='flex items-center justify-center gap-2 mb-4'>
				<h2 className='text-xl sm:text-2xl md:text-4xl font-medium uppercase mb-3 sm:mb-4 px-2 block'>
					{title}
				</h2>
			</div>
			{subtitle && (
				<span className='text-base sm:text-xl font-normal text-black/70'>{subtitle}</span>
			)}
		</motion.div>
	);
};

export default SectionHeader;

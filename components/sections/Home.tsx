'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<section className='min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20 md:py-0'>
			{/* Background image with subtle gradient overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/hero.jpg'
					alt='Professional career coaching'
					fill
					priority
					className='object-cover'
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/70'></div>
			</div>

			{/* Content overlay with animations */}
			<motion.div
				className='z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-16 md:mt-0'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<motion.h1
					className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4 sm:mb-6 md:mb-8 tracking-tight text-shadow-lg'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.8 }}
				>
					Up your self with KonnectUp
				</motion.h1>
				<motion.p
					className='text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-shadow-md'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					Accelerate Your Career: Achieve Your Ideal Role Faster with Clarity
				</motion.p>
				<motion.div
					className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.8 }}
				>
					<Link
						href='https://cal.com/konnectup/collegekit'
						target='_blank'
						className='w-full sm:w-auto'
					>
						<Button className='w-full sm:min-w-[180px] py-2.5 sm:py-3 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-black hover:bg-gray-200'>
							Book 1:1 Today
						</Button>
					</Link>
					<Link
						href='#services'
						className='w-full sm:w-auto'
					>
						<Button
							variant='outline'
							className='w-full sm:min-w-[180px] py-2.5 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm border border-white text-white hover:bg-white/10 transition-all duration-300'
						>
							Explore Services
						</Button>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Home;

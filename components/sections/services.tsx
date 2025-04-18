'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import resumeService from '@/public/images/resumeService.png';

import carrerService from '@/public/images/carrerService.png';
import interviewService from '@/public/images/interviewService.png';

const Services = () => {
	return (
		<section
			id='services'
			className='py-12 sm:py-16 md:py-20 max-w-6xl mx-auto min-h-screen flex flex-col justify-center items-center'
		>
			<div className='lg:container mx-auto px-4 sm:px-6'>
				{/* Section Header */}
				<motion.div
					className='mb-8 sm:mb-10 md:mb-12 text-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className='flex items-center justify-center gap-2 mb-4 sm:mb-6'>
						<span className='text-xs sm:text-sm uppercase text-black'>Our Services</span>
					</div>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-medium mb-3 sm:mb-4 px-2'>
						Elevate Your Career With Industry-Leading Experts
					</h2>
				</motion.div>

				{/* Service Cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-6 md:px-12'>
					{[
						{
							title: 'YOUR 1:1 : RESUME REVIEW',
							description:
								'Get expert feedback on your resume to stand out from the competition and land more interviews.',
							image: resumeService,
							calLink: 'https://cal.com/konnectup/collegekit',
						},
						{
							title: 'YOUR 1:1 : CAREER ROADMAP',
							description:
								'Develop a strategic plan for your career growth with actionable steps and milestones.',
							image: carrerService,
							calLink: 'https://cal.com/konnectup/collegekit',
						},
						{
							title: 'YOUR 1:1 : PRACTICE INTERVIEW',
							description:
								'Prepare for your next big interview with personalized mock sessions and detailed feedback.',
							image: interviewService,
							calLink: 'https://cal.com/konnectup/collegekit',
						},
					].map((service, index) => (
						<Link
							href={service.calLink}
							target='_blank'
							key={index}
						>
							<motion.div
								className='group relative overflow-hidden transition-all duration-300 hover:shadow-xl h-[300px] sm:h-[350px] md:h-[400px] cursor-pointer'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								{/* Service image with overlay */}
								<div className='relative h-full w-full overflow-hidden'>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-10 transition-opacity duration-300 group-hover:opacity-90'></div>
									<Image
										src={service.image}
										alt={service.title}
										fill
										loading='eager'
										placeholder='blur'
										className='object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out'
										sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
									/>

									{/* Service content overlay */}
									<div className='absolute inset-0 z-20 grid grid-rows-3 items-center p-4 sm:p-4 text-center'>
										<h3 className='text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 sm:mb-3 md:mb-4 row-span-2 group-hover:scale-95 group-hover:text-shadow text-shadow-lg transition-all duration-300 ease-in-out'>
											{service.title}
										</h3>
										<p className='text-white/90 text-sm sm:text-base max-w-xs mx-auto opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
											{service.description}
										</p>
									</div>
								</div>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

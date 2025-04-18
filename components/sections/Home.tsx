'use client';
import MotionWrapper from '@/components/shared/MotionWrapper';
import CtaButton from '@/components/shared/CtaButton';
import BackgroundImage from '@/components/shared/BackgroundImage';
import heroBg from '@/public/images/hero.jpg';

const Home = () => {
	return (
		<section className='min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20 md:py-0'>
			{/* Background image with subtle gradient overlay */}
			<BackgroundImage
				src={heroBg}
				alt='Professional career coaching'
				priority={true}
			/>

			{/* Content overlay with animations */}
			<MotionWrapper
				className='z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-16 md:mt-0'
				animation='fadeInUp'
				duration={0.8}
			>
				<MotionWrapper
					delay={0.2}
					duration={0.8}
					animation='fadeIn'
				>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4 sm:mb-6 md:mb-8 tracking-tight text-shadow-lg'>
						Up your self with KonnectUp
					</h1>
				</MotionWrapper>
				<MotionWrapper
					delay={0.4}
					duration={0.8}
					animation='fadeIn'
				>
					<p className='text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-shadow-md'>
						Accelerate Your Career: Achieve Your Ideal Role Faster with Clarity
					</p>
				</MotionWrapper>
				<MotionWrapper
					delay={0.6}
					duration={0.8}
					animation='fadeIn'
					className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6'
				>
					<CtaButton
						href='https://cal.com/konnectup/collegekit'
						target='_blank'
						variant='white'
						fullWidth
					>
						Book 1:1 Today
					</CtaButton>
					<CtaButton
						href='#services'
						variant='outline'
						fullWidth
					>
						Explore Services
					</CtaButton>
				</MotionWrapper>
			</MotionWrapper>
		</section>
	);
};

export default Home;

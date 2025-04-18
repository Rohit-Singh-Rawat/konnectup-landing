'use client';
import Image from 'next/image';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import MotionWrapper from '@/components/shared/MotionWrapper';

const AboutUs = () => {
	return (
		<SectionContainer
			id='about-us'
			fullHeight
		>
			<SectionHeader title='About Us & Our Mission' />

			{/* Combined About Us and Our Mission */}
			<MotionWrapper
				className='flex flex-col lg:flex-row gap-8 md:gap-12 items-start w-full'
				duration={0.7}
			>
				<div className='w-full lg:w-1/2 flex flex-col gap-6 relative mb-8 lg:mb-0 mt-10'>
					<Image
						src='/images/about.png'
						alt='About Us'
						width={600}
						height={400}
						className='w-full h-auto shadow-md z-10'
					/>
					<div className='absolute -top-3 -right-3 w-full h-full border border-black'></div>
					<div className='absolute -bottom-3 -left-3 w-full h-full border border-black'></div>
				</div>
				<div className='w-full lg:w-1/2 gap-6 sm:gap-8 md:gap-10 flex flex-col items-center justify-center'>
					<div className=' text-justify'>
						<p className='text-sm sm:text-base md:text-lg md:font-extralight mb-4'>
							<span className='font-bold text-black tracking-wide'>KONNECTUP</span> is a team of{' '}
							<span className='font-medium text-primary'>engineers</span> with experience from{' '}
							<span className='relative inline-block font-medium text-primary'>
								top-tier companies
							</span>{' '}
							such as
							<span className='font-medium text-primary'> FAANG</span>, Big 4, and Fortune 500.
							We&apos;re <span className='font-medium text-primary'>passionate career guides</span>{' '}
							who have navigated the complexities of professional growth through{' '}
							<span className='font-medium text-primary'>hard work</span> and{' '}
							<span className='font-medium text-primary'>determination</span>.
						</p>

						<p className='text-sm sm:text-base md:text-lg md:font-extralight mb-8 '>
							Our<span className='font-medium text-primary'> mission</span> is to make career
							advancement <span className='font-medium text-primary'>easier</span> for the next
							generation of engineers, offering{' '}
							<span className='font-medium text-primary'>personalized, 1:1 career support</span> at
							scale.
						</p>

						<p className='text-sm sm:text-base md:text-lg md:font-extralight mb-4 sm:mb-6'>
							We help engineers{' '}
							<span className='font-medium text-primary'>visualize their career paths</span> 10-15
							years into the future, empowering them to make{' '}
							<span className='font-medium text-primary'>informed decisions</span> early on and
							avoid years of trial and error. Our goal is to{' '}
							<span className='font-medium text-primary'>support you</span> every step of the way—be
							your guide, your &quot;Saarthi,&quot; on your{' '}
							<span className='font-medium text-primary'>career journey</span>.
						</p>

						<p className='text-sm sm:text-base md:text-lg md:font-extralight'>
							Unlike traditional resume services, prep companies, or placement agencies,{' '}
							<span className='font-bold text-black tracking-wide'>KONNECTUP</span> is more than
							just a tool. We&apos;re your{' '}
							<span className='font-medium text-primary'>career companion</span>, dedicated to
							helping you reach your{' '}
							<span className='font-medium text-primary'>professional dreams</span> with clarity and
							confidence.
						</p>
					</div>
				</div>
			</MotionWrapper>
		</SectionContainer>
	);
};
export default AboutUs;

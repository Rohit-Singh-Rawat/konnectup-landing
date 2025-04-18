'use client';
import SectionContainer from '@/components/shared/SectionContainer';
import MotionWrapper from '@/components/shared/MotionWrapper';
import ListItem from '@/components/shared/ListItem';
import CtaButton from '@/components/shared/CtaButton';

const Cta = () => {
	const benefits = [
		'Personalized guidance from industry experts',
		'Actionable strategies tailored to your goals',
		'Ongoing support throughout your journey',
	];

	return (
		<SectionContainer
			id='book'
			className='text-justify'
		>
			<div className='mx-auto container'>
				<div className='bg-primary overflow-hidden'>
					<div className='px-10 py-12 md:p-20 flex flex-col md:flex-row items-center justify-between'>
						<div className='md:w-2/3 mb-8 md:mb-0 md:pr-10'>
							<MotionWrapper duration={0.6}>
								<h2 className='text-3xl md:text-4xl font-semibold text-white'>
									Ready to Accelerate Your Career?
								</h2>
							</MotionWrapper>
							<MotionWrapper
								delay={0.1}
								duration={0.6}
							>
								<p className='mt-4 text-lg text-white/80 max-w-xl'>
									Book a complimentary 30-minute discovery call to discuss your career goals and how
									we can help you achieve them.
								</p>
							</MotionWrapper>
							<MotionWrapper
								delay={0.2}
								duration={0.6}
							>
								<ul className='mt-6 space-y-2'>
									{benefits.map((benefit, index) => (
										<ListItem
											key={index}
											className='text-white/80'
										>
											{benefit}
										</ListItem>
									))}
								</ul>
							</MotionWrapper>
						</div>
						<MotionWrapper
							delay={0.3}
							duration={0.6}
							className='md:w-auto'
						>
							<CtaButton
								href='https://cal.com/konnectup/collegekit'
								variant='white'
								className='px-10 py-3 text-shadow shadow-lg'
							>
								Book 1:1 Today
							</CtaButton>
						</MotionWrapper>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default Cta;

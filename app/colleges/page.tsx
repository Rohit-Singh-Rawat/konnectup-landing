'use client';

import { BookOpen, GraduationCap, type LucideIcon, Users } from 'lucide-react';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import MotionWrapper from '@/components/shared/MotionWrapper';
import BackgroundImage from '@/components/shared/BackgroundImage';
import CtaButton from '@/components/shared/CtaButton';
import collegeBg from '@/public/images/college.jpg';
import { Button } from '@/components/ui/button';

const steps = [
	{
		icon: GraduationCap,
		title: 'Building a Powerful Resume',
		description:
			"Harness the power of AI, LaTeX code, and our ATS-friendly templates to create resumes that stand out to top employers. Tailored for each student's unique strengths and experiences, ensuring they make a lasting impression.",
	},
	{
		icon: BookOpen,
		title: 'Mastering Interview Prep',
		description:
			'We prepare students not just for what to say in an interview, but how to say it. Our interview prep goes beyond typical advice, coaching students on confident communication and framing responses to highlight their strengths.',
	},
	{
		icon: Users,
		title: 'Personalized Mock Interviews',
		description:
			"Experience realistic mock interviews tailored to each student's field and role, followed by detailed feedback on performance. We guide them on how to refine their responses, improve presentation, and tackle challenging interview scenarios.",
	},
];

const Step = ({
	icon: Icon,
	title,
	description,
	index,
}: {
	icon: LucideIcon;
	title: string;
	description: string;
	index: number;
}) => {
	return (
		<MotionWrapper
			delay={index * 0.1}
			duration={0.5}
			className=''
		>
			<div className='bg-white p-8 shadow-sm border border-border group h-full grid grid-cols-1 gap-4'>
				<div className='grid grid-cols-2 items-center'>
					<div className='bg-black/5 w-12 h-12 flex items-center justify-center rounded-full shadow-inner border border-black/10'>
						<Icon className='w-6 h-6 text-black/30 group-hover:text-black transition-all duration-300 ease-in-out' />
					</div>
					<div className='justify-self-end'>
						<span className='font-bold text-6xl text-black/5'>0{index + 1}</span>
					</div>
				</div>
				<div className='grid grid-cols-1'>
					<h3 className='text-xl font-medium text-black/90 mb-4 text-shadow-md'>
						{title}
					</h3>
					<p className='text-black/70 leading-relaxed text-sm text-justify'>{description}</p>
				</div>
			</div>
		</MotionWrapper>
	);
};

export default function CollegesPage() {
	return (
		<div className='min-h-screen bg-white flex flex-col'>
			<main>
				{/* Hero Section */}
				<section className='relative h-screen flex items-center'>
					<BackgroundImage
						src={collegeBg}
						className='object-cover brightness-[0.5]'
						alt='Students in career development session'
						overlayClass='brightness-[0.5]'
						priority={true}
					/>

					<div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
						<MotionWrapper
							className='max-w-3xl'
							animation='fadeInLeft'
							duration={0.8}
						>
							<h1 className='text-4xl md:text-5xl font-medium text-white/90 mb-6'>
								Fast placements, personalized strategies
							</h1>

							<p className='text-white/80 mb-8 leading-relaxed text-justify'>
								At KonnectUp, we understand the dedication institutions put into preparing students
								for placements. However, we believe that Career Development should be holistic and
								hyper-personalized. It&apos;s not just about telling students what to do; it&apos;s
								about guiding them through a clear, step-by-step process to land their ideal role.
							</p>
							<Button
								variant='default'
								className='px-8 py-3 text-lg'
								onClick={() => {
									window.location.href = '/colleges#steps';
								}}
							>
								Tell me more
							</Button>
						</MotionWrapper>
					</div>
				</section>

				{/* 3-Step Journey */}
				<SectionContainer
					className='py-20 max-w-7xl'
					id='steps'
				>
					<MotionWrapper className='max-w-3xl mx-auto text-center mb-16'>
						<SectionHeader
							title='Our 3-Step Approach'
							subtitle='A comprehensive journey to help students navigate their career path from preparation to success.'
						/>
					</MotionWrapper>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-16 '>
						{steps.map((step, index) => (
							<Step
								key={step.title}
								{...step}
								index={index}
							/>
						))}
					</div>
				</SectionContainer>

				{/* CTA Section */}
				<SectionContainer className='py-20 bg-black/90 max-w-7xl mb-12'>
					<MotionWrapper className='text-center'>
						<h2 className='text-3xl md:text-4xl font-medium text-white mb-6'>
							Transform Your Institution&apos;s Career Development Program
						</h2>
						<p className='text-xl text-white/80 mb-8 max-w-3xl mx-auto'>
							Partner with KonnectUp to provide your students with industry-leading career guidance
							and support. Schedule a consultation with our team today.
						</p>
						<CtaButton
							variant='white'
							className='px-8 py-3 text-lg'
							href='https://cal.com/konnectup/collegekit'
							target='_blank'
						>
							Book a Consultation
						</CtaButton>
					</MotionWrapper>
				</SectionContainer>
			</main>
		</div>
	);
}

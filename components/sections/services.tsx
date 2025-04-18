'use client';

import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/shared/ServiceCard';
import resumeService from '@/public/images/resumeService.png';
import carrerService from '@/public/images/carrerService.png';
import interviewService from '@/public/images/interviewService.png';

const services = [
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
];

const Services = () => {
	return (
		<SectionContainer
			id='services'
			fullHeight
		>
			<SectionHeader
				title='Our Services'
				subtitle='Elevate Your Career With Industry-Leading Experts'
			/>

			{/* Service Cards */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-6 md:px-12'>
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						image={service.image}
						link={service.calLink}
						index={index}
					/>
				))}
			</div>
		</SectionContainer>
	);
};

export default Services;

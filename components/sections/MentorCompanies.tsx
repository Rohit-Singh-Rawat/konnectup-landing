'use client';
import SectionContainer from '@/components/shared/SectionContainer';
import SectionHeader from '@/components/shared/SectionHeader';
import MotionWrapper from '@/components/shared/MotionWrapper';
import CtaButton from '@/components/shared/CtaButton';
import { CompanyInfiniteScroll } from '../shared/companyInfinite';

const mentorCompanies = [
	{
		name: 'Google',
		logo: '/images/companies/google.svg',
		alt: 'Google logo',
	},
	{
		name: 'Microsoft',
		logo: '/images/companies/microsoft.svg',
		alt: 'Microsoft logo',
	},
	{
		name: 'Amazon',
		logo: '/images/companies/amazon.svg',
		alt: 'Amazon logo',
	},
	{
		name: 'JP Morgan',
		logo: '/images/companies/jpMorgan.svg',
		alt: 'JP Morgan logo',
	},
	{
		name: 'Morgan Stanley',
		logo: '/images/companies/morganStanley.svg',
		alt: 'Morgan Stanley logo',
	},
	{
		name: 'Deloitte',
		logo: '/images/companies/Delloit.svg',
		alt: 'Deloitte logo',
	},
	{
		name: 'EY',
		logo: '/images/companies/ey.svg',
		alt: 'EY logo',
	},
	{
		name: 'Infosys',
		logo: '/images/companies/infosys.svg',
		alt: 'Infosys logo',
	},
];

const MentorCompanies = () => {
	return (
		<SectionContainer
			id='mentor-companies'
			className='max-w-7xl'
		>
			<SectionHeader
				title='Our Mentors Come From'
				subtitle="Our mentors have experience working at some of the world's leading technology companies"
			/>

			{/* Companies Infinite Scroll */}
			<MotionWrapper
				className='px-4 sm:px-8 md:px-16 lg:px-40'
				duration={0.7}
			>
				<CompanyInfiniteScroll
					companies={mentorCompanies}
					direction='left'
					speed='normal'
					pauseOnHover={true}
					className=''
				/>
				<CompanyInfiniteScroll
					companies={[...mentorCompanies].reverse()}
					direction='right'
					speed='normal'
					pauseOnHover={true}
				/>
			</MotionWrapper>

			{/* Apply to Top Companies CTA */}
			<MotionWrapper
				delay={0.2}
				duration={0.8}
				className='mt-10 sm:mt-12 md:mt-16 text-center'
			>
				<CtaButton
					href='https://konnectup.ai/job'
					target='_blank'
					variant='primary'
					className='px-6 py-3 shadow-sm'
				>
					Apply for Top Companies
				</CtaButton>
				<p className='mt-3 text-sm text-muted-foreground'>
					Get mentored to land roles at leading tech companies
				</p>
			</MotionWrapper>
		</SectionContainer>
	);
};

export default MentorCompanies;

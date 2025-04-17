'use client';
import { motion } from 'framer-motion';
import { CompanyInfiniteScroll } from '../shared/companyInfinite';
import Link from 'next/link';

const mentorCompanies = [
  {
    name: 'Google',
    logo: '/images/companies/google.svg',
    alt: 'Google logo'
  },
  {
    name: 'Microsoft',
    logo: '/images/companies/microsoft.svg',
    alt: 'Microsoft logo'
  },
  {
    name: 'Amazon',
    logo: '/images/companies/amazon.svg',
    alt: 'Amazon logo'
  },
  {
    name: 'JP Morgan',
    logo: '/images/companies/jpMorgan.svg',
    alt: 'JP Morgan logo'
  },
  {
    name: 'Morgan Stanley',
    logo: '/images/companies/morganStanley.svg',
    alt: 'Morgan Stanley logo'
  },
  {
    name: 'Deloitte',
    logo: '/images/companies/Delloit.svg',
    alt: 'Deloitte logo'
  },
  {
    name: 'EY',
    logo: '/images/companies/ey.svg',
    alt: 'EY logo'
  },
  {
    name:'Infosys',
    logo:'/images/companies/infosys.svg',
    alt:'Infosys logo'
  }
];

const MentorCompanies = () => {
	return (
		<section
			id='mentor-companies'
			className='py-12 sm:py-16 md:py-20 max-w-7xl mx-auto'
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
						<h2 className='uppercase text-black'>Our Mentors Come From</h2>
					</div>
					<p className='text-muted-foreground max-w-3xl mx-auto'>
						Our mentors have experience working at some of the world&apos;s leading technology companies
					</p>
				</motion.div>

				{/* Companies Infinite Scroll */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='px-4 sm:px-8 md:px-16 lg:px-40'
					transition={{ duration: 0.7 }}
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
				</motion.div>

				{/* Apply to Top Companies CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-10 sm:mt-12 md:mt-16 text-center"
				>
					<Link 
						href="https://konnectup.ai/job" 
						target='_blank'
						className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium  text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-sm"
					>
						Apply for Top Companies
					</Link>
					<p className="mt-3 text-sm text-muted-foreground">
						Get mentored to land roles at leading tech companies
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MentorCompanies;

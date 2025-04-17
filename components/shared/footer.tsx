'use client';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
		<footer className='bg-white text-black border-t border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Logo and Description */}
					<div className='space-y-4'>
						<Link
							href='/'
							className='inline-block'
						>
							<Image
								src='/logo1.svg'
								alt='KonnectUp Logo'
								width={150}
								height={40}
								className='h-10 w-auto'
							/>
						</Link>
						<p className='text-gray-600 text-sm mt-4'>
							Empowering engineers to accelerate their careers through personalized mentorship and
							guidance.
						</p>
						<div className='flex space-x-4 mt-6'>
							<a
								href='https://twitter.com/konnectup'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-600 hover:text-primary transition-colors'
							>
								<span className='sr-only'>Twitter</span>
								<svg
									className='h-6 w-6'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
								</svg>
							</a>
							<a
								href='https://linkedin.com/company/konnectup'
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-600 hover:text-primary transition-colors'
							>
								<span className='sr-only'>LinkedIn</span>
								<svg
									className='h-6 w-6'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
								</svg>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/#about-us'
									className='text-gray-600 hover:text-primary transition-colors'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/#services'
									className='text-gray-600 hover:text-primary transition-colors'
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/#mentor-companies'
									className='text-gray-600 hover:text-primary transition-colors'
								>
									Our Mentors
								</Link>
							</li>
							<li>
								<Link
									href='/#book'
									className='text-gray-600 hover:text-primary transition-colors'
								>
									Book a Call
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
						<ul className='space-y-2'>
							<li className='flex items-start'>
								<svg
									className='h-6 w-6 text-gray-600 mr-2 flex-shrink-0'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<a
									href='mailto:info@konnectup.ai'
									className='text-gray-600 hover:text-primary transition-colors'
								>
									info@konnectup.ai, +91 6354035567,
								</a>
							</li>
							<li className='flex items-start'>
								<svg
									className='h-6 w-6 text-gray-600 mr-2 flex-shrink-0'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<span className='text-gray-600'>Bangalore, India</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-200 mt-12 pt-8'>
					<p className='text-gray-600 text-sm text-center'>
						© {currentYear} KonnectUp. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

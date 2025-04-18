'use client';
import { Mail, PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
		<footer className='bg-white text-black border-t border-gray-800'>
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
						<p className='text-gray-900 text-sm mt-4'>
							Empowering engineers to accelerate their careers through personalized mentorship and
							guidance.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/#about-us'
									className='text-gray-900 hover:text-primary transition-colors'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/#services'
									className='text-gray-900 hover:text-primary transition-colors'
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/#mentor-companies'
									className='text-gray-900 hover:text-primary transition-colors'
								>
									Our Mentors
								</Link>
							</li>
							<li>
								<Link
									href='/#book'
									className='text-gray-900 hover:text-primary transition-colors'
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
							<li className='flex items-start gap-2'>
							<Mail className='size-5'/>
								<a
									href='mailto:info@konnectup.ai'
									className='text-gray-900 hover:text-primary transition-colors'
								>
									info@konnectup.ai,
								</a>
							</li>
							<li className='flex items-start gap-2'>
								<PhoneCall className='size-5'/>
								+91 6354035567</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-12 pt-8'>
					<p className='text-gray-900 text-sm text-center'>
						{currentYear} KonnectUp. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

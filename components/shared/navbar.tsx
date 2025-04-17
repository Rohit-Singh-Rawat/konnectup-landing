'use client';

import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import { memo, useEffect, useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';
import UserIcon from '@/components/icons/user';
import { Button } from '@/components/ui/button';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/colleges', label: 'For Colleges' },
	{ href: 'https://www.konnectup.ai/job', label: 'Find Jobs' },
	{ href: '/#about-us', label: 'About Us' },
];

// User menu component
const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div
			className='relative'
			ref={menuRef}
		>
			<Button
				variant='ghost'
				className='p-1 sm:p-2 text-white bg-transparent hover:bg-transparent hover:text-white rounded-full ring-0 focus:ring-0 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<UserIcon className='size-5 md:size-6 stroke-1' />
			</Button>

			{isOpen && (
				<div className='absolute right-0 mt-2 bg-black border border-white/20 text-white w-40 sm:w-48 p-2 shadow-lg z-50'>
					<Link
						href='/profile'
						className='block px-3 sm:px-4 py-2 text-sm sm:text-base cursor-pointer hover:bg-white/10 focus:bg-white/10'
						onClick={() => setIsOpen(false)}
					>
						My Profile
					</Link>
					<Link
						href='/settings'
						className='block px-3 sm:px-4 py-2 text-sm sm:text-base cursor-pointer hover:bg-white/10 focus:bg-white/10'
						onClick={() => setIsOpen(false)}
					>
						Settings
					</Link>
					<div className='h-[1px] bg-white/10 my-1'></div>
					<Link
						href='/logout'
						className='block px-3 sm:px-4 py-2 text-sm sm:text-base cursor-pointer hover:bg-white/10 focus:bg-white/10'
						onClick={() => setIsOpen(false)}
					>
						Logout
					</Link>
				</div>
			)}
		</div>
	);
};

const Navbar = () => {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const unsubscribe = scrollY.onChange((latest) => {
			setScrolled(latest > 50);
		});

		return unsubscribe;
	}, [scrollY]);

	// Close mobile menu on window resize if screen becomes larger
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isMenuOpen]);

	return (
		<motion.nav
			className='z-50 text-background py-2 sm:py-3 md:py-4 fixed top-0 w-full backdrop-blur-sm'
			initial={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', y: -100 }}
			animate={{
				backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
				y: 0,
			}}
			transition={{ duration: 0.5 }}
		>
			<div className=' mx-auto px-4 sm:px-6 md:px-8'>
				<div className='flex justify-between items-center w-full'>
					<Link
						href='/'
						className='flex items-center'
					>
						<Logo />
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center justify-center space-x-4 lg:space-x-8 xl:space-x-10 flex-1'>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className='text-white text-sm lg:text-base relative group'
							>
								{label}
								<span
									className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transform transition-transform duration-300 origin-left ${
										pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
									}`}
								></span>
							</Link>
						))}
					</div>

					<div className='hidden md:flex items-center space-x-3 lg:space-x-4'>
						<Link
							href='/#book'
							className='bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 text-sm lg:text-base hover:bg-gray-200 transition-colors font-medium'
						>
							Get in Touch
						</Link>

						<div className='h-8 sm:h-10 w-[1px] bg-white/30'></div>

						<UserMenu />
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden flex items-center space-x-2 sm:space-x-4'>
						<UserMenu />
						<Button
							variant='ghost'
							className='p-1.5 sm:p-2 text-white'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label='Toggle menu'
						>
							{isMenuOpen ? (
								<svg
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='sm:w-6 sm:h-6'
								>
									<path
										d='M18 6L6 18'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M6 6L18 18'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							) : (
								<svg
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='sm:w-6 sm:h-6'
								>
									<path
										d='M3 12H21'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 6H21'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M3 18H21'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<motion.div
					className='md:hidden fixed top-[calc(2.5rem+1.5rem)] sm:top-[calc(3rem+1.5rem)] left-0 right-0 z-50 shadow-md py-4 px-4 max-h-[calc(100vh-5rem)] overflow-y-auto backdrop-blur-sm'
					initial={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',  }}
					animate={{
						backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
						
					}}
					transition={{ duration: 0.5 }}
				>
					<div className='flex flex-col space-y-3 sm:space-y-4'>
						{navLinks.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className='text-white/80 hover:text-white py-1.5 sm:py-2 text-sm sm:text-base'
								onClick={() => setIsMenuOpen(false)}
							>
								{label}
							</Link>
						))}
						<div className='pt-2'>
							<Link
								href='/#book'
								className='w-full block'
							>
								<Button
									variant='default'
									className='w-full text-sm sm:text-base py-1.5 sm:py-2'
									onClick={() => setIsMenuOpen(false)}
								>
									Get in Touch
								</Button>
							</Link>
						</div>
					</div>
				</motion.div>
			)}
		</motion.nav>
	);
};

export default memo(Navbar);

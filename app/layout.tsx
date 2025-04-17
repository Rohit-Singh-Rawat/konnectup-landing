import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'KonnectUp - Transform Your Institution&apos;s Career Development Program',
	description: 'Transform your institution\'s career development program with KonnectUp\'s industry-leading guidance and support.',
	icons: [{ rel: 'icon', url: '/logo2.svg' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} font-sans antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

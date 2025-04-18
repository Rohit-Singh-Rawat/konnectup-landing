import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import { Toaster } from 'sonner';
import Providers from '@/provider/Providers';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'KonnectUp - Transform Your Institution&apos;s Career Development Program',
	description:
		"Transform your institution's career development program with KonnectUp's industry-leading guidance and support.",
	icons: [{ rel: 'icon', url: '/logo2.svg' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Providers>
				<Toaster
					position='bottom-right'
					toastOptions={{
						style: {
							background: 'rgba(0, 0, 0, 0.9)',
							color: 'white',
							border: '1px solid rgba(255, 255, 255, 0.2)',
							borderRadius: '0px',
						},
						duration: 4000,
					}}
					closeButton
				/>
				<body className={`${inter.className} font-sans antialiased`}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</Providers>
		</html>
	);
}

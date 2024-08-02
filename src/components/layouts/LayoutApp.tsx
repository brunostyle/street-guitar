// import Head from 'next/head';
import { Footer, Menu } from '@components';

interface ILayout {
	children: JSX.Element | JSX.Element[];
	title: string;
	description: string;
	imageFullUrl?: string;
}

export const LayoutApp = ({ children }: ILayout) => (
	<>
		{/* <Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			{imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
		</Head> */}

		<Menu />
		<div className="container mx-auto p-4 min-h-screen">
			{children}
		</div>
		<Footer />
	</>
);


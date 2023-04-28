/**
next/head
https://nextjs.org/learn/basics/assets-metadata-css/metadata
 */
import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
	return (
		<>
			<Head>
				<title>next/head</title>
			</Head>
			<Link href='/'>home</Link>
			<br />

		</>
	)
}
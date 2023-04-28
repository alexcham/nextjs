/**
public/scripts/scene.js

next/script
https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript

Setup Your First Web App (F5 if Error)
https://doc.babylonjs.com/features/introductionToFeatures/chap1/first_app
*/
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Page() {
	return (
		<>
			<Head>

				{/**
				 particular script is render-blocking and can delay page
				 */}
				<script src="https://cdn.babylonjs.com/babylon.js"></script>
				<script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
				<script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
			</Head>

			<Link href='/'>home</Link>
			<br />
			<canvas id="scene" width="800" height="600"></canvas>

			<Script
				src="/scripts/scene.js"
				strategy="lazyOnload"
				onLoad={() =>
					console.log(`script loaded!`)
				} />
		</>
	)
}




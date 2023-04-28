/*
next/image
https://nextjs.org/learn/basics/assets-metadata-css/assets
*/
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<>
		<Link href = '/'>home</Link>
		<br/>
		<Image
			src="/images/profile.jpg" // Route of the image file
			height={400} // Desired size with correct aspect ratio
			width={400} // Desired size with correct aspect ratio
			alt="Your Name"
		/>
		</>
	)
}
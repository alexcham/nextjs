/**
components/layout.module.css
components/layout.js
https://nextjs.org/learn/basics/assets-metadata-css/layout-component
*/
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/styles.module.css';

export default function Page() {
	return (
		<>
			<Link href='/'>home</Link>
			<p className={styles.text1}>some text</p>
			<p className={styles.text2}>some text</p>
			<p className={styles.text3}>some text</p>
			<Layout>
				<p>some text</p>
				<p>some text</p>
				<p>some text</p>
			</Layout>
			
		</>
	)
}

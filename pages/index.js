import Link from 'next/link';

export default function Page() {
	return (
		<>
			<h2>Component: @TODO</h2>


			<h2>API Routes:</h2>
			<Link href='/api/hello'>/api/hello</Link>
			<br />
			<Link href='/forms/get'>/forms/get</Link>
			<br />
			<Link href='/forms/post'>/forms/post</Link>


			<h2>Rendering:</h2>
			<Link href='/rendering/client'>client @TODO </Link>
			<br />
			<Link href='/rendering/static'>static </Link>
			<br />
			<Link href='/rendering/server?param=value'>server </Link>

			<h2>Events:</h2>
			<Link href='/events'>events</Link>

			<h2>Props:</h2>
			<Link href='/props'>props </Link>

			<h2>State:</h2>
			<Link href='/state/state'>state</Link>
			<br />
			<Link href='/state/share'>share</Link>
			<br />

			<h2>Iteration:</h2>
			<Link href='/input'>input</Link>

			<h2>Other:</h2>
			<br />
			<Link href='/image'>next/image</Link>
			<br />
			<Link href='/head'>next/head</Link>
			<br />
			<a href='/script'>next/script </a>
			<br />
			<Link href='/styles'>styles </Link>

		</>
	)
}
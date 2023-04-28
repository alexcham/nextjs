/*
Static Generation
https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
Next.js has Static Generation and Server-side Rendering
Static Generation generates the HTML at build time
pre-rendered HTML is then reused on each request

getStaticProps Details
https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
getStaticProps only runs on the server-side
won’t even be included in the JS bundle for the browser
you can write code such as direct database queries
development (npm run dev), getStaticProps runs on every request
production, getStaticProps runs at build time

When should I use getStaticProps?
https://nextjs.org/docs/basic-features/data-fetching/get-static-props
* data required to render the page is available at build time
* data comes from a headless CMS
* page must be pre-rendered (for SEO)
* data can be publicly cached (not user-specific)
*/

export async function getStaticProps() {
	// Get external data from the file system, API, DB, etc.
	/*
	Approach(Using require module):
	https://www.geeksforgeeks.org/read-json-file-in-javascript/
	*/
	const data = require('./sample.json');
	console.log(data);

	// The value of the `props` key will be
	//  passed to the `Page` component
	return {props: {data}}
}

export default function Page ({data}) {

	return (
	<>
	<p>{data.users[0].site}</p>
	<p>{data.users[0].user}</p>
	</>)
}
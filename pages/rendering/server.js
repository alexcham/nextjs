/*
Server-side Rendering
https://nextjs.org/learn/basics/data-fetching/request-time

getServerSideProps is called at request time
parameter (context) contains request specific parameters
server must compute the result on every request
result cannot be cached by a CDN without extra configuration
*/
export async function getServerSideProps(context) {
	//http://localhost:3000/rendering/server?param=value
	console.log(context.query)//query: { param: 'value' }
	const data = require('./sample.json');
	console.log(data);

	// props for your component
	return {props: {data}}
  }

  export default function Page ({data}) {

	return (
	<>
	<p>{data.users[0].site}</p>
	<p>{data.users[0].user}</p>
	</>)
}
/*
Creating API Routes (Endpoint/Serverless/Lambdas Functions)
https://nextjs.org/learn/basics/api-routes/creating-api-routes

API Routes let you create an API endpoint inside a Next.js app
function inside the pages/api directory
can be deployed as Serverless Functions (also known as Lambdas)

req is an instance of http.IncomingMessage
https://nodejs.org/api/http.html#http_class_http_incomingmessage
res is an instance of http.ServerResponse
https://nodejs.org/api/http.html#http_class_http_serverresponse

WARNING!!!
!!!Do Not Fetch an API Route from getStaticProps or getStaticPaths!!!
write your server-side code directly in getStaticProps or getStaticPaths
getStaticProps and getStaticPaths run only on the server-side
getStaticProps and getStaticPaths not included in JS bundle for browser

good use case for API Routes is handling form input
create form and send a POST request to your API Route
write code to directly save it to your database
API Route code will not be part of your client bundle
you can safely write server-side code
*/
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
	//http://localhost:3000/api/hello?param1=value1&param2=value2
	console.log(req.query);//{ param1: 'value1', param2: 'value2' }
	//const email = req.body.email;//POST
	res.status(200).json({ text: 'Hello' });
}
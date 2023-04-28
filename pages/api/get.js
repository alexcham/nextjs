
export default function handler(req, res) {
	console.log(req.query);//GET
	res.redirect('/forms/post');
}
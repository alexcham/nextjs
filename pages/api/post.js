
export default function handler(req, res) {
	console.log(req.body);//POST
	res.redirect('/forms/post');
}
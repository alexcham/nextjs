/*
4.10.3 The form element
https://html.spec.whatwg.org/multipage/forms.html#the-form-element
*/
export default function Page(){
	return (
		<>
		<form action="/api/post" method="post">
			<input name='firstname'></input>
			<input name='lastname'></input>
			<input type='submit' name='submit'></input>
		</form>
		</>
	)
}
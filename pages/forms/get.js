
/*
4.10.3 The form element
https://html.spec.whatwg.org/multipage/forms.html#the-form-element

method attribute's invalid or missing value default are GET
*/
export default function Page(){
	return (
		<>
		<form action="/api/get">
			<input name='firstname'></input>
			<input name='lastname'></input>
			<input type='submit' name='submit'></input>
		</form>
		</>
	)
}
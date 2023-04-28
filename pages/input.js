/*
<button onClick={clickCallback}>
https://react.dev/learn/responding-to-events

*/
function ButtonList({ types }) {
	//console.log(types)
	const buttons = types.map(t => 
		<><input type={t} name={t} value={t === 'file' ? '' : t} /><br /></>
	);
	//console.log(buttons)
	return (
		<>
			{buttons}
		</>
	);
}


export default function Page() {

	const types = [
		'hidden',
		'text',
		'search',
		'tel',
		'url',
		'email',
		'password',
		'date',
		'month',
		'week',
		'time',
		'datetime-local',
		'number',
		'range',
		'color',
		'checkbox',
		'radio',
		'file',
		'submit',
		'image',
		'reset',
		'button'
	]
	return (
		<>
			<form>
				<ButtonList types={types} />
			</form>
		</>
	)
}
/*
<button onClick={clickCallback}>
https://react.dev/learn/responding-to-events

*/


export default function Page() {
	function clickCallback(e) {
		console.log(e.target.type)
	}

	return (
		<>
			<input type='submit' value='submit' onClick={clickCallback}/>
		</>
	)
}
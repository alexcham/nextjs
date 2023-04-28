/*
Reacting to input with state
https://react.dev/learn/managing-state

describe the UI you want to see for the different visual states
“initial state”, “typing state”, “success state”
trigger the state changes in response to user input

two reasons for a component to render
* component’s initial render
* component’s (or one of its ancestors’) state has been updated
 trigger further renders by updating state with set function
https://react.dev/learn/render-and-commit

const [state, setState] = useState(initialState);
https://react.dev/reference/react/useState
useState is a React Hook that lets you add a state variable
Call useState at the top level of your component to declare a state variable

*/

import Link from 'next/link';
import { useState } from 'react';

function submitForm(answer) {
	return new Promise((resolve, reject) => {
		if (answer.toLowerCase() !== 'lima') {
			reject(new Error('Wrong, try again!'));
		} else {
			resolve();
		}
	});
}

export default function Form() {
	const [answer, setAnswer] = useState('');
	const [message, setMessage] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await submitForm(answer);
			//trigger further renders by updating state with set function
			setMessage(new Error('Correct, try again!'));
		} catch (err) {
			//trigger further renders by updating state with set function
			setMessage(err);
		}
	}

	function handleTextareaChange(e) {
		//trigger further renders by updating state with set function
		setAnswer(e.target.value);
	}

	return (
		<>
			<Link href='/'>home</Link>
			<p>
				Quiz: In which city billboard turns air into water?  (hint: lima)
			</p>
			<form onSubmit={handleSubmit}>
				<textarea onChange={handleTextareaChange}/>
				<br />
				<button disabled={!answer.length}>Submit</button>
				<p>{message.message}</p>
			</form>
		</>
	);
}



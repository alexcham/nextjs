/*
Passing Props to a Component
https://react.dev/learn/passing-props-to-a-component#recap

React component functions accept a single argument, a props object
components use props to communicate with each other
parent component can pass some information to its child components
you can pass objects, arrays, and functions

To pass props, add them to the JSX, just like you would with HTML attributes.
To read props, use the function Avatar({ person, size }) destructuring syntax.
You can specify a default value like size = 100, which is used for missing and undefined props.
You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
Props are read-only snapshots in time: every render receives a new version of props.
You can’t change props. When you need interactivity, you’ll need to set state.

//pass two props: person (an object), and size (a number)
<Avatar
	person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
	size={100}

//read these props by listing their names ({ person, size })
function Avatar({ person, size }) {
  // person and size are available here
}
/>
*/
import Link from 'next/link';


function Child(props) {
	return (

		<fieldset>
			<h2>Child</h2>
			<h2># props toString():</h2>
			<p>{props.object.toString()}</p>
			<p>{props.array.toString()}</p>
			<p>{props.func.toString()}</p>

			<h2># props access:</h2>
			<p>{props.object.key}</p>
			<p>{props.array[0]}</p>
			<p>{props.array}</p>
			<p>{props.func()}</p>
		</fieldset>

	)
}

function Parent1(props) {

	return (

		<div>

			<h2>Parent1:</h2>
			<div>
				{props.children}
				<Child {...props} />
			</div>
		</div>

	)
}

function Parent2({ children, p1, p2 }) {

	return (

		<div>

			<h2>Parent2:</h2>
			<div>
				<p>{p1}</p>
				<p>{p2}</p>
				{children}
			</div>
		</div>

	)
}



export default function Page() {

	//output to to browser & terminal on F5
	//output to browser only on navigation between pages
	console.log('Page Component:')
	
	return (
		<div>
			<Link href='/'>home</Link>

			<Parent1 object={{ key: 'obj1...' }}
				array={['a', 'b', 'c']}
				func={() => { return 'func1...' }}>
			</Parent1>

			<Parent2 p1='v1' p2='v2'>
				<Child object={{ key: 'obj2...' }}
					array={['x', 'y', 'z']}
					func={() => { return 'func2...' }} />
			</Parent2>
		</div>		
	)
}
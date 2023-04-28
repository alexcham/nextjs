/*
Sharing state between components
https://react.dev/learn/managing-state#sharing-state-between-components

you want the state of two components to always change together
move state to their closest common parent, and pass it down via props
instead of keeping the active state inside each individual panel
parent component holds the state and specifies the props for its children
*/
import { useState } from "react";

function Clock({time}){
	return (
		<><p>{time}</p></>	
	)
}

export default function Page(){
	
	let [timeNow, setCurrent] = useState(new Date().toLocaleTimeString())
	
	setInterval(()=>{
		timeNow = setCurrent(new Date().toLocaleTimeString())
	}, 1000)
	
	return (
		<>
		<Clock time = {timeNow}/>
		</>
	)
}
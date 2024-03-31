import { useState } from "react";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(15);

	const addValue = () => {
		// react bundles up values and hence it doesn't instantly updated.
		setCounter(counter + 1);
		setCounter(counter + 1);
	};

	function removeValue() {
		// to update values instantly we use callback function of setCounter
		// now the values decrease by 2.
		setCounter((prevCount) => prevCount - 1);
		setCounter((prevCount) => prevCount - 1);
	}

	return (
		<>
			<h1>React with Ashish</h1>
			<h2>Counter value : {counter}</h2>
			<button onClick={addValue}>Add value</button>{" "}
			<button onClick={removeValue}>remove value</button>
			<p>footer: {counter}</p>
		</>
	);
}

export default App;

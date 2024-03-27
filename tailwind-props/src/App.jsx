import "./App.css";
import Card from "./components/Card";

function App() {
	const dataObj = {
		name: "Ashish Uniyal",
		post: "Web Developer",
		description:
			"This is a success story of my life where first I hit the rock bottom and lost every hope. After that I constantly worked on myself without worrying about the future, and that made me the man I am today.",
	};

	return (
		<>
			<h1 className="text-3xl bg-green-500 p-3 rounded-md">
				Vite with Tailwind
			</h1>
			<Card
				name={dataObj.name}
				post={dataObj.post}
				description={dataObj.description}
			/>
		</>
	);
}

export default App;

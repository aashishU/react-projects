import { useState } from "react";

function App() {
	const [color, setColor] = useState("olive");

	// function changeColor(color) {
	// 	setColor(color);
	// }

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
					<button
						onClick={setColor("red")}
						style={{ backgroundColor: "red", color: "white" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Red
					</button>
					<button
						onClick={() => setColor("orange")}
						style={{ backgroundColor: "orange", color: "white" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Orange
					</button>
					<button
						onClick={() => setColor("yellow")}
						style={{ backgroundColor: "yellow", color: "gray" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Yellow
					</button>
					<button
						onClick={() => setColor("green")}
						style={{ backgroundColor: "green", color: "white" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Green
					</button>
					<button
						onClick={() => setColor("blue")}
						style={{ backgroundColor: "blue", color: "white" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Blue
					</button>
					<button
						onClick={() => setColor("indigo")}
						style={{ backgroundColor: "indigo", color: "white" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Indigo
					</button>
					<button
						onClick={() => setColor("violet")}
						style={{ backgroundColor: "violet", color: "white" }}
						className="outline-none px-4 py-1 rounded-full shadow-lg"
					>
						Violet
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;

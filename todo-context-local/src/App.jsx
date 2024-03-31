import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
	const [todos, setTodos] = useState([]);

	// Here we are defining the working of those methods that were introduced in TodoContext.js

	// Adding new TODO before all previous elements(todo's)
	const addTodo = (todo) => {
		setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
	};

	const updateTodo = (id, todo) => {
		setTodos((prev) =>
			prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
		);
	};

	// Create new array and put all the previous elements inside it, except one we want to delete.
	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggleComplete = (id) => {
		setTodos((prev) =>
			prev.map((prevTodo) =>
				prevTodo.id === id
					? { ...prevTodo, completed: !prevTodo.completed }
					: prevTodo
			)
		);
	};

	// Getting "todos" data from Local Storage on page load, so that later we can show all todos on screen.
	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	// Setting only updated/changed data. This will run whenever the state of "todos" changes.
	// Here we don't want to re-render all the todos, when one todo is added/updated/deleted.
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						{/* Todo form goes here */}
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{/* Loop and Add TodoItem goes here */}
						{todos.map((todo) => (
							<div key={todo.id} className="w-full">
								<TodoItem todo={todo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;

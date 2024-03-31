# Todo-Context-Local

- It's a Todo list, in which user can add, edit, delete or taskCompleted a todo.
- We have used Context API to create Context(store).
- We have utilized the Local Storage as well.

#### TodoContext.js

- Created TodoContext and passed an Outline/structure/blueprint of the functionalities that will be integrated later in our application.
- Created a Custom Hook "useTodo". This hook will later provide us access to the methods like addTodo, updateTodo, deleteTodo and toggleComplete while implementing the functionalities.
- Created "TodoProvider" to wrap all the components inside. This will make components aware of the existence of the Context(store).

#### App.jsx

- Here we have defined the working of those methods that were introduced in TodoContext.js
- After that, we have used "useEffect" hook to Store or Retrieve data from Local Storage.
- Wrapping all components inside "TodoProvider" so that all children-components can access and use the methods.

#### Components

- TodoForm.jsx is a form that takes details of a new TODO from the user and creates new ToDo.
- TodoItem.jsx is made to display all todo's present in the Local Memory along with the options to update, delete or toggleComplete.

import { createContext, useContext } from "react";


export const TodoContext = createContext({

    // Just providing the structure/blueprint of the methods being used.

    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider
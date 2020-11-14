import React, { createContext, useEffect, useState } from 'react'

export class Todo {
    id!: number;
    title!: string;
    isCompleted!: boolean;
}

export interface ITodoContext {
    todos: Todo[];
    addTodo: (text: string) => void;
    checkTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const TodoContext = createContext<ITodoContext>({
    todos: [],
    addTodo: (text: string) => {},
    checkTodo: (id: number) => 0,
    deleteTodo: (id: number) => {},
})

const myTodos = () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : []
}

const TodoContextProvider: React.FC  = ({children}) => {
    const [ todos, setTodos ] = useState<Todo[]>(myTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = (title: string) => {
        setTodos([
            ...todos, { title, isCompleted: false, id: todos.length }
        ]);
    }

    const checkTodo = (id: number) => {
        // console.log(id)
        setTodos(todos.map(todo => { if (todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            // console.log(todo.isCompleted)
            return(
                todo
            )
        }))
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, checkTodo, deleteTodo }}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider

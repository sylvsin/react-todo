/* eslint-disable @typescript-eslint/no-unused-vars */
import  React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext'
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const { todos, checkTodo, deleteTodo } = useContext(TodoContext);

    return (
        <div>
            {
                todos.map((todo, Index) => {
                    
                    return(
                        <TodoItem todo={todo} key={Index} checkTodo={checkTodo} id={todo.id} isCompleted={todo.isCompleted} deleteTodo={deleteTodo}  />
                    )
                    
                })
            }
        </div>
    )
}

export default TodoList

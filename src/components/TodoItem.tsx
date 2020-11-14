import React from 'react'
import { Card, CardContent, Typography, Container, IconButton } from '@material-ui/core'
import { Check, Delete } from '@material-ui/icons'
import { Todo } from '../contexts/TodoContext';

const TodoItem: React.FC<{todo: Todo, checkTodo: any, id: number, isCompleted: boolean, deleteTodo: any}> = ({ todo, checkTodo, id, isCompleted, deleteTodo }) => {
    
    const markComplete = () => checkTodo(id);

    const todoStyle = isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

    const delTodo = () => deleteTodo(id);

    return (
        <Container>
            <Card variant="outlined" style={{ marginTop: 35, background: "lightgray" }}>
                <CardContent>
                    {/* Check Icon */}
                    <Typography variant="h5" component="h2" style={todoStyle}>
                        <IconButton onClick={markComplete}>
                            <Check style={{ color: 'green' }}/>
                        </IconButton>
                        {todo.title}
                        <IconButton style={{ float: 'right' }} onClick={delTodo}>
                            <Delete style={{ color: 'red' }}/>
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}
export default TodoItem

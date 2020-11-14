import React, { ChangeEvent, useContext, useState } from 'react'
import { FormControl, Container, TextField, Button } from '@material-ui/core'
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [ title, setTitle ] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    }

    return (
        <Container maxWidth="sm">

            <form onSubmit={handleSubmit}>

                <FormControl fullWidth={true}>

                    <TextField label="I will do this" required={true}
                     value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />

                    <Button variant="contained" color="primary" type="submit" 
                        style={{ marginTop: 5 }}
                    >
                       + ADD 
                    </Button>

                </FormControl>

            </form>

        </Container>
    )
}
export default TodoForm
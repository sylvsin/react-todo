import React from 'react';
import TodoContextProvider from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  return (
    <div>
      <TodoContextProvider>
        <TodoForm />
        <TodoList  />
      </TodoContextProvider>
    </div>
  );
}
export default App;

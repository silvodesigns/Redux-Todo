import React from 'react';
import './App.css';

//import the list component into our app
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Redux Todo App</h1>
      <TodoList/>
     
    </div>
  );
}

export default App;

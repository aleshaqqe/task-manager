import { useState } from 'react'
import './App.css'
import { Form } from './Form.jsx'
import {ToDoItem} from './ToDoItem.jsx'

function App() {
  const [todos, setTodos] = useState([])



  //Function for delete all tasks
  const removeAllTasks = () =>{
    setTodos([]);
  }


  //Sort by todos[item.completed]
  const sortByCompleted=()=>{
    setTodos(prev=>[...prev].sort((a,b)=>a.completed-b.completed));
  }
  //Sort by alphabet (ChatGPT thx)
  const sortByAlphabet = ()=>{
    setTodos(prev => [...prev].sort((a,b) => a.title.localeCompare(b.title, ['ru','uk','en'], {sensitivity:'base'})));
  }

  const removeTask = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  const completeTask=(id)=>{
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));

  }


  const addTodo = (input) => {

    if (input) {
      const newTask = {
        id: Date.now(),
        title: input,
        completed: false,
      }

      setTodos(prev => [...prev, newTask]);
      console.log(todos);

    }
  }


  return (
    <div className="todo-app">
      <h1 className="todo-title">Task Manager</h1>
      <Form removeAllTasks={removeAllTasks} sortByCompleted={sortByCompleted} sortByAlphabet={sortByAlphabet}  addTodo={addTodo} />
      <div className="todo-tasksContainer">
        {todos.map(todo => (
          <ToDoItem removeTask={removeTask}
                    completeTask={completeTask}
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}/>
        ))}
      </div>
    </div>
  )
}

export default App

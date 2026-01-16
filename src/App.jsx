import { useState,useEffect } from 'react'
import './App.css'
import { Form } from './Form.jsx'
import {ToDoItem} from './ToDoItem.jsx'

function App() {
  const [todos, setTodos] = useState(()=>{
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved):[];
  });




  //Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);

  //Function for delete all tasks
  const removeAllTasks = () =>{
    setTodos([]);
  }


  //Sort by todos[item.completed]
  const sortByCompleted=()=>{
    setTodos(prev=>[...prev].sort((a,b)=>a.completed-b.completed));
  }


  const sortByAlphabet = ()=>{
    setTodos((prev)=>{
      return [...prev].sort((a,b)=>{
        const cleanA = a.title.replace(/\s+/g, '');
        const cleanB = b.title.replace(/\s+/g, '');
        return cleanA.localeCompare(cleanB, ['ru','uk','en'],{sensitivity:'base',numeric:true,});
      })
    })
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
        priority:0,
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

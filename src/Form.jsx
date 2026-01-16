import {useState} from 'react';
import './App.css'
import {Modal} from "./Sure.jsx";

export function Form({todos,addTodo,sortByAlphabet,sortByCompleted,removeAllTasks}){
  const [input,setInput] = useState('');
  const [showModal, setShowModal] = useState(false);



  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    addTodo(input);
    setInput('');
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={`text`}
          value={input}
          className={`todo-input`}
          placeholder={`Type new task`}
          onChange={handleChange}
        />
        <button className={`todo-addBtn btn`}>Add task</button>
        <br/>
        <button onClick={()=>{
          setShowModal(true);
        }}className={`todo-remove remove btn`}>Remove all tasks</button>
        {showModal && (
          <Modal removeAllTasks={()=>{
            removeAllTasks();
            setShowModal(false);

          }}
          onClose={()=>{
            setShowModal(false);
          }}
          />
        )}
        <div className={`todo-tools`}>
          <button type={`button`} onClick={()=>sortByAlphabet()} className={`todo-sortBtn sort1 btn`}>Sort by Alphabet</button>
          <button type={`button`} onClick={()=>sortByCompleted()} className={`todo-sortBtn sort2 btn`}>Sort by Completed</button>
        </div>
        <br/>
        <br/>
        <hr/>

      </form>
    </>
  )
}
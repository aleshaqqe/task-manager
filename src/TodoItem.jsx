export function ToDoItem({ id, title, completed, removeTask,completeTask }) {
  return (
    <div className={`todo-item task`}>
      <h2 className={`todo-item-title ${completed ? 'completed' : ''}`}>{title}</h2>
      <button onClick={() => removeTask(id)} className="todo-remove btn">Remove task</button>
      {!completed && (
        <button onClick={()=>completeTask(id)} className="todo-complete btn">Complete task</button>
      )}

    </div>
  );
}

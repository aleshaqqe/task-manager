export function Modal({removeAllTasks,onClose}){
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h1>Are you sure?</h1>
        <div className={`todo-sure`}>
          <button onClick={removeAllTasks} type="button" className="todo-sure todo-yes btn">Yes</button>
          <button onClick={onClose} type="button" className="todo-sure todo-no btn">No</button>
        </div>
      </div>
    </div>
  )
}
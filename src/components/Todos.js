import React from 'react';


const Todos = (props) =>(
    <div className="todos">
      <div className="arrow"></div>
      <p className="todo__text">{props.todos}</p>
      <button className="todo__remove__btn" onClick={(e)=>{
          props.handleDeleteTodo(props.todos)
      }}>X</button>
    </div>
)

export default Todos;
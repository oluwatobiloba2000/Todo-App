import React from 'react';

const Todos = (props) =>(
  <div className="todos">
    {
        props.alltodos[props.index].checkstate === 'true' && (
          <div className="todo__done">
            <i className="fas fa-check"></i>
          </div>
        )
      }
      <div className="arrow"></div>
      <p className="todo__time">{props.time}</p>
      <p className="todo__text">{props.todos && props.todos}</p>
      <button className="todo__remove__btn" onClick={(e)=>{
        props.handleDeleteTodo(props.todos && props.todos)
      }}>X</button>
      <button onClick={()=>{
        props.handleCheckTodo(props.index && props.index)
      }} className="finish__todo__button">{
        props.alltodos[props.index].checkstate  === 'false' ? 'finish todo': 'unfinish todo'
      }</button>
    </div>
)

export default Todos;
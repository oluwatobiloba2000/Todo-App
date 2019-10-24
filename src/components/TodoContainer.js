import React from 'react';
import Todos from './Todos';
import image from '../images/todo-pics.png'

const TodoContainer = (props)=>(
    <div className="todos__display__container">
      {props.todos.length === 0 && <img src={image} alt="todo-default" className="todo__empty__image" />}
      {props.todos.map((todo,index)=> <Todos key={index} todos={todo.todo} time={todo.time} handleDeleteTodo={props.handleDeleteTodo} />)}
    </div>
)

//  <div className="todo__empty__image"></div>

export default TodoContainer;
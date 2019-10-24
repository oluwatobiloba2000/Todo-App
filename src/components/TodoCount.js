import React from 'react';

const TodoCount = (props) =>(
    <div className="todo__count__container">
     <h2>Total Todo : {props.index}</h2>
    </div>
)

export default TodoCount;
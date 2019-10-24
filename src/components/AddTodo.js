import React from 'react';

class AddTodo extends  React.Component{
    state = {
        error: ''
    }
    currenttime = () =>(
        new Date().toLocaleString()
    )

       handleAddTodo = (e) =>{
        e.preventDefault();
        const todoInputValue =  e.target.elements.todoInput.value.trim();
        let error = this.props.handleAddTodo(todoInputValue, this.currenttime());
        this.setState(()=>({ error }))
        if(!error){
            e.target.elements.todoInput.value = ' '
        }
       }

    render(){
       return (
       <div className="todo__form__container">
           {this.state.error && <p className="error__p"><i className="fas fa-exclamation-triangle"></i>{this.state.error}</p>}
            <form autoComplete="false" onSubmit={this.handleAddTodo}>
            <input  className="todo__input" type="text" name="todoInput" required />
                <button className="todo__add__btn">Add Todo</button>
            </form>
        </div>)
    }
}

export default AddTodo;
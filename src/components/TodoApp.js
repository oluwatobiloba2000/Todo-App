import React from 'react';
import Header from './Header';
import TodoCount from './TodoCount';
import AddTodo from './AddTodo';
import User from './User';
import TodoContainer from './TodoContainer';


export default class Todoapp extends React.Component{
    state = {
        todos: []
    }
    getFullDate = (date) =>{

    }

    handleAddTodo = (todoToValidate) =>{
    if(!todoToValidate){
        return 'Pls enter a todo'
    }else if(this.state.todos.indexOf(todoToValidate) > -1){
        return 'Todo already exist'
    }
    this.setState((prevState)=>({todos: prevState.todos.concat([todoToValidate])}))
    }

    handleDeleteTodo = (optionToDelete) =>{
       this.setState((prevState)=>({
           todos: prevState.todos.filter((todo)=>{return optionToDelete !== todo})
       }))
    }

    componentDidMount(){
        try{
            const todoFromDB = localStorage.getItem('todoDB')
            const parsedTodo = JSON.parse(todoFromDB);
            if(parsedTodo){
                return  this.setState(()=>({ todos: parsedTodo }));
            }
        }catch(e){
            console.error(e);
        }
    }
    
    componentDidUpdate(preprops, prevState){
      if(prevState.todos.length !== this.state.todos.length){
          localStorage.setItem('todoDB', JSON.stringify(this.state.todos))
      }
    }
    render(){
        return  (
            <div>
                <div className="header__top">
               <Header />
               <AddTodo handleAddTodo={this.handleAddTodo} />
                </div>
               <User todosAvaliable={this.state.todos}/>
               <TodoCount index={this.state.todos.length}/>
               <TodoContainer todos={this.state.todos} handleDeleteTodo={this.handleDeleteTodo} />
            </div>
        )
    }
}
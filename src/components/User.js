import React from 'react';
import Time from './Time'

class User extends React.Component{
    state = {
        currentUser : ''
    }

    componentDidMount(){
        const ownerfromDB = localStorage.getItem('Owner');
        const owner = JSON.parse(ownerfromDB);
        this.setState(()=>({ currentUser : owner}))

        if(owner === undefined || owner === null || owner === ''){
            let name = prompt('what is your name ?')
            if(name){
                let trimmedName = name.trim()
                return  this.setState(()=>({ currentUser : trimmedName}))
            }
        }
    }

    changeUser = (e) =>{
        let name = prompt('what is your name ?')
        if(name){
            let trimmedName = name.trim();
          return  this.setState(()=>({ currentUser : trimmedName}))
        }
        // e.target.setAttribute('contenteditable', 'true');
        // const changeuser =  e.target.innerText;
    }

    componentDidUpdate(preprops, prevState){
        if(prevState.currentUser !== this.state.currentUser){
            return localStorage.setItem('Owner', JSON.stringify(this.state.currentUser))
        }
    }
    render(){
        return (
            <div className="user__container">
                <div className="username__container">
              {this.state.currentUser &&<div className="username__display__div"><i className="fas fa-user"></i>{this.state.currentUser}</div>}</div>
              <Time />
              <button className="changeUser__btn" onClick={this.changeUser}>Choose a Username</button>
            </div>
        )
    }
}


export default User;
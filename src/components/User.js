import React from 'react';


class User extends React.Component{
    state = {
        currentUser : undefined
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

class Time extends React.Component{
    state = {
        now: undefined
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(()=>(
            {now: new Date().toLocaleString()}
            ))
        }, 1000)
    }
    render(){
        return(<div className="time__container">
            <p>{this.state.now}</p>
        </div>)
    }

}

export default User;
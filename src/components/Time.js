import React from 'react';


class Time extends React.Component{
    state = {
        now: ''
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

export default Time;

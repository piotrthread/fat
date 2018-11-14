import React from 'react';
import css from './Welcome.scss';
import Timer from '../timer/Timer.jsx';

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            start: false
        };
    }

    handleStart = (e) => {
        e.preventDefault();
        this.setState({start: true});
    }

    render(){
        if(this.state.start == true){
            return <Timer />;
        }else {
            return <React.Fragment>
                <div className="welcomeScreen">
                    <h1 className="title">Free Athlete Timer</h1>
                    <p className="subtitle">It's time to get ripped!</p>
                    <button className="startBtn" onClick={this.handleStart}>START</button>
                </div>
            </React.Fragment>;
        }
    }
}

export default Welcome;
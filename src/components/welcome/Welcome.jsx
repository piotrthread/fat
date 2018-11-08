import React from 'react';
import css from './Welcome.scss';

class Welcome extends React.Component{
    render(){
        return <React.Fragment>
            <div className="welcomeScreen">
                <h1 className="title">Free Athlete Timer</h1>
                <p className="subtitle">It's time to get ripped!</p>
            </div>
        </React.Fragment>;
    }
}

export default Welcome;
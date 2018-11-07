import React from 'react';
import css from './App.scss';
import Timer from '../timer/Timer.jsx';

class App extends React.Component{
    render(){
        return <React.Fragment>
                    <div className="timer">
                        <Timer />
                    </div>
        </React.Fragment>;
    }
}

export default App;
import React from 'react';
import Timer from '../timer/Timer.jsx';

class App extends React.Component{
    render(){
        return <React.Fragment>
                <h1>FAT - Free Athlete Timer</h1>
                <Timer />
        </React.Fragment>;
    }
}

export default App;
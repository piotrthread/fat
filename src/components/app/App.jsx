import React from 'react';
import SetTimer from '../settimer/SetTimer.jsx';

class App extends React.Component{
    render(){
        return <React.Fragment>
                <h1>FAT - Free Athlete Timer</h1>
                <SetTimer />
        </React.Fragment>;
    }
}

export default App;
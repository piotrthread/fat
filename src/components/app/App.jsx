import React from 'react';
import css from './App.scss';
import FreeAthleteTimer from '../fat/FreeAthleteTimer.jsx';


class App extends React.Component{
    render(){
        return <React.Fragment>
                        <FreeAthleteTimer/>
                </React.Fragment>;
    }
}

export default App;
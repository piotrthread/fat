import React from 'react';
import css from './FreeAthleteTimer.scss';
import Welcome from '../welcome/Welcome.jsx';
import Menu from '../menu/Menu.jsx';
import Settings from '../settings/Settings.jsx';
import Success from '../success/Success.jsx';

class FreeAthleteTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuActive: false,
            successActive: false,
            timerReady: false
        };
    }
    openMenu = () => {
        this.setState({menuActive: !this.state.menuActive});
    }
    readyToStart = () => {
        this.setState({menuActive: !this.state.menuActive,
                       timerReady: true });
    }
    render(){
        return <React.Fragment>
            <div className="fatContainer">
                <div className="hamburgerMenu">
                    <Menu menuClick={this.openMenu} menuActive={this.state.menuActive}/>
                </div>
                <div className={this.state.menuActive ? "settingsVisible" : "settingsHidden"}>
                    <Settings onSave={this.readyToStart} menuActive={this.state.menuActive}/>
                </div>
                <div className={this.state.successActive ? "successVisible" : "successHidden"}>
                    <Success />
                </div>
                <Welcome  menuClick={this.openMenu}/>
            </div>
        </React.Fragment>;
    }
}

export default FreeAthleteTimer;
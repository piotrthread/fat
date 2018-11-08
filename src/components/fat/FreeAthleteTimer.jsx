import React from 'react';
import css from './FreeAthleteTimer.scss';
import Welcome from '../welcome/Welcome.jsx';
import Menu from '../menu/Menu.jsx';
import Settings from '../settings/Settings.jsx';

class FreeAthleteTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuActive: false
        };
    }
    openMenu = () => {
        this.setState({menuActive: !this.state.menuActive});
    }
    render(){
        return <React.Fragment>
            <div className="fatContainer">
                <div className="hamburgerMenu">
                    <Menu menuClick={this.openMenu}/>
                </div>
                <div className={this.state.menuActive ? "settingsVisible" : "settingsHidden"}>
                    <Settings />
                </div>
                <Welcome  menuClick={this.openMenu}/>
            </div>
        </React.Fragment>;
    }
}

export default FreeAthleteTimer;
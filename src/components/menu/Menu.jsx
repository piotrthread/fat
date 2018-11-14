import React from 'react';
import css from './Menu.scss';

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: false
        };
    }

    handleClick = () => {
        this.setState({active: !this.props.menuActive}, () => {
            this.props.menuClick();
        });
    }

    render(){
        return <React.Fragment>
            <nav>
                <div className="container">
                    <div className="menu-bar" onClick={this.handleClick}>
                        <div className={this.props.menuActive ? "menu-hamburger-active" : "menu-hamburger"}>
                            <div className={this.props.menuActive ? "line-active" : "line"}></div>
                        </div>
                    </div>
                </div>  
            </nav>
        </React.Fragment>;
    }
}

export default Menu;
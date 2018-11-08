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
        this.setState({active: !this.state.active}, () => {
            this.props.menuClick();
        });
    }

    render(){
        return <React.Fragment>
            <nav>
                <div className="container">
                    <div className="menu-bar" onClick={this.handleClick}>
                        <div className={this.state.active ? "menu-hamburger-active" : "menu-hamburger"}>
                            <div className={this.state.active ? "line-active" : "line"}></div>
                        </div>
                    </div>
                </div>  
            </nav>
        </React.Fragment>;
    }
}

export default Menu;
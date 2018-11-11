import React from 'react';
import css from './Settings.scss';

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roundQty: 0,
            activeTime: 0,
            restTime: 0
        };
    }
    roundPlus = (e) => {
        e.preventDefault();
        this.setState({roundQty: this.state.roundQty + 1});
    }

    roundMinus = (e) => {
        e.preventDefault();
        if(this.state.roundQty > 0){
            this.setState({roundQty: this.state.roundQty - 1});
        }
    }

    activePlus = (e) => {
        e.preventDefault();
        this.setState({activeTime: this.state.activeTime + 1});
    }

    activeMinus = (e) => {
        e.preventDefault();
        if(this.state.activeTime > 0){
            this.setState({activeTime: this.state.activeTime - 1});
        }
    }

    restPlus = (e) => {
        e.preventDefault();
        this.setState({restTime: this.state.restTime + 1});
    }

    restMinus = (e) => {
        e.preventDefault();
        if(this.state.restTime > 0){
            this.setState({restTime: this.state.restTime - 1});
        }
    }

    render(){
        return <React.Fragment>
            <div className="settings">
                <h1>Timer Settings.</h1>
                <div className="rounds">
                <button className="minus" onClick={this.roundMinus}>-</button>
                    <h2>ROUNDS: {this.state.roundQty}</h2>
                    <button className="plus" onClick={this.roundPlus}>+</button>
                </div>
                <div className="active">
                    <button className="minus" onClick={this.activeMinus}>-</button>
                    <h2>WORKOUT: {this.state.activeTime}s</h2>
                    <button className="plus" onClick={this.activePlus}>+</button>
                </div>
                <div className="rest">
                    <button className="minus" onClick={this.restMinus}>-</button>
                    <h2>REST: {this.state.restTime}s</h2>
                    <button className="plus" onClick={this.restPlus}>+</button>
                </div>
            </div>
        </React.Fragment>;
    }
}

export default Settings;
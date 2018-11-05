import React from 'react';

function startInterval(fn, time) {
    fn();
    return(setInterval(fn, time));
}

class SetTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roundNumber: 8,
            activeTime:10,
            restTime:5,
            roundCount:8,
            activeCount:10,
            restCount:5,
            train:false
        };
    }
    startTimer = (e) => {
        e.preventDefault();
        let time = (this.state.activeTime + this.state.restTime)*1000;
        this.timer = startInterval(() => {
            this.workout = setInterval(() => {
                this.setState({activeCount: this.state.activeCount - 1});
                if(this.state.activeCount == 0){
                    clearInterval(this.workout);
                    this.rest = setInterval(() => {
                        this.setState({restCount: this.state.restCount - 1});
                        if(this.state.restCount == 0){
                            clearInterval(this.rest);
                            this.setState({restCount: this. state.restTime});
                        }
                    },1000);
                    this.setState({
                        roundCount: this.state.roundCount - 1,
                        activeCount: this.state.activeTime});
                }
            },1000);
            if(this.state.roundCount == 0){
                clearInterval(this.timer);
            }
        },time);
    }
    render(){
        return <React.Fragment>
                <h1>{this.state.activeCount}</h1>
                <h1>{this.state.restCount}</h1>
                <h1>{this.state.roundCount}</h1>
                <button onClick={this.startTimer}>START</button>
        </React.Fragment>;
    }
}

export default SetTimer;
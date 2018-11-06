import React from 'react';

function startInterval(fn, time) {
    fn();
    return(setInterval(fn, time));
}

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roundNumber: 3,
            activeTime:5,
            restTime:3,
            roundCount: null,
            activeCount: null,
            restCount: null,
            train:false
        };
    }
    startTimer = (e) => {
        e.preventDefault();

        this.setState({
            roundCount: this.state.roundNumber
        });

        let time = (this.state.activeTime + this.state.restTime + 2)*1000;

        this.timer = startInterval(() => {
            
            this.setState({
                activeCount: this.state.activeTime,
                restCount: this.state.activeTime + this.state.restTime,
                train:true
            });

            this.active = setInterval(() => {
                if(this.state.activeCount == 0){
                    this.setState({train: false}, () => {
                        clearInterval(this.active);
                    });
                }else{
                    this.setState({activeCount: this.state.activeCount - 1});
                }
            },1000);

            this.rest = setInterval(() => {
                if(this.state.restCount == 0){
                        clearInterval(this.rest);
                }else{
                    this.setState({restCount: this.state.restCount - 1});
                }
            },1000);

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

export default Timer;
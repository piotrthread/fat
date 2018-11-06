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
        this.setState({roundCount: this.state.roundNumber});
        this.timer = startInterval(() => {
            clearInterval(this.workout);
            clearInterval(this.rest);
            this.setState({
                train: true
            });
            if(this.state.roundCount == 0){
                this.setState({
                    activeCount: null,
                    restCount: null,
                    roundCount: null
                });
                clearInterval(this.timer);
                clearInterval(this.workout);
                clearInterval(this.rest);
            }else{
                this.setState({
                    activeCount: this.state.activeTime,
                    restCount: this.state.restTime
                });
                setTimeout(() => {
                    this.rest = setInterval(() => {
                        this.setState({
                            restCount: this.state.restCount -1
                        });
                    },1000);
                },this.state.activeTime * 1000);
                this.workout = setInterval(() => {
                    if(this.state.activeCount == 0){
                        this.setState({
                            roundCount: this.state.roundCount - 1,
                            train: false
                            }, () => {
                            clearInterval(this.workout);
                        });
                    }else{
                        this.setState({
                            activeCount: this.state.activeCount - 1
                        });
                }   
                },1000);
            }
        },(this.state.activeTime + this.state.restTime + 1) * 1000);
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
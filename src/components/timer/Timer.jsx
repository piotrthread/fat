import React from 'react';
import css from './Timer.scss';
import Active from '../active/Active.jsx';
import Rest from '../rest/Rest.jsx';
import Round from '../round/Round.jsx';

function startInterval(fn, time) {
    fn();
    return(setInterval(fn, time));
}

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roundNumber: 5,
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
                    this.rest = startInterval(() => {
                        this.setState({
                            restCount: this.state.restCount -1
                        });
                    },1000);
                },(this.state.activeTime + 2) * 1000);
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
        },(this.state.activeTime + this.state.restTime + 2) * 1000);
    }
    render(){
        return <React.Fragment>
                {this.state.train
                ?<Active currActive={this.state.activeCount} allActive={this.state.activeTime}/>
                :<Rest currRest={this.state.restCount} allRest={this.state.restTime}/>}
                <Round currRound={this.state.roundCount} allRound={this.state.roundNumber}/><br/>
                <button className="startButton" onClick={this.startTimer}>START</button>
        </React.Fragment>;
    }
}

export default Timer;
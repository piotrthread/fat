import React from 'react';

function setIntervalAndExecute(fn, time) {
    fn();
    return(setInterval(fn, time));
}

class SetTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roundNumber: 8,
            activeTime:10,
            restTime:5
        };
    }
    componentDidMount(){
        this.interval = setIntervalAndExecute(() => {
            console.log(this.state.roundNumber);
            let workout = this.state.activeTime;
            let rest = this.state.restTime;
            this.activeTime = setIntervalAndExecute(() => {
                console.log(workout);
                if(workout == 0){
                    clearInterval(this.activeTime);
                    this.restTime = setIntervalAndExecute(() => {
                console.log(rest);
                if(rest == 0){
                    clearInterval(this.restTime);
                }else{
                    rest--;
                }
            },1000);
                }else{
                    workout--;
                }
            },1000);
            this.setState({roundNumber: this.state.roundNumber - 1});
        },((this.state.activeTime + this.state.restTime)*1000));
        
    }
    render(){
        return <React.Fragment>
                       <h1>set timer</h1>
            
        </React.Fragment>;
    }
}

export default SetTimer;
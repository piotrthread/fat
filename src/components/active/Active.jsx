import React from 'react';
import css from './Active.scss';
import moment from 'moment';

function pad(num) {
    return ("0"+num).slice(-2);
}
function mmss(secs) {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  minutes = minutes%60;
  return pad(minutes)+":"+pad(secs);
}

class Active extends React.Component{
    render(){
        let percent = (439 * this.props.currActive)/this.props.allActive;
        let dashOffset = percent.toString();
        let styles = {
            strokeDashoffset: dashOffset
        };

        return <React.Fragment>
                {this.props.currActive != null 
                ?<div className="activeCounter">
                    <h1 className="time">{mmss(this.props.currActive)}</h1>
                    <svg height="146" width="146">
                    <defs>
                        <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#24f47c" />
                        <stop offset="100%" stopColor="#22d66e" />
                        </linearGradient>
                    </defs>
                    <circle cx="73" cy="73" r="70" stroke="rgba(255,255,255,.1)" strokeWidth="5" fill="none"/>
                        <circle cx="73" cy="73" r="70" stroke="red" strokeWidth="5" fill="none" id ="circle" style={styles}/>
                    </svg>
                </div>
                :null}
        </React.Fragment>;
    }
}

export default Active;
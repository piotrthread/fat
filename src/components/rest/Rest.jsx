import React from 'react';
import css from './Rest.scss';

function pad(num) {
    return ("0"+num).slice(-2);
}
function mmss(secs) {
  var minutes = Math.floor(secs / 60);
  secs = secs%60;
  minutes = minutes%60;
  return pad(minutes)+":"+pad(secs);
}

class Rest extends React.Component{
    render(){
        let percent = (439 * this.props.currRest)/this.props.allRest;
        let dashOffset = percent.toString();
        let styles = {
            strokeDashoffset: dashOffset
        };

        return <React.Fragment>
            {this.props.currRest != null 
            ?<div className="restCounter">
                <h1 className="time">{mmss(this.props.currRest)}</h1>
                <svg height="146" width="146">
                <defs>
                    <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#ff447e" />
                    <stop offset="100%" stopColor="#eb1d5d" />
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

export default Rest;
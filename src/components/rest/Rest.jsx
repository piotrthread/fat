import React from 'react';
import css from './Rest.scss';

class Rest extends React.Component{
    render(){
        let percent = (439 * this.props.currRest)/this.props.allRest;
        let dashOffset = percent.toString();
        let styles = {
            strokeDashoffset: dashOffset
        };

        return <React.Fragment>
            <h1>{this.props.currRest}</h1>
            {this.props.currRest != null 
            ?<svg height="146" width="146">
            <circle cx="73" cy="73" r="70" stroke="lightgray" strokeWidth="5" fill="none"/>
                <circle cx="73" cy="73" r="70" stroke="red" strokeWidth="5" fill="none" id ="circle" style={styles}/>
            </svg>
            :null}
        </React.Fragment>;
    }
}

export default Rest;
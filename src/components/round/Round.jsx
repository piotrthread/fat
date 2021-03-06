import React from 'react';
import css from './Round.scss';

class Round extends React.Component{
    render(){
        let markerArray = new Array(this.props.allRound).fill(null);
        let styles = {};
        return this.props.currRound != null 
        ?<React.Fragment>
            <div className="roundMarker">
                <ul className="markers">
                    {
                    markerArray.map((element, index) => {
                        if(index <= Math.abs(this.props.currRound - this.props.allRound) - 1){
                            styles = {
                                backgroundColor: "rgba(255,255,255,.8)"
                            };
                        }else{
                            styles = {
                                backgroundColor: "rgba(255,255,255,.1)"
                            };
                        }
                        return <li key={index} className="marker" style={styles}></li>;        
                    })
                    }
                </ul>
            </div>
        </React.Fragment>
        :null;
    }
}

export default Round;
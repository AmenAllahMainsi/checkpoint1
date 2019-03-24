import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
			<div className="box">

					<center>
					<img src={this.props.image}/> 
                    <h2>{this.props.name}</h2>
                    <p>{this.props.des}</p>	
					</center>				
            </div>
    	);
	}
}

export default Box;
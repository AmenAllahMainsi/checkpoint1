import React, {Component} from "react";

class Box4 extends Component{
	render() {
		return(
			<div className="box4">
					<center>
					<h2 className="title">{this.props.title}</h2>	
                    <p className="des">{this.props.des}</p>	
					<button className="hello">En savoir plus</button>
					</center>				
            </div>
    	);
	}
}

export default Box4;
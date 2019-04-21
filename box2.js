import React, {Component} from "react";

class Box2 extends Component{
	render() {
		const title = {
							fontSize: 24,
							color: 'white',
							}

		const button = {
							color:'black',
							borderColor:'grey', 						
							borderRadius:12,
							borderStyle:'solid',
							fontSize: 20,
							cursor: 'pointer',
							display: 'inline-block',
							fontFamily:'Comic Sans MS'}				

		const ktiba = {
							color:'black',
							fontFamily:'Comic Sans MS',
							fontSize: 16,}
						
	    const box2  = {	
						display:'inline-block',         
						width: 300, 
						height: 400,
						overFlow:'hidden',
						boxSizing:'border-box',
						borderStyle:'solid',
						paddingTop:44.5,
						background:'grey'}
		
		return(
			<div style={box2}>
					<center>
					<h2 	 style ={title}>{this.props.title}</h2>		
                    <p		 style ={ktiba}>{this.props.des}</p>	
					<button  style ={button}>En savoir plus</button>
					
					</center>				
            </div>
    	);
	}
}

export default Box2;
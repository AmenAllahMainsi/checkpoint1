import React, {Component} from "react";

class Box4 extends Component{
	render() {
		const title = {fontSize: 24,
					   color: 'white',
					 }
							

		const button = {	color:'black',
							borderColor:'grey', 						
							borderRadius:12,
							borderStyle:'solid',
							fontSize: 20,
							cursor: 'pointer',
							display: 'inline-block',
							fontFamily:'Comic Sans MS'}				

							
		const ktiba = {		color:'black',
							fontFamily:'Comic Sans MS',
							fontSize: 16,}
						

		const box4 	= { display:'inline-block',
						background:'grey',            
						width: 300, 
						height: 400,
						overFlow:'hidden',
						paddingTop:68,
						boxSizing:'border-box',
						borderStyle:'solid',} 
												
									
				
						

						
		return(
			<div style ={box4}>
					<center>
					<h2 	style={title} >{this.props.title}</h2>	
                    <p 		style={ktiba}>{this.props.des}</p>	
					<button style={button}>En savoir plus</button>
					</center>				
            </div>
    	);
	}
}

export default Box4;
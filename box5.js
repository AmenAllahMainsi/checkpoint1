import React, {Component} from "react";

class Box5 extends Component{
	render() {

	 		const stat={textAlign:'center',
						overflow: 'hidden',
						display: 'inline-block',
						boxSizing:'border-box',
						padding: 10,}
																		
						 							
			const title ={overFlow:'hidden',
						  display:'block',
						  color:'black'}

			const desc  ={overflow:'hidden',
						 display:'inline',
						 fontFamily:'Comic Sans MS',
						 fontSize: 18,}

			const box5 ={overflow:'hidden',}
			

	const Box6 = (props)=>(
		<div style={stat}>
				<h2 style={title}>{props.title}</h2>
				<p  style={desc} >{props.desc} </p>
		</div>
	);


		return(
			<div style={box5}>			
					<Box6 title={'+20,000'}desc={'Passionnés Du Digital'}></Box6>
					<Box6 title={'+500'}   desc={'Etudiants Depuis Le Demarrage en Aout 2016'}></Box6>
					<Box6 title={'+300'}   desc={'Produits Developpés'}></Box6>
					<Box6 title={'+30'}    desc={'Instructeurs Game,Web,Mobile'}></Box6>
					<Box6 title={'+50'}    desc={'Speakers'}></Box6>
					<Box6 title={'400m²'}  desc={'De Hackerspace Au cour Du Lac 1'}></Box6>					
            </div>
    	);
	}
}

export default Box5;
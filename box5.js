import React, {Component} from "react";
const Box6 = (props)=>(
	<div className="stat">
		<h2 className="box6-title">{props.title}</h2>
		<p className="box6-desc" >{props.desc}</p>
	</div>
);

class Box5 extends Component{
	render() {
		return(
			<div className="box5">			
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
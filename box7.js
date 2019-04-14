import React, {Component} from "react";
import Image from '../Tunis.jpg';
import Image2 from '../sousse.jpg';
import Image3 from '../sfax.jpg';
const Box8 = (props)=>(
      <div className="places">
            <img className="box8-image" src={props.image}/> 
            <p className="box8-desc">{props.desc}</p>
      </div>
);

class Box7 extends Component{
   
         render() {
            console.log(Image);
               return(
                  <div className="box7">
                        <Box8 desc="Tunis"  image={Image}> </Box8>
                        <Box8 desc="Sousse" image={Image2}></Box8> 
                        <Box8 desc="Sfax"   image={Image3}></Box8> 

                  </div>
    	);
	}
}

export default Box7;
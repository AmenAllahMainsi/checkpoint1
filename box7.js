import React, {Component} from "react";
import Image from '../Tunis.jpg';
import Image2 from '../sousse.jpg';
import Image3 from '../sfax.jpg';

class Box7 extends Component{
      render() {

            const places={display:'inline-block',
                          boxSizing:'border-box',}  
            
            const image={width:400,
                        display:'block', 
                        overflow:'hidden',
                        boxSizing:'border-box',
                        padding:100}

            const desc={color:'black',
                        display: 'inline-block',
                        overflow:'hidden',
                        boxSizing: 'border-box'}

            const box7={backgroundsize:'cover',
                        position:'relative',
                        top: 'auto',} 

 const Box8 = (props)=>(
      <div style={places}>
            <img style={image} src={props.image}/> 
            <p   style={desc}>{props.desc}</p>
      </div>
);
                  

               return(
                  <div style={box7}>
                              <Box8 desc="Tunis"  image={Image}> </Box8>
                              <Box8 desc="Sousse" image={Image2}></Box8> 
                              <Box8 desc="Sfax"   image={Image3}></Box8> 
                  </div>
    	);
   }
}

export default Box7;
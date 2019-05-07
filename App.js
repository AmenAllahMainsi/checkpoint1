import React, { Component } from 'react';
import './App.css';
import Box from'./components/box';
import mirage  from'./mirage.png';
import caustic from'./caustic.png';
import Bloodhound from'./bloodhound.png';
import Bangalore from './bangalore.png';

class App extends Component{
render()
         {
            return(
                    <div className="amen">                           
                                            <center>          
                                                        <h1>Apex Legends</h1>
                                                        <Box  style={Box} name='Mirage'    gender='male'    image={mirage}    des="Illusionniste holographique"/>               
                                                        <Box  style={Box} name='Caustic'   gender='male'    image={caustic}   des="Piégeur toxique"/>                              
                                                        <Box  style={Box} name='Bangalore' gender='female'  image={Bangalore} des="Militaire professionnelle"/>               
                                                        <Box  style={Box} name='Bloodhound'gender='male'    image={Bloodhound}des="Experte en traque et en technologie"/>              
                                            </center>  
                    </div>   
    );
  }
}
export default App;

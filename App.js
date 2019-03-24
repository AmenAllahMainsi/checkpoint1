import React, { Component } from 'react';
import './App.css';
import Box from './components/box';
import mirage  from'./mirage.png';
import caustic from'./caustic.png';
import bloodhound from'./bloodhound.png';
import bangalore from './bangalore.png';

class App extends Component {
  render(){
     return(  
        
        <div className="amen">         
        <center> 
         
              <h1   className="h1">Apex Legends</h1>
              <Box  className="box" name='Mirage'     image={mirage}    des ="Illusionniste holographique"/>               
              <Box  className="box" name='Caustic'    image={caustic}   des="Piégeur toxique"/>                              
              <Box  className="box" name='Bangalore'  image={bloodhound}des="Militaire professionnelle"/>               
              <Box  className="box" name='Bloodhound' image={bangalore} des="Experte en traque et en technologie"/>
              
       </center>      
       </div>  
  
  );
  }
}

export default App;

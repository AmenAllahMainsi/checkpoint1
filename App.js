import React, { Component } from 'react';
import Box from './components/box';
import Box2 from './components/box2';
import Box3 from './components/box3';
import Box4 from './components/box4';
import Box5 from './components/box5';
import Box7 from './components/box7';


class App extends Component{
      render(){
                const title={color:'black'} 
                const container={}

      return(  

        <div style={container}> 


              <h1 style={title}>Nos Programmes</h1>

              <center> 

              <Box  title="Full Time Program"   des="Le Full Time Coding est un programme intensif de 3 mois pour devenir développeur fullstack JavaScript ou PHP/Symfony.
              Les technologies Javascript sont des technologies développés par Google et Facebook et qui permettent de créer des applications web intuitives, dynamiques et scalables. 
              Ces technologies sont de plus en plus utilisées par les entreprises."/>


              <Box2 title="Part Time Program"   des="Le Part Time Program est un programme qui se déroule sur 3 mois à raison d'une demi-journée par semaine pendant le weekend . 
              Il s'adresse à tous ceux qui souhaitent créer leur propre produit technologique. Le programme comporte 5 parcours selon le produit technologique que l'étudiant veut créer."/>


              <Box3 title="kids Coding Program" des="Ce programme vise à initier les plus jeunes (8-12 ans) à l'informatique et à la programmation sur 4 niveaux.
              un niveau dure 2 mois, à la fin du programme, l'enfant doit présenter son projet au PDG d'une entreprise technologique "/>


              <Box4 title="Summer Academy"      des="Le Summer Academy est un programme de 3 semaines pendant l'été. Il s'adresse à tous ceux qui souhaitent créer leur propre produit technologique.                                             
              Le programme comporte 4 parcours selon le produit technologique que l'étudiant veut créer."/>

              <Box5/>

              </center>
         
           <Box7></Box7>
        
         </div>             
       );  
    }                           
 }                   
 
export default App;

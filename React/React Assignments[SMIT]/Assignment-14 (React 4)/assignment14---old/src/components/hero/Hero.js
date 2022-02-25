import React from 'react'
import {HeroStyles} from './Hero.Style';
 

export default function Hero() {
  return (
    <div>
        <div className="img-fluid" style={HeroStyles.heroImage}>
         
            <p className="heroText" style={HeroStyles.heroText}>Building things<br/> is our mission.</p>
            
        </div>
 
 
  </div>

 
  )
}

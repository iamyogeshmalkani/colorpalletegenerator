import React from 'react'
import Pallate from './pallate';
import { useState } from 'react';

export default function Pallates(props) {
   const pallets=["black","yellow","gray","blue","green"];
  return (
      <div className="pallateflex" >
        { props.colors.map((p,ind)=>{
          
          
          return (
              <Pallate color={p} key={ind} index={ind} updatelocked={props.lockedupdater} />
          )
      })}
       </div>
       

    
  )
     
     
}

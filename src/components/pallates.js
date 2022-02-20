import React from 'react'
import Pallate from './pallate';


export default function Pallates(props) {
  
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

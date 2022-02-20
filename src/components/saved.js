import React from 'react'


export default function Saved() {
    var cpallates = JSON.parse(localStorage.getItem("savedcolorpallates"));
    var colors = JSON.parse(localStorage.getItem("savedcolors"));
    console.log(colors);
  return (
      
         <div className="saved">
             
             <div className="savedpallates" style={{}}>
                 <h1>Saved Pallates</h1>
         {cpallates?.map((p)=>{
          return(
              <div className="singlepallate" style={{display: "flex", width: "100vh", margin: "auto",marginTop: "1rem"}}>
                   {p.map((pallate)=>{
                       return(
                       
                        <div style={{ background: `#${pallate}`,width: "15%",hieght: "1rem" }}>
                           <p className="pallatename" style={{fontSize: "0.7rem"}}>#{pallate}</p>
                            
                        </div>
                       
                       
                       )
                   })}

              </div>
           
          )
        
      })}

      </div>
     
      
      <div className="savedcolors">
      <h1 style={{margin: "auto",marginTop: "4rem",marginBottom: "1rem"}}>Saved Colors</h1>
     
          
      {
          colors?.map((color)=>{
              return(
                <div  className="singlecolor" style={{ background: `#${color}` }}>
                <p  className="pallatename" style={{fontSize: "0.7rem"}}>#{color}</p>
           </div>

              )
              

          })
      }

      </div>
     
      </div>
         
      
    
  )
}

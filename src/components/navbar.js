import React from 'react'
import Button from '@mui/material/Button'




export default function Navbar(props) {
    function savecolorpallate(){
        var existingEntries = JSON.parse(localStorage.getItem("savedcolorpallates"));
        if(existingEntries == null) existingEntries = [];
       console.log(existingEntries);
       var flag = true;
       existingEntries.forEach(pallate => {
        if(JSON.stringify(props.colors)===JSON.stringify(pallate)){
          
          flag=false;
         
  }
         
       });
       if(flag){
        var entry = props.colors;
        localStorage.setItem("pallate", JSON.stringify(entry));
       
        existingEntries.push(entry);
        localStorage.setItem("savedcolorpallates", JSON.stringify(existingEntries));
       }
       
      
    
    }
  return (
    <div style={{width: "100%"}}>
        <Button variant="outlined" style={{color: "black",borderColor: "black",float: "right",margin: "1rem 1rem 1rem 1rem"}} onClick={()=>{props.generator()}}>Genearte</Button>
        <Button variant="outlined" style={{color: "black",borderColor: "black",float: "right",margin: "1rem 1rem 1rem 1rem"}} onClick={()=>{savecolorpallate()}}>Save</Button>
        <a href="/saved"><Button variant="outlined" style={{color: "black",borderColor: "black",float: "right",margin: "1rem 1rem 1rem 1rem"}} >Saved</Button></a>
       

    </div>
  )
}

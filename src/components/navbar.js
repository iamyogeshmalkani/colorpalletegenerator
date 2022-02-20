import React from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function Navbar(props) {
    function savecolorpallate(){
        var existingEntries = JSON.parse(localStorage.getItem("savedcolorpallates"));
        if(existingEntries == null) existingEntries = [];
       console.log(existingEntries);
       existingEntries.map((pallate)=>{
           if(JSON.stringify(props.colors)===JSON.stringify(pallate)){
               console.log(true);
       }
       })
        var entry = props.colors;
        localStorage.setItem("pallate", JSON.stringify(entry));
       
        existingEntries.push(entry);
        localStorage.setItem("savedcolorpallates", JSON.stringify(existingEntries));
      
    
    }
  return (
    <div style={{width: "100%"}}>
        <Button variant="outlined" style={{color: "black",borderColor: "black",float: "right",margin: "1rem 1rem 1rem 1rem"}} onClick={()=>{props.generator()}}>Genearte</Button>
        <Button variant="outlined" style={{color: "black",borderColor: "black",float: "right",margin: "1rem 1rem 1rem 1rem"}} onClick={()=>{savecolorpallate()}}>Save</Button>
       

    </div>
  )
}

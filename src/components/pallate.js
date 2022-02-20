import React from 'react'
import { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

export default function Pallate(props) {
  
  console.log(props.index);
  const [islocked,setislocked]= useState(false);
  function lockclick(){
   
    if(islocked){
      props.updatelocked(props.index,"remove");
      setislocked(false);

    }
    else{
      props.updatelocked(props.index,"add");
      setislocked(true);
    }

  }
  function copycolor(){
    navigator.clipboard.writeText(props.color);

  }
  function addfavouritecolor(){
    var existingEntries = JSON.parse(localStorage.getItem("savedcolors"));
    if(existingEntries == null) existingEntries = [];
   console.log(existingEntries);
  if(existingEntries.includes(props.color)){
    return ;
  }
  else{
    var entry = props.color;
    localStorage.setItem("color", JSON.stringify(entry));
   
    existingEntries.push(entry);
    localStorage.setItem("savedcolors", JSON.stringify(existingEntries));

  }
    
  }
  return (
    <div className="pallatecontainer" > 
    <div  className="singlepallatecolor" style={{ background: `#${props.color}` }}>
    <IconButton onClick={()=>{
      addfavouritecolor()
    }}>
        <StarBorderIcon/>
        </IconButton>

      <IconButton onClick={()=>{copycolor()}}>
        <ContentCopyIcon/>
        </IconButton>
      <IconButton onClick={()=>{lockclick()}}>
        {!islocked ?<LockOpenIcon /> : <LockIcon/>}
      
      </IconButton>
        
    </div>
    <p>#{props.color}</p>
    </div>
  )
}

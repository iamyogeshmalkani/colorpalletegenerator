import React from 'react'
import { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

export default function Pallate(props) {
  const [open, setOpen] = React.useState(false);
  const [snackbarmessage,setsnackbarmessage] = useState("");

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
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
    setOpen(true);
    setsnackbarmessage("color code copied");

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
  setOpen(true);
  setsnackbarmessage("color added to favourite");
    
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
     <p className="pallatename" style={{marginTop: "2rem"}}> #{props.color}</p>
        
    </div>
    <div>
     
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbarmessage}
        action={action}
      />
    </div>
  
    </div>
  )
}

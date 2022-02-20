import logo from './logo.svg';
import './App.css';
import Pallates from './components/pallates';
import Navbar from './components/navbar';
import { useState,useEffect,useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Saved from './components/saved';
import Homepage from './components/homepage';
function App() {
  const [pallates,setpallates] = useState([]);
  const [locked,setlocked]= useState([]);

function hexgenerator(){
  let available = '1234567890abcdef';
    let availableLength = available.length;
   
    
    let list = [];
    if(pallates.length!=0){
      
     
      for(let i=0;i<5;i++){
        let hex = "";
        if(!locked.includes(i)){
         
          for (let x = 0; x < 6; x++) {
            hex += available.charAt(Math.floor(Math.random() * availableLength));
            
          }
          list.push(hex);

        }
        else{
          


        list.push(pallates[i]);

        }
      }
    }
    else{
      for (let i = 0; i < 5; i++) {
        let hex="";
        for (let x = 0; x < 6; x++) {
          hex += available.charAt(Math.floor(Math.random() * availableLength));
         
        }
        list.push(hex);
        
  
       
          
       
      }

    }
   console.log(list);
    
    setpallates(list);
  }
  useLayoutEffect(() => {
    hexgenerator();
  
    
  }, [])
  function  updatedlocked  (ind,str){
    if(str==="add"){
      console.log(locked);
      const temp = locked;
      temp.push(ind);
  
       setlocked(temp);

    }
    else{
      console.log(locked);
      let temp = locked;
     temp = temp.filter(item => item !== ind)
     
  
       setlocked(temp);
    }
   
   
  }
 
  
    return(
      <div className="App" >
      <BrowserRouter>
     <Routes>
       <Route path="/saved" element={<Saved />}/>
       <Route path="/" element={<Homepage colors={pallates} generate={hexgenerator} updatelocked={updatedlocked} />}/>
       
        
       
     </Routes>
   </BrowserRouter> 
     

     
    
   </div>
     
    )
  
  
  

}

export default App;

import React from 'react'
import Navbar from './navbar'
import Pallates from './pallates'

export default function Homepage(props) {
    console.log(props.colors.length);
  return (
    <div>
      
        <Navbar colors={props.colors} generator={props.generate}/>
        <Pallates colors={props.colors} lockedupdater={props.updatelocked} />
    </div>
  )
}

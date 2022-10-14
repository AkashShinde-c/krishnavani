import React from 'react'
import '../CSS/NavBar.css'
import SpecificShlok from './SpecificShlok'
var toggle = false
export default function navBar({sendTrigger}) {

  function setTrigger(){
    toggle?toggle = false: toggle = true;
    sendTrigger(toggle)
  }
  return (
    <>
        <div className="navBar">
          <h1>KRISHNAVANI</h1>
          <button className='searchShlok' onClick={()=>setTrigger()}>Search Shlok</button>
        </div>
    </>
  )
}

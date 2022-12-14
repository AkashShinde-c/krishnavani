import React from 'react'
import '../App'
import '../CSS/Shlokdisplay.css'

export const Shlokdisplay = (props) => {
  return (props.shlok_no)?(
     <>        
        <div className="shlok__no"> 
          {props.shlok_no} <br />
        </div>
        <div className="shlok__text">  
          {props.shlok} 
        </div>
        <div className='wordMeanings'>
          <p className='heading'>Word Meanings</p>
          {props.word_meanings} 
        </div>
      
        </>

  ):"";
}

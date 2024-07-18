import React, { useState } from 'react';
import './App.css'
import ChallengeOne from './components/ChallengeOne';

const message =[
  "Learning React","Apply for job","Invest your new income"
]

function App() {
  //extract Step component for showing this : each component has own state and they work seprat//
  return(
    <div>
    
      <ChallengeOne/>
    </div>
  )

}

export default App


function Step(){
  const [step,setStep ] = useState(1)
  const [isOpen,setIsOpen] = useState(true);
  
  function handlePrevious (){
    //allways use the calback function for updating setState//
   if(step >1) setStep((s)=> s-1)
  }
function handleNext (){
 if(step <3) setStep((s)=> s+1)
}
 
function handleCloseOpen (){
  setIsOpen(!isOpen);
  // this metode is one of the sulotions:
  // if( isOpen){
  // const uniqe = document.getElementById('uniqe');
  // uniqe.style.display= "none"
  // }
  // if(!isOpen){
  //   const uniqe = document.getElementById('uniqe');
  //   uniqe.style.display ="block"
  // }
}

return (
  <div>
    <div className='close-btn'>
      <button onClick={handleCloseOpen}>{isOpen ? "close" : "open"}</button>
    </div>
    { //this is another methode to solve this challenge//
      isOpen && (
        <div id='uniqe' className='step-father'>
        <div className='grid grid-rows-3 grid-cols-3 gap-4 p-5'>
          <div className={`${step >= 1 ? "active" :"not-active"} ml-32`}>1</div>
          <div className={` ${step >= 2 ? "active" :"not-active"}  ml-28`}>2</div>
          <div className={`${step >= 3 ? "active" :"not-active"} ml-20`}>3</div>
          <div className=' col-start-1  col-end-7 '>
            <p className='text-lg font-bold text-indigo-800 mt-5 mb-5'> step {step } : "{message[step-1]}"</p>
          </div>
          <div className='custom-btn ml-80'>
            <button onClick ={handlePrevious}>Previous</button>
          </div>
          <div className='custom-btn ml-48'>
            <button onClick={handleNext}>Next</button>
          </div>
   
        </div>
      
      </div>

      )
    }
   
  </div>
  
)

}
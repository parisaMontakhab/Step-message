import React, { useState } from "react";
import "./App.css";

const message = ["Learning React", "Apply for job", "Invest your new income"];

function App() {
  //extract Step component for showing this : each component has own state and they work seprat//

  return (
    <div>
      <ChallengeOne />
    </div>
  );
}

export default App;

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    //allways use the calback function for updating setState//
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handleCloseOpen() {
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
      <div className="close-btn">
        <button onClick={handleCloseOpen}>{isOpen ? "close" : "open"}</button>
      </div>
      {
        //this is another methode to solve this challenge//
        isOpen && (
          <div id="uniqe" className="step-father">
            <div className="grid grid-rows-3 grid-cols-3 gap-4 p-5">
              <div className={`${step >= 1 ? "active" : "not-active"} ml-32`}>
                1
              </div>
              <div className={` ${step >= 2 ? "active" : "not-active"}  ml-28`}>
                2
              </div>
              <div className={`${step >= 3 ? "active" : "not-active"} ml-20`}>
                3
              </div>
              <div className=" col-start-1  col-end-7 ">
                <p className="text-lg font-bold text-indigo-800 mt-5 mb-5">
                  {" "}
                  step {step} : "{message[step - 1]}"
                </p>
              </div>
              <div className="custom-btn ml-80">
                <button onClick={handlePrevious}>Previous</button>
              </div>
              <div className="custom-btn ml-48">
                <button onClick={handleNext}>Next</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

function ChallengeOne() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const day = new Date("june 21 2027");
  day.setDate(day.getDate() + count);

  function hanldlePlusStep() {
    setStep((s) => s + 1);
  }
  function handleMinesStep() {
    setStep((s) => s - 1);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }

  function handleMinesCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="text-center mt-10">
      <div className="grid grid-cols-3 w-48 mx-auto mb-5">
        <button
          onClick={handleMinesStep}
          className="bg-slate-300 rounded-full font-bold text-2xl "
        >
          -
        </button>
        <p>step :{step} </p>
        <button
          onClick={hanldlePlusStep}
          className="bg-slate-300 rounded-full font-bold text-2xl "
        >
          {" "}
          +
        </button>
      </div>
      <div className="grid grid-cols-3 w-48 mx-auto mb-5 ">
        <button
          onClick={handleMinesCount}
          className="bg-slate-300 rounded-full font-bold text-2xl "
        >
          -
        </button>
        <input value={count} onChange={(e)=> setCount(e.target.value)}
        className="w-16 bg-slate-300 rounded-2xl text-slate-900 text-center" placeholder="0"/>
        <button
          onClick={handlePlusCount}
          className="bg-slate-300 rounded-full font-bold text-2xl "
        >
          {" "}
          +
        </button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days ago was`}{" "}
        </span>
        {day.toDateString()}{" "}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function ChallengeTwo() {
  const [bill, setBill] = useState('');
  const [tipOne, setTipOne] = useState(0);
  const [tipTwo, setTipTwo] = useState(0);

 const tip = bill * ((tipOne + tipTwo)/2/100);
 const total = bill + tip ;

 function handleReset (){
  setBill(0);
  setTipOne(0);
  setTipTwo(0);
 }


  return (
    <div className="text-center">

     <BillInput bill={bill} setBill={setBill}/>

    <PercentageTip tip={tipOne} setTip={setTipOne}> How did you like the services?</PercentageTip>
     
    <PercentageTip tip={tipTwo} setTip={setTipTwo}> How did your friend  like the services?</PercentageTip>  
     
        
  
      {bill > 0 ? (
        <div className="mt-8">
          <p className="font-bold">
            you pay ${total} (${bill} + ${tip})
          </p>
          <button className="bg-slate-200 p-2 rounded-lg mt-4" onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}


function BillInput({setBill,bill}){
  return(
    <div className="mb-4 mt-2">
    <label>How much was the bill?</label>
    <input
      type="text"
      placeholder="Bill value"
      className="bg-slate-200 p-2 text-center rounded-md mx-8"
      value={bill}
      onChange={(e) => setBill(Number(e.target.value))}
    />
  </div>

  )
}

function PercentageTip ({children,tip,setTip}){
  return(
    <div className="mb-4 mt-2">
    <label>{children}</label>
    <select className="bg-slate-200 p-2 text-center rounded-md mx-8" value={tip} onChange={(e)=>setTip(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing (20%)</option>
    </select>
   
  </div>
  )

}
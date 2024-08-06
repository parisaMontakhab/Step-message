import { useState } from "react";

export default function ChallengeTwo() {
  const [bill, setBill] = useState('');
  const [tipOne, setTipOne] = useState(0);
  const [tipTwo, setTipTwo] = useState(0);


  return (
    <div className="text-center">

     <BillInput bill={bill} setBill={setBill}/>

    <PercentageTip tip={tipOne} setTip={setTipOne}> How did you like the services?</PercentageTip>
     
    <PercentageTip tip={tipTwo} setTip={setTipTwo}> How did your friend  like the services?</PercentageTip>  
     
        
  
      {bill > 0 ? (
        <div className="mt-8">
          <p className="font-bold">
            you pay ${bill} (${bill} + $0 tip)
          </p>
          <button className="bg-slate-200 p-2 rounded-lg mt-4" onClick={()=>setBill(0)}>Reset</button>
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
      onChange={(e) => setBill(e.target.value)}
    />
  </div>

  )
}

function PercentageTip ({children,tip,setTip}){
  return(
    <div className="mb-4 mt-2">
    <label>{children}</label>
    <select className="bg-slate-200 p-2 text-center rounded-md mx-8" value={tip} onChange={(e)=>setTip(e.target.value)}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing (20%)</option>
    </select>
   
  </div>
  )

}
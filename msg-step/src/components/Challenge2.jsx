import { useState } from "react";

export default function ChallengeTwo() {
  const [bill, setBill] = useState(0);
  return (
    <div className="text-center">
      <div className="mb-4 mt-2">
        <h2>How much was the bill?</h2>
        <input
          type="text"
          placeholder="0"
          className="bg-slate-200 p-2 text-center rounded-md"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="mb-4 mt-2">
        <label>How did you like the services?</label>
        <select className="bg-slate-200 p-2 text-center rounded-md mx-8">
            <option>Dissatisfied (0%)</option>
            <option>It was okay (5%)</option>
            <option>It was good (10%)</option>
            <option>Absolutely amazing (20%)</option>
        </select>
       
      </div>

      <div className="mb-4 mt-2">
      <label>How did your friend like the services?</label>
        <select className="bg-slate-200 p-2 text-center rounded-md mx-8">
            <option>Dissatisfied (0%)</option>
            <option>It was okay (5%)</option>
            <option>It was good (10%)</option>
            <option>Absolutely amazing (20%)</option>
        </select>
        
      </div>

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

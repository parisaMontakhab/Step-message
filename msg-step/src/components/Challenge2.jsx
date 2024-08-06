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
        <h2>How did you like the services?</h2>
        <input
          type="text"
          placeholder="Dissatisfied(0%)"
          className="bg-slate-200 p-2 text-center rounded-md"
        />
      </div>

      <div className="mb-4 mt-2">
        <h2>How did your friend like the services?</h2>
        <input
          type="text"
          placeholder="Dissatisfied(0%)"
          className="bg-slate-200 p-2 text-center rounded-md"
        />
      </div>
      {bill > 0 ? (
        <div className="mt-8">
          <p>
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

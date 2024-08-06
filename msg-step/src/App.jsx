import React from "react";
import "./App.css";
import Step from "./components/Challenge1";
import ChallengeTwo from "./components/Challenge2";



function App() {
  //extract Step component for showing this : each component has own state and they work seprat//

  return (
    <div>
     <ChallengeTwo/>
    </div>
  );
}

export default App;


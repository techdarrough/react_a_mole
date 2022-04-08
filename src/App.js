import { useState } from "react";
import MoleHole from "./components/Molehole";


export default function App() {
  let [score, setScore] = useState(0)

  const createHill = () =>  {
    let hills = []
    let loops = 9
    for(let i = 0; i < loops; i++) {
      hills.push(<MoleHole key={i} setScore={setScore} score={score}/>)
    } 
    return (
      <div>
        { hills }
      </div>
    )
  }
return (
  <div style={{'textAlign':'center'}}>
    <h1 style={{'fontSize':'3.5em'}}>Weact-A-Mole</h1>
     <p style={{'fontSize': '2.7em'}}> Current score: { score }</p>
    { createHill()}
  </div>
);
}






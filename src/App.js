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
    <h1>Weact-A-Mole</h1>
    { score }
    { createHill()}
  </div>
);
}






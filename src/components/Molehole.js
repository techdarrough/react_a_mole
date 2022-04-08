//molehole function as a main.js import helper components here
import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./Empty";

// use useState to  toggle moles visibility and sets score

const MoleHole = (props) => {
    let [theMole, setTheMole] = useState(false)
    const handleClick= (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole}/>;
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}} >
            {displayMole}
        </div>
    )



}

export default MoleHole
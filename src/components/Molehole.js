//molehole function as a main.js import helper components here
import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./Empty";

// use useState to  toggle moles visibility and sets score

const MoleHole = (props) => {
    let [theMole, setTheMole] = useState(false)
    const handleClick= (e) => {
        props.setScore(props.score++)
        setTheMole(false)
    }
    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole}/>;
    return (
        <div>
            {displayMole}
        </div>
    )



}
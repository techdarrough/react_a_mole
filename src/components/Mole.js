import { useEffect } from "react";
import mole from '../mole.png'

const Mole = (props) => {
   useEffect(() => {
    let rando = Math.ceil(Math.random() * 5000)
    let timed = setTimeout(() =>{
        props.toggle(true)
    }, rando)
    return () => clearTimeout(timed)
   })
   return(
       <div>
           <img style={{'width': '30vw'} }src={mole} onClick={props.handleClick}/>
       </div>
   )
}

export default Mole
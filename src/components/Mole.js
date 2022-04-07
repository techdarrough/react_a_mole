import { useEffect } from "react";
import mole from '../Mole.png'

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
           <img src={mole} />
       </div>
   )
}

export default Mole
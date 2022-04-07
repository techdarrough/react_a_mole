import { useEffect } from "react";
import molehill from "../molehill.png";

const EmptySlot = (props) => {
  useEffect(() => {
    let rando = Math.ceil(Math.random() * 5000);
    let timed = setTimeout(() => {
      props.toggle(true);
    }, rando);
    return () => clearTimeout(timed);
  });
  return (
    <div>
      <img src={molehill} />
    </div>
  );
};

export default EmptySlot;

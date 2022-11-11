import React, { useState, useEffect }  from "react";
import { F1 } from "./F1.jsx";
import { F2 } from "./F2.jsx";
import { F3 } from "./F3.jsx";
import { Purchase } from "./Purchase.jsx";

export const App = (props) => {

  const [showF, setF] = useState(0);
  const [showCheckOutButton, setCheckOutButton] = useState(true);


  console.log("this is showF",showF);

  const handleAppClick = () => {
    setF(1)
    setCheckOutButton(false);
  }

  const returnToMain = () => {
    setF(0)
    setCheckOutButton(true);
  }

  useEffect(()=> {
    setF(0)
  },[])


  console.log("here be the session ID", props.session_id);
  return (
    <div>
      Check out your groceries here!
      {showF === 1 && <F1 setF={setF} />}
      {showF === 2 && <F2 setF={setF} />}
      {showF === 3 && <F3 setF={setF} />}
      {showF === 4 && <Purchase setF={setF} returnToMain={returnToMain}/>}
      { showCheckOutButton && <button onClick={handleAppClick}>Checkout</button> }
    </div>
  )

}
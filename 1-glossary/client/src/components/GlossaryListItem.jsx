import React, { useState } from "react";
import axios from "axios";
import {UpdateComponent} from "./UpdateComponent.jsx";

export const GlossaryListItem = (props) => {
    var dataObj = props.dataObj;
    const [isShowingUpdate, setUpdate] = useState(false);

    const handleClick = () => {
        setUpdate(true);
    }
  return (
    <div>
        {isShowingUpdate && < UpdateComponent dataObj={dataObj}/>}
      {props.dataObj.term}: {props.dataObj.definition} {"   "}
      <button onClick={()=> {
        axios.post('/delete', {
            dataObj
          })
      }} >
        Delete
      </button>{"   "}
      <button onClick={handleClick}>Update</button>
      <br/>
      <br/>
    </div>
  )
};


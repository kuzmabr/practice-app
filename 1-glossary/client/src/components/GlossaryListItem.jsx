import React, { useState } from "react";
import axios from "axios";
import {UpdateComponent} from "./UpdateComponent.jsx";

export const GlossaryListItem = (props) => {
    var dataObj = props.dataObj;
    const [isShowingUpdate, setUpdate] = useState(false);

    const handleClick = (props) => {
        setUpdate(true)
    }
  return (
    <div>
        {isShowingUpdate && < UpdateComponent dataObj={dataObj} dbData={props.dbData} getTerms={props.getTerms} setUpdate={setUpdate} isShowingUpdate={isShowingUpdate}/>}
      {props.dataObj.term}: {props.dataObj.definition} {"   "}
      <button onClick={()=> {
        axios.post('/delete', {
            dataObj
          })
          .then(() => {props.getTerms()})
      }} >
        Delete
      </button>{"   "}
      <button onClick={handleClick}>Update</button>
      <br/>
      <br/>
    </div>
  )
};


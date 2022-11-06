import React, { useState } from "react";
import axios from "axios";
import { GlossaryListItem } from "./GlossaryListItem.jsx";

export const GlossaryList = (props) => {

  return (
    <div>
    <h3>List of Terms</h3>
      {props.dbData.map((dataObj) => (
        <GlossaryListItem dataObj={dataObj} />
    ))}
    </div>
  )
}

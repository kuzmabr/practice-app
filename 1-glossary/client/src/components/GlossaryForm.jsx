import React, { useState } from "react";
import axios from "axios";

export function GlossaryForm(props) {
  const [termDef, setTerm] = useState({ term: "", definition: "" });

  const handleChange = (event) => {
    setTerm({ ...termDef, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // console.log(termDef)
    axios.post('/terms', {
      termDef
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(() => {props.getTerms()})
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="term">Enter a term</label>
      <input type="text" name="term" onChange={handleChange} /> {"   "}
      <label htmlFor="definition">Enter a definition</label>
      <input type="text" name="definition" onChange={handleChange} />
      <button>submit</button>
    </form>
  );
}
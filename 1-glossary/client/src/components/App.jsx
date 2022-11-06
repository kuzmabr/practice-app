import React, { useState, useEffect } from 'react';
import { GlossaryForm } from "./GlossaryForm.jsx";
import { GlossaryList } from "./GlossaryList.jsx";

import axios from "axios";


export const App = (props) => {

  const [dbData, setData] = useState([]);
  const [searchTerm, setTerm] = useState('');




  const handleSubmit = () => {
    setTimeout(() => {
    console.log('submitting');
    axios.post('/searchTerm', {
      definition: searchTerm
    })
    .then((response)=> {(setData(response.data));
    })
  }, 500);
  };


  useEffect(() => {
    axios.get('/terms')
    .then((response) => setData(response.data))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  });

  return (
    <div>
    <h1>Welcome to the Glossary!</h1>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        Filter your seach:
        <input type="text"
        value={searchTerm}
        onChange={(e) => setTerm(e.target.value)}
        />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <GlossaryForm />
    <GlossaryList dbData={dbData}/>
    </div>
  )
}
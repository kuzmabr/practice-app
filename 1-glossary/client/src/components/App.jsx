import React, { useState, useEffect } from 'react';
import { GlossaryForm } from "./GlossaryForm.jsx";
import { GlossaryList } from "./GlossaryList.jsx";
import { SearchComponent } from "./SearchComponent.jsx";
import axios from "axios";


export const App = (props) => {

  const [dbData, setData] = useState([]);

  const getTerms = () => {
    axios.get('/terms')
    .then((response) => setData(response.data))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  useEffect(() => {
    getTerms()
  },[]);

  return (
    <div>
    <h1>Welcome to the Glossary!</h1>
    <SearchComponent dbData={dbData} setData={setData} />
    <GlossaryForm dbData={dbData} getTerms={getTerms} />
    <GlossaryList dbData={dbData} getTerms={getTerms} />
    </div>
  )
}
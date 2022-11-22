import React, { useState, useEffect } from "react";
import axios from "axios";


export function SearchComponent (props) {

  const [searchTerm, setTerm] = useState('');


  const handleSearchSubmit = (event) => {
    console.log('submitting', searchTerm);
    // todo why isn't this
    axios.post('/searchTerm', {
      definition: searchTerm
    })
    .then((data) => {props.setData(data.data)});
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label>
        Filter your seach:
        <input type="text" value={searchTerm} onChange={(e) => setTerm(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}




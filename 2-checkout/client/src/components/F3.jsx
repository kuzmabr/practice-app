import React, { useState } from "react";
import axios from 'axios';

export const F3 = (props) => {
  // F3 collects credit card #, expiry date, CVV, and billing zip code.

  const [f3Data, set3Data] = useState({cNum: null, expDate: '', cvv: null });

  const handle3Change = (event) => {
    set3Data({...f3Data, [event.target.name]: event.target.value})
  };

  const handle3Submit = (event) => {
    console.log('submitting the stuff', f3Data);
    axios.post('/creditcard', {
      f3Data
    },
    props.setF(4)
    ).catch(function (error) {
      console.log(error);
    })
  };


  return (
    <div>
      <p>Please submit credit card data</p>
      <form onSubmit={handle3Submit}>
        <label>credit card number</label>
        <input type="number" name="cNum" onChange={handle3Change} />
        <label>expiration date</label>
        <input type="text" name="expDate" onChange={handle3Change} />
        <label>expiration date</label>
        <input type="number" name="cvv" onChange={handle3Change} />
        <button>Next</button>
      </form>
    </div>
  );

}
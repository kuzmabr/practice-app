import React, {useState} from 'react';
import axios from "axios";

export const F2 = (props) => {

  const [form2Data, setForm2Data] = useState({stAddress1: '', stAddress2: '', city: '', state: '', zipCode: '', phoneNo: ''});

  const handleForm2Change = (event) => {
    setForm2Data({...form2Data, [event.target.name]: event.target.value});
  }

  const handleForm2Submit = (event) => {
    console.log('submitting the stuff', form2Data);
    axios.post('/address', {
      form2Data
    },
    props.setF(3)
    ).catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div>
      <p>Please Enter Your Address</p>
    <form onSubmit={handleForm2Submit}>
      <label >Street Address Line 1: </label>
      <input type="text" name="stAddress1" onChange={handleForm2Change}/>

      <label >Street Address Line 2: </label>
      <input type="text" name="stAddress2" onChange={handleForm2Change}/>

      <label >City: </label>
      <input type="text" name="city" onChange={handleForm2Change}/>

      <label >State: </label>
      <input type="text" name="state" onChange={handleForm2Change}/>

      <label >zipCode: </label>
      <input type="text" name="zipCode" onChange={handleForm2Change}/>

      <label >Phone Number: </label>
      <input type="text" name="phoneNo" onChange={handleForm2Change}/>

      <button>Next</button>
    </form>
  </div>
  )
};
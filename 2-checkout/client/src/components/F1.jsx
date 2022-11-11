import React, {useState} from 'react';
import { F2 } from './F2.jsx';
import axios from "axios";
export const F1 = (props) => {

  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: ''});

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  const handleSubmit = (event) => {
    console.log('submitting the stuff', formData);
    // props.setF(2)
    axios.post('/user', {
      formData
    },
    props.setF(2)
    ).catch(function (error) {
      console.log(error);
    });
  };
  console.log(props)

  return (
    <div>
      <p>F1</p>
    <form onSubmit={handleSubmit}>
      <label >First Name: </label>
      <input type="text" name="firstName" onChange={handleChange}/>

      <label >Last Name:</label>
      <input type="text" name="lastName" onChange={handleChange}/>

      <label >Email:</label>
      <input type="text" name="email" onChange={handleChange}/>

      <label >Password</label>
      <input type="text" name="password" onChange={handleChange}/>

      <button>Next</button>
    </form>
  </div>
  )
};
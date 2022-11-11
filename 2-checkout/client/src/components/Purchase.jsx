import React, {useState, useEffect} from "react";
import axios from "axios";

export const Purchase = (props) => {
  const [userPForm, setUser] = useState([])
  const [addressPForm, setAdd] = useState([])
  const [cCardPForm, setCard] = useState([])

  const getUser = () => {
    axios.get('/user')
    .then(function (response) {
      setUser(response.data[0][0]);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const getAddress = () => {
    axios.get('/address')
    .then(function (response) {
      setAdd(response.data[0][0]);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const getcCard = () => {
    axios.get('/creditcard')
    .then(function (response) {
      setCard(response.data[0][0]);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    getUser();
    getAddress();
    getcCard()
  },[]);

  const handlePClick= () => {
    props.returnToMain()
  };
  console.log('here is userP', userPForm);
  console.log('here is address', addressPForm);
  console.log('here is address', cCardPForm);


  return (
    <div>
      <p>Your Information!</p>
      <h3>User Info</h3>
      <p>First Name: {userPForm.firstName}</p><br/>
      <p>Last Name: {userPForm.lastName}</p><br/>
      <p>email: {userPForm.email_id}</p><br/>
      <h3>Address</h3>
      <p>Street Address Line 1: {addressPForm.stAddress1}</p><br/>
      <p>Street Address Line 2: {addressPForm.stAddress2}</p><br/>
      <p>State: {addressPForm.state}</p><br/>
      <p>Zip Code: {addressPForm.zipCode}</p><br/>
      <h3>Credit Card</h3>
      <p>Credit Card Number: {cCardPForm.cNum}</p><br/>
      <p>CVV: {cCardPForm.cvv}</p><br/>
      <p>Billing Zip code: {cCardPForm.billZip}</p><br/>


    <button onClick={handlePClick}>Purchase</button>
    </div>

  )
};
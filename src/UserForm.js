import React, { useEffect, useState } from 'react';
// import './App.css';
import world from "city-state-country"
import Select from "./Select"
import InputElement from "./InputElement"

async function postdata(data) {
  const response = await fetch('https://zenclass-demo-server.herokuapp.com/createuser', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)
  });
  let res = await response.json();
  alert(JSON.stringify(res));
}


function UserForm() {
  const [userFirstname, setuserFirstname] = useState("");
  const [userLastname, setuserLastname] = useState("");
  const [userEmail, setuserEmail] = useState("");

  const countries = world.getAllCountries();

  const [usercountry, setuserCountry] = useState('');
  const [states, setstates] = useState('');
  const [cities, setcities] = useState("");
  const [userState, setuserState] = useState("");
  const [userCity, setuserCity] = useState("");
  useEffect(() => {
    setstates(world.getAllStatesFromCountry(usercountry));
  }, [usercountry]);
  useEffect(() => {
    setcities(world.getAllCitiesFromState(userState));
  }, [userState]);
  const [userAddressLine1, setuserAddressLine1] = useState("");
  const [userAddressLine2, setuserAddressLine2] = useState("");
  const [usergender, setusergender] = useState("");
  const [userMaritalStatus, setuserMaritalStatus] = useState("");
  const [userFavFood, setFavFood] = useState("");
  const [userColor, setuserColor] = useState("");
  //console.log(userCity);
 
  const submit = (event) => {
    event.preventDefault();
    const user = {
      "First name": userFirstname,
      "Last name": userLastname,
      "E-mail": userEmail,
      "Country": usercountry,
      "State": userState,
      "City": userCity,
      "Address Line1": userAddressLine1,
      "Addres Line2": userAddressLine2,
      "Gender":usergender,
      'Marital Status':userMaritalStatus,
      'Fav Food': userFavFood,
      'Fav Color':userColor
    }
    console.log(user);
    postdata(user);


  }
  return (
    <div className="container bg-light">
      <div className={"row "}>
        <div className={"col-3"}></div>
        <div className={"col bg-dark rounded p-4 mt-5"}>
          <form className="row" onSubmit={submit}>
            <InputElement className={"col-6 mt-5"} placeholder={"First Name"} setvalue={setuserFirstname} required={true} />
            <InputElement className={"col-6 mt-5"} placeholder={"Last Name"} setvalue={setuserLastname} required={true} />
            <InputElement className={"col-12 mt-5"} type={"email"} placeholder={"user@something.com"} setvalue={setuserEmail} required={true} />
            <Select name={"Country"} className={"col-4 mr-2 mt-5"} data={countries} setvalue={setuserCountry} required={true} />
            <Select name={"State"} className={"col mr-2 mt-5"} data={states} setvalue={setuserState} required={true} />
            <Select name={"City"} className={"col-4 mr-2 mt-5"} data={cities} setvalue={setuserCity} required={true} />
            <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 1"} setvalue={setuserAddressLine1} required={true} />
            <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 2"} setvalue={setuserAddressLine2} />
            <Select name={"Gender"} className={"col-4 mr-2 mt-5"} data={[{ 'name': 'Male' }, { 'name': 'Female' }, { 'name': 'Not to mention' }]} setvalue={setusergender} required={true} />
            <Select name={"Marital Status"} className={"col-4 mr-2 mt-5"} data={[{ 'name': "Married" }, { 'name': "Unmarried" }, { 'name': "Divorsed" }]} setvalue={setuserMaritalStatus} required={true} />
            <InputElement className={"col-12 mt-5"} type={"text"} placeholder={"Fev Food"} setvalue={setFavFood} />
            <InputElement className={"col-12 mt-5"} type={"text"} placeholder={"Fev Color"} setvalue={setuserColor} />
            <InputElement className={"btn btn-primary mt-5 md-5"} type={"submit"} />

          </form>
        </div>
        <div className={"col-3"}></div>
      </div>
    </div>
  );
}

export default UserForm;

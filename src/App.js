import React, { useEffect, useState } from 'react';
// import './App.css';
import world from "city-state-country"
import Select from "./Select"
import InputElement from "./InputElement"

function App() {
  const [userFirstname, setuserFirstname] = useState("");
  const [userLastname, setuserLastname] = useState("");
  const [userEmail, setuserEmail] = useState("");

  const countries = world.getAllCountries();
  const [usercountry, setuserCountry] = useState(countries[0].name);
  // const [states,setStates]= useState(world.getAllStates(usercountry));
  const [userState, setuserState] = useState("");

  const [userCity, setuserCity] = useState("");

  const [userAddressLine1, setuserAddressLine1] = useState("");
  const [userAddressLine2, setuserAddressLine2] = useState("");
  //console.log(userCity);


  const submit=(event)=>{
    const user={
      "First name":userFirstname,
      "Last name": userLastname,
      "E-mail":userEmail,
      "Country": usercountry,
      "State":userState,
      "City":userCity,
      "Address Line1":userAddressLine1,
      "Addres Line2":userAddressLine2
    }
    console.log(user);
    event.preventDefault();
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
            <Select name={"State"} className={"col mr-2 mt-5"} data={world.getAllStatesFromCountry(usercountry)} setvalue={setuserState} required={true} />
            <InputElement className={"col-4 mt-5"} type={"text"} placeholder={"City"} setvalue={setuserCity} required={true} />
            <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 1"} setvalue={setuserAddressLine1} required={true} />
            <InputElement className={"col-12 mt-5"} type={"email"} placeholder={"Address Line 2"} setvalue={setuserAddressLine2} />
            <InputElement className={"btn btn-primary mt-5 md-5"} type={"submit"} text={"create user"} />
          </form>
        </div>
        <div className={"col-3"}></div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
// import './App.css';
import world from "city-state-country"
import Select from "./Select"
import InputElement from "./InputElement"




function UserForm() {
    console.log('render');
    
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



    const [userForm,setuserForm]=useState({
        Firstname:'',
        Lastname:'',
        Email:'',
        Country:'',
        State:'',
        City:'',
        AddressLine1:'',
        AddressLine2:'',
        Gender:'',
        MaritalStatus:'',
        FavFood:'',
        FavColor:'' 
    });



  const setuserFirstname=(val)=>{
    setuserForm({...userForm, Firstname:val})
  };
  const setuserLastname=(val)=>{
    setuserForm({...userForm, Lastname:val})
  };
 const setuserEmail=(val)=>{
    setuserForm({...userForm, Email:val})
 }
 const setuserCountry=(val)=>{
    setuserForm({...userForm, Country:val})
}
const setuserState=(val)=>{
    console.log(val);
    setuserForm({...userForm, State:val})
}
const setuserCity=(val)=>{
    setuserForm({...userForm, City:val})
}
const setusergender=(val)=>{
    setuserForm({...userForm, Gender:val})
}
const setuserAddressLine1=(val)=>{
    setuserForm({...userForm, AddressLine1:val})
}
const setuserAddressLine2=(val)=>{
    setuserForm({...userForm, AddressLine2:val})
}
const setuserFavFood=(val)=>{
    setuserForm({...userForm, FavFood:val})
}
const setuserColor=(val)=>{
    setuserForm({...userForm, FavColor:val})
}
const setuserMaritalStatus=(val)=>{
    setuserForm({...userForm, MaritalStatus:val})
}


  const submit = (event) => {
    event.preventDefault();
    const user = {
      "First name": userForm.Firstname,
      "Last name": userForm.Lastname,
      "E-mail": userForm.Email,
      "Country": userForm.Country,
      "State": userForm.State,
      "City": userForm.City,
      "Address Line1": userForm.AddressLine1,
      "Addres Line2": userForm.AddressLine2,
      "Gender":userForm.Gender,
      'Marital Status':userForm.MaritalStatus,
      'Fav Food': userForm.FavFood,
      'Fav Color':userForm.FavColor
    }
    console.log(user);
    postdata(user);
  }
  return (
    <div className="container">
      <div className={"row "}>
        <div className={"col-3"}></div>
        <div className={"col bg-dark rounded p-4 mt-5"}>
          <form className="row" onSubmit={submit}>
            <InputElement className={"col-6 mt-5"} placeholder={"First Name"} setvalue={setuserFirstname} required={true} />
            <InputElement className={"col-6 mt-5"} placeholder={"Last Name"} setvalue={setuserLastname} required={true} />
            <InputElement className={"col-12 mt-5"} type={"email"} placeholder={"user@something.com"} setvalue={setuserEmail} required={true} />
            <Select name={"Country"} className={"col-4 mr-2 mt-5"} data={world.getAllCountries()} setvalue={setuserCountry} required={true} />
            <Select name={"State"} className={"col mr-2 mt-5"} data={userForm.Country!==''? world.getAllStatesFromCountry(userForm.Country):""} setvalue={setuserState} required={true} />
            <InputElement className={"col-4 mt-5"} placeholder={"City"} setvalue={setuserCity} required={true}  />
            <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 1"} setvalue={setuserAddressLine1} required={true} />
            <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 2"} setvalue={setuserAddressLine2} />
            <Select name={"Gender"} className={"col-4 mr-2 mt-5"} data={[{ 'name': 'Male' }, { 'name': 'Female' }, { 'name': 'Not to mention' }]} setvalue={setusergender} required={true} />
            <Select name={"Marital Status"} className={"col-4 mr-2 mt-5"} data={[{ 'name': "Married" }, { 'name': "Unmarried" }, { 'name': "Divorsed" }]} setvalue={setuserMaritalStatus} required={true} />
            <InputElement className={"col-12 mt-5"} type={"text"} placeholder={"Fev Food"} setvalue={setuserFavFood} />
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

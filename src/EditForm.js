import React, { useEffect, useState } from 'react';
// import './App.css';
// import world from "city-state-country"
import Select from "./Select"
import InputElement from "./InputElement"
import { useParams } from 'react-router-dom';


function UserForm() {
    async function updateuser(data,id){
        let res= fetch('https://zenclass-demo-server.herokuapp.com/edit/'+id,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }, body: JSON.stringify(data)
          });
          return (await res).json();
         
    }
    const {id}=useParams()
        //console.log(id);

   const [user,setuser]=useState('');
   useEffect(()=>{
       getuser(id);
   },[id]);
   
   console.log(user);
   async function getuser(id){
    fetch('http://localhost:3030/user/'+id)
    .then(res=>(res.json()))
    .then(data=>(setuser(data)))
    .catch(console.error())
    }     
  const [userFirstname, setuserFirstname] = useState();
  const [userLastname, setuserLastname] =    useState( '');
  const [userEmail, setuserEmail] = useState('');
  const [usercountry, setuserCountry] = useState('');
  const [userState, setuserState] = useState('');
  const [userCity, setuserCity] = useState('');
  const [userAddressLine1, setuserAddressLine1] = useState('');
  const [userAddressLine2, setuserAddressLine2] = useState();
  const [usergender, setusergender] = useState('');
  const [userMaritalStatus, setuserMaritalStatus] = useState('');
  const [userFavFood, setFavFood] = useState('');
  const [userColor, setuserColor] = useState('');
  //console.log(userCity);

useEffect(()=>{
    setuserFirstname( user !== '' ? user['First name']:'');
    setuserLastname(user !== '' ? user['Last name']:'');
    setuserEmail( user !== '' ? user['E-mail']:'');
    setuserCountry( user !== '' ? user['Country']:'')
    setuserState( user !== '' ? user['State']:'');
    setuserCity( user !== '' ? user['City']:'');
    setuserAddressLine1( user !== '' ? user['Address Line1']:'')
    setuserAddressLine2( user !== '' ? user['Addres Line2']:'');
    setusergender( user !== '' ? user['Gender']:'')  
    setuserMaritalStatus( user !== '' ? user['Marital Status']:'')
    setFavFood( user !== '' ? user['Fav Food']:'')  
     setuserColor( user !== '' ? user['Fav Color']:'')
},[user])

  const submit = () => {
    const updateduser = {
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
    console.log(updateduser);
    updateuser(updateduser,id);

  }
  return (
    <div className="container bg-light">
      <div className={"row "}>
        <div className={"col-3"}></div>
        <div className={"col bg-dark rounded p-4 mt-5"}>
          <form className="row" >
          <InputElement className={"col-6 mt-5"} placeholder={"First Name"} setvalue={setuserFirstname} required={true} value={userFirstname} />
            <InputElement className={"col-6 mt-5"} placeholder={"Last Name"} setvalue={setuserLastname} required={true}  value={userLastname}/>
            <InputElement className={"col-12 mt-5"} type={"email"} placeholder={"user@something.com"} setvalue={setuserEmail} required={true}  value={userEmail} />
            {/* <Select name={"Country"} className={"col-4 mr-2 mt-5"} data={world.getAllCountries()} setvalue={setuserCountry} required={true} />
            <Select name={"State"} className={"col mr-2 mt-5"} data={world.getAllStatesFromCountry(usercountry)} setvalue={setuserState} required={true} />
            <Select name={"City"} className={"col-4 mr-2 mt-5"} data={world.getAllCitiesFromState(userState)} setvalue={setuserCity} required={true} /> */}
            <InputElement className={"col-4 mt-5"} placeholder={"Country"} setvalue={setuserCountry} required={true}  value={usercountry}/>
            <InputElement className={"col mt-5"} placeholder={"State"} setvalue={setuserState} required={true}  value={userState}/>
            <InputElement className={"col-4 mt-5"} placeholder={"City"} setvalue={setuserCity} required={true}  value={userCity} />
           <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 1"} setvalue={setuserAddressLine1} required={true}  value={userAddressLine1}/>
            <InputElement className={"col-12 mt-5"} type={"address"} placeholder={"Address Line 2"} setvalue={setuserAddressLine2}  value={userAddressLine2}/>
            <Select name={"Gender"} className={"col-4 mr-2 mt-5"} data={[{ 'name': 'Male' }, { 'name': 'Female' }, { 'name': 'Not to mention' }]} setvalue={setusergender} required={true}  value={usergender} />
            <Select name={"Marital Status"} className={"col-4 mr-2 mt-5"} data={[{ 'name': "Married" }, { 'name': "Unmarried" }, { 'name': "Divorsed" }]} setvalue={setuserMaritalStatus} required={true}  value={userMaritalStatus} />
            <InputElement className={"col-12 mt-5"} type={"text"} placeholder={"Fev Food"} setvalue={setFavFood}  value={userFavFood}/>
            <InputElement className={"col-12 mt-5"} type={"text"} placeholder={"Fev Color"} setvalue={setuserColor} value={userColor} />
            <button className={"btn btn-primary mt-5 md-5"} onClick={submit}>{"Update"}</button>
          </form>
        </div>
        <div className={"col-3"}></div>
      </div>
    </div>
  );
}

export default UserForm;

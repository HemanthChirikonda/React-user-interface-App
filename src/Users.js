import React, { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";






const Users=()=>{
    const [data,setdata]=useState('');
    //const [persondata,setpersondata]=useState('');
    useEffect(()=>{
        getdata();
    },[]);
    const [show,setshow]=useState(false);
    //const [edit,setedit]=useState(false);
    //const [persondata,setpersondata]=useState('');
    const [showdata,setshowdata]=useState('');
    async function getdata(){
        fetch('https://zenclass-demo-server.herokuapp.com/users')
        .then(res=>(res.json()))
        .then(data=>(setdata(data)))
        .catch(console.error())
        }

       
        
async function deletedata(vl){
    let res= await fetch('https://zenclass-demo-server.herokuapp.com/deleteuser',{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }, body:JSON.stringify({'id':vl})
      });
    let data= await res.json();
    alert(data.message);
    getdata();
     }
return(
    <Fragment>
   <div className="container border">
     {
         data !=="" ?data.map(((item,index)=>{
                 const keys= Object.keys(item);
                 console.log(keys);
                 
                const deleted= async()=>{
                     deletedata(item[keys[0]]);
                    
                }
                const showuser=()=>{
                    
                     setshowdata(item);
                     setshow(!show);
                }
                 

             return (
                 <Fragment>
              <div key={item[keys[0]]} className={"row"}>
                  <div className={"col-3 border"}>
                     
                     {
                         keys[1]
                     } {'--> '}{
                          item[keys[1]]
                      }
                 </div>
                
                    <button  className={'col-3'} onClick={showuser}>{"show"}</button>
                    <Link to= {`/edit/${item[keys[0]]}`} className="col-3"> <button  className={'col-12'}> {'edit'}</button></Link>
                    <button className={'col-3'} onClick={deleted}>{'delete'}</button>
              
                    
         </div>
        
        </Fragment>
  
             )
         })):""

     }
      </div>
      <div className='row m-5'>
            
            {
               show ? showdata !==''? Object.keys(showdata).map((key,index)=>{
                    return(
                         showdata[key] !==''? <p className={'col-3 display-5'} key={index}>{key}{'-->'}{showdata[key]}</p> :''
                    )
                }):'':""
            }
               
         </div>

    </Fragment>
)
}


export default Users;
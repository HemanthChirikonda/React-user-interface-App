import React, { Fragment } from 'react';
import './App.css';
const Select =(props)=>{

    
     
    const onchanged=(event)=>{
        props.setvalue(event.target.value);
    }

    return(
        <Fragment>
            <select className={props.className} onChange={onchanged} required={props.required? true: false} value={props.value}>
    <option>{ props.name?`Select ${props.name}`:'Select option'}</option>
               {
                   props.data !== "" ? props.data.map((item,index)=>{
                    return(<option key={index}>{item.name}</option>);
                    }):""
               }
            </select>
        </Fragment>
    )

};

export default Select;
import React,{Fragment}from "react"


const InputElement=(props)=>{

const onchanged=(e)=>{
    if(props.setvalue !== undefined){
        props.setvalue(e.target.value);
    }
 
}
    return(
        <Fragment>
            <input className={props.className} placeholder={props.placeholder} type={props.type} onChange={onchanged} style={props.style} required={props.required? true: false} text={props.text}/>
        </Fragment>
    )


}

export default InputElement
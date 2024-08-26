import React from "react";

export default function FloatingInputBox({type,id,placeholder,label,value,onChange}){
    return (
        <div className="form-floating">
                <input type={type} className="form-control" id= {id} placeholder= { placeholder } value={value} onChange={onChange}/>
                <label htmlFor={id}>{label}</label>
            </div>
    );
}
import React from "react";

export default function FormControlLabel({inputId,labelName}){
    return (
        <>
        <label className="form-label" htmlFor={inputId}>{labelName}</label>
        </>
    )
}
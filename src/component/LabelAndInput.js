import React from "react";
import FormControlLabel from "./FormControlLabel";
import FormControlInput from "./FormControlInput";

export default function LabelAndInput({labelName,inputId,divClass}){
    
    return(
        <div className= {divClass}>
        <FormControlLabel labelName = {labelName} inputId = {inputId}></FormControlLabel>
        <FormControlInput inputId = {inputId}></FormControlInput>
        </div>
    )
}
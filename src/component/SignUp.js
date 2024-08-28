import React from "react";
import LabelAndInput from "./LabelAndInput"

export default function SignUp(){
    return(
        <div>
            <LabelAndInput labelName="ID" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="Name" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="Password" inputId="sign-up-password" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="Email" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="PhoneNumber" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="address1" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="address2" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="sex" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
            <LabelAndInput labelName="bifth" inputId="sign-up-id" divClass="col-sm-6"></LabelAndInput>
        </div>
    );
}
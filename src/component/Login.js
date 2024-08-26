import 'bootstrap/dist/css/bootstrap.css'
import FloatingInputBox from "./FloatingInputBox";
import '../css/login.css'
import React, { useState, useEffect } from "react";
import logo from '../image/login.png';

export default function Login() {

    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
  
    // 컴포넌트가 처음 렌더링될 때 localStorage에서 address를 가져온다
    useEffect(() => {
      const savedAddress = localStorage.getItem("rememberedAddress");
      if (savedAddress) {
        setAddress(savedAddress);
        setRememberMe(true);
        document.getElementById('root').className = 'root'
      }
    }, []);
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
      console.log(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRememberMeChange = (e) => {
      setRememberMe(e.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log(address);
      if (rememberMe) {
        localStorage.setItem("rememberedAddress", address);
      } else {
        localStorage.removeItem("rememberedAddress");
      }
  
      // 여기에 로그인 처리 로직을 추가합니다.
      console.log("로그인 시도:", { address, password });
    };

    return(
        <div className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
            <img className="mb-4" src= {logo} alt="" width="72" height="57"/>
            <FloatingInputBox id="loginId" type = "email" placeholder="name@example.com" label = "Email address" value = {address} onChange={handleAddressChange}/>
            <FloatingInputBox id="loginPassword" type = "password" placeholder="Password" label = "Password" value = {password} onChange={handlePasswordChange}/>
            <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" checked={rememberMe} onChange={handleRememberMeChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
                <a href="/forgot" className="password-forgot-link">forgot password?</a>
            </div>
            <button className="btn btn-primary w-100 py-2">Sign in</button>
            <a href="/signIn" style={{float: 'right',fontSize: '14px',marginTop: '5px'}}>Sign Up</a>
        </form>
        </div>
    );
}
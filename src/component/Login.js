import 'bootstrap/dist/css/bootstrap.css'
import FloatingInputBox from "./FloatingInputBox";
import '../css/login.css'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../image/login.png';
import ErrorAlert from './ErrorAlert';
import Swal from 'sweetalert2';

export default function Login() {

    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  
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
  
      fetch('http://localhost:8080/signIn/process', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account : address,
          password : password
        }),
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => {
            throw new Error(err.message || '서버에러가 발생했습니다.');
        });
    }
    return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error:", error.message);
      setErrorMessage(error.message);
    });

    };

    return(
        <div className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
            <img className="mb-4" src= {logo} alt="" width="300" height="300"/>
            <FloatingInputBox id="loginId" type = "email" placeholder="name@example.com" label = "Email address" value = {address} onChange={handleAddressChange}/>
            <FloatingInputBox id="loginPassword" type = "password" placeholder="Password" label = "Password" value = {password} onChange={handlePasswordChange}/>
            <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" checked={rememberMe} onChange={handleRememberMeChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
                <Link to="/forgot" className="password-forgot-link">forgot password?</Link>
            </div>
            <button className="btn btn-primary w-100 py-2">Sign in</button>
            <Link to="/signIn" style={{float: 'right',fontSize: '14px',marginTop: '5px'}}>Sign Up</Link>
        </form>
        {errorMessage && <ErrorAlert message={errorMessage} callback={() => setErrorMessage(null)} />}
        </div>
    );
}
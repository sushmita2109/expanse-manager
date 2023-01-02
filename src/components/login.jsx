import React from "react";
import './styles/login.css';
export const Login=()=>{
    return(
        <div className="container">
            <main className="loginArea">
                <div className="headText">Login</div>
                <form className="loginForm">
                    <label className="textLabel" htmlFor="email">Email Address</label>
                    <input className="textInput" type="email" />
                    <label className="textLabel" htmlFor="pass">Password</label>
                    <input className="textInput" type="password"/>
                    <label className="textLabel">
                    <input type="checkbox"></input>
                    <span>I'm not a robot</span>
                    </label>
                    <button className="btn" type="submit">Login</button>
                </form>
                <div>Forgot your password?</div>
            </main>
        </div>
    )
}
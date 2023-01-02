import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faGoogle} from '@fortawesome/free-brands-svg-icons';
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
                    <div className="passText">Forgot your password?</div>
                    <div>------or------</div>
                    <button className="googleBtn">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        <span className="googleText"> Sign in with Google</span>
                    </button>
                </form>
                
            </main>
        </div>
    )
}
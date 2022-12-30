import React from "react";

export const Login=()=>{
    return(
        <div className="container">
            <main>
                <div className="headtext">Login</div>
                <form>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" />
                    <label htmlFor="pass">Password</label>
                    <input type="password"/>
                    <label>
                    <input type="checkbox"></input>
                    <span>I'm not a robot</span>
                    </label>
                    <button type="submit">Login</button>
                </form>
                <div>Forgot your password?</div>
            </main>
        </div>
    )
}
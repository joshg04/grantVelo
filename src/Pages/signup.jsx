import React from "react";
import Navbar from "../Components/navbar";
import logo from "../imgs/2grant_velocity_logo_transparent.png"

export default function Signup() {
    return (
        <div className="login-wrapper">
            <Navbar />
            <div className="login-background">
                <div className="login-logo"><img src={logo} /></div>
                <h1>Create an Account</h1>

                <div className="signup-input-wrapper">
                    <div className="signup-email">
                        <p>E-Mail</p>
                        <input type="text" className="login-input"></input>
                    </div>

                    <div className="login-username">
                        <p>Username</p>
                        <input type="text" className="login-input"></input>
                    </div>

                    <div className="login-pass">
                        <p>Password</p>
                        <input type="password" className="login-input"></input>
                    </div>

                    <div className="login-confirmPass">
                        <p>Confirm Password</p>
                        <input type="password" className="login-input"></input>
                    </div>
                </div>
                
                <button>Register</button>

                <div className="login-links">
                    <a>Already have an account?</a>
                </div>
            </div>
        </div>
    )
}
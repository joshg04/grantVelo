import React from "react";
import Navbar from "../Components/navbar";
import logo from "../imgs/2grant_velocity_logo_transparent.png"
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="login-wrapper">
            <div className="login-background">
                <div className="login-logo"><img src={logo} /></div>
                <div className="login-header">
                <h1>Create an Account</h1>
                </div>
                <div className="signup-input-wrapper">
                    <div className="login-email">
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
                    <a><Link to="/login">Already have an account?</Link></a>
                </div>
            </div>
        </div>
    )
}
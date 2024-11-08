import React from "react";
import Navbar from "../Components/navbar"
import logo from "../imgs/2grant_velocity_logo_transparent.png"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-background">
                <div className="login-logo"><img src={logo} /></div>
                <div>
                <h1>Log In</h1>
                </div>
                <div className="login-username">
                    <p>Username</p>
                    <input type="text" className="login-input"></input>
                </div>

                <div className="login-pass">
                    <p>Password</p>
                    <input type="password" className="login-input"></input>
                </div>

                <div className="login-checkbox">
                    <input type="checkbox"></input>
                    <p>Remember Me</p>
                </div>

                <button>Sign In</button>

                <div className="login-links">
                    <a>Forgot Username or Password?</a>
                    <a><Link to="/signup">Don't have an account?</Link></a>
                </div>
            </div>
        </div>
    )
}
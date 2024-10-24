import myImg from "../imgs/2grant_velocity_logo_transparent.png"
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
    <div className="nav">
        <Link className="logo" to="/"><img src={myImg}/></Link>
        <ul>
            <li><a>About Us</a></li>
            <li><a>Explore</a></li>
            <li><a>My Grants</a></li>
            <li><a>Contact Us</a></li>
        </ul>
        <ul>
            <li><Link className="log-in-btn" to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </div>
    )
}
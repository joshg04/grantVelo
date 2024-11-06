import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

export default function Cta() {
    return (
        <div className="cta-wrapper">
            <div className = "cta-inner-wrapper">
            <div className="cta-text-wrapper">
            <h1>Start Organizing Your Grants Today</h1>
            <p>Join us now to easily manage and track your grant opportunities in one place</p>
            <div className="cta-login-wrapper">
                <Link to="/signup" className="cta-login-wrapper-signup">Sign Up <ArrowForwardIosIcon/></Link>
                <Link to="login">Log In <ArrowForwardIosIcon/></Link>
            </div>
            </div>
            <div className="cta-tempimg"></div>
            </div>
        </div>
    )
}
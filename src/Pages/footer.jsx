import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myImg from "../imgs/2grant_velocity_logo_transparent.png"


export default function Footer(){
    return(
        <div className="footer-wrapper">
            <div className="footer-head">
            <h1 className="footer-logo-wrapper"><img src={myImg}/></h1>
            <p>Grant Velocity © 2024</p>
            <ul>
                <li><InstagramIcon/></li>
                <li><XIcon/></li>
                <li><FacebookIcon/></li>
                <li><LinkedInIcon/></li>
            </ul>
            </div>
            <div className="footer-links">
            <ul>
                <div className="footer-link-item-wrapper">
                <li>link</li>
                <li>link</li>
                <li>link</li>
                </div>
                <div className="footer-link-item-wrapper">
                <li>link</li>
                <li>link</li>
                <li>link</li>
                </div>
                <div className="footer-link-item-wrapper">
                <li>link</li>
                <li>link</li>
                <li>link</li>
                </div>
            </ul>
            </div>
        </div>
    )
}
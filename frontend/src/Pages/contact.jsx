import Footer from "./footer"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Button from "@mui/material/Button";
export default function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-inner-wrapper">

                <div className="contact-info-wrapper">
                    <div className="contact-info-header">
                        <h1>Information</h1>
                    </div>
                    <div className="contact-info-item">
                        <EmailIcon />
                        <h1>Email:</h1>
                        <p>info@grantvelocity.com</p>
                    </div>
                    <div className="contact-info-item">
                        <LocationOnIcon />
                        <h1>Address:</h1>
                        <p>6565 Spencer St Suite 207<br />Las Vegas, NV, 89119</p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <div className="contact-form-inner-wrapper">
                        <div className="contact-form-background">
                        <h1>Contact Us</h1>
                        <input type="text" placeholder="First Name"></input>
                        <input type="text" placeholder="Last Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <textarea placeholder="Message"></textarea>
                        <Button variant="contained" sx={{color: "black"}}>Send Message</Button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
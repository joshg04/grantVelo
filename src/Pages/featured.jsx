import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

export default function Featured() {
    return (
        <div className="feature-wrapper">
            <h1 className="feature-title">Find the Right Grants for You</h1>
            <p>Discover a world of funding opportunities at your fingertips</p>
            <div className="feature-item-wrapper">
                <div className="feature item1">
                    <h1>Organize Your Grants</h1>
                    <p>
                        Keep track of your grants effortlessly
                        in one organized collection
                    </p>
                    <Link to="/signup">Sign Up <ArrowForwardIosIcon/></Link>
                </div>
                <div className="feature item2">
                    <h1>Stay Updated with New Grants</h1>
                    <p>
                        Receive alerts for the latest
                        funding opportunities.
                    </p>
                    <a>Learn More <ArrowForwardIosIcon/></a>
                </div>
                <div className="feature item3">
                    <h1>Explore Funding Opportunities</h1>
                    <p>
                        Discover diverse grants tailored
                        to your needs
                    </p>
                    <a>Learn More <ArrowForwardIosIcon/></a>
                </div>
            </div>
        </div>
    )
}
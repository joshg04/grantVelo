import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

export default function Discover() {
    return (
        <div className="home-discover-wrapper">
            <div className="discover-inner-wrapper">
                <div className="discover-text-body">

                    <div className="home-discover-heading">
                    <h1>Apply for Grants Effortlessly</h1>
                    <p>
                        Navigating the complex world of grant applications just got easier.
                        With our intuitive timeline-based tracker, you can seamlessly organize
                        multiple grant applications, store key documents, and receive reminders for important deadlines.
                    </p>
                    </div>
                    {/* <div className="discover-item-wrapper">
                        <div className="discover item1">
                            <h1>Easy Access</h1>
                            <p>
                                Search through thousands of grants in
                                just a few clicks
                            </p>
                            <div className="discover-item1-cta">
                                <a className="discover-item1-learnMore">Learn More</a>
                                <Link to="/signup">Sign Up <ArrowForwardIosIcon /></Link>
                            </div>
                        </div>
                        <div className="discover item2">
                            <h1>Smart Filters</h1>
                            <p>
                                Refine your search with advanced
                                filters for better results
                            </p>
                            <Link to="/signup">Sign Up <ArrowForwardIosIcon /></Link>
                        </div>
                    </div> */}
                </div>
                <div className="discover-tempimg">
                </div>
            </div>
        </div>
    )
}
import logo from "../imgs/2grant_velocity_logo_transparent.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Link } from 'react-router-dom';

export default function Sidenav() {
    return (
        <nav className="side-navbar">
            {/* <header>
                <Link to="/" className="side-navbar-logo-wrapper"><img src={logo} /></Link>
            </header> */}

            <ul>
                <li><Link to="/dashboard"><DashboardIcon />Dashboard</Link></li>
                <li><Link to="/myGrants"><AttachMoneyIcon />My Grants</Link></li>
                <li><Link to="/discover"><SearchIcon />Discover</Link></li>
                <li><Link to="/appTracker"><TimelineIcon />Application Tracker</Link></li>
            </ul>
        </nav>
    )
}
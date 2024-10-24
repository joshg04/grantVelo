import { Link } from 'react-router-dom';
import Sidenav from "../Components/sidenav.jsx";
import { GrantTimeline } from "../Components/grantTimeline.jsx"
import { SavedGrants } from "../Components/savedGrants.jsx"
import exploreIMG from "../imgs/explore.png"
import { SavedGrantCards } from "../Components/savedGrantCards"
import { Searchbar } from "../Components/searchBar"

export default function Discover() {
    return (
        <div className="dashboard-bg">
            <Sidenav />
            <div className="discover-wrapper">
                <div className="discover-header-search">
                <h1>Explore</h1>
                <Searchbar />
                </div>
                    <div className="discover-SavedGrantCards">
                        <SavedGrantCards />
                    </div>
            </div>
        </div>
    )
}

import { Link } from 'react-router-dom';
import Sidenav from "../Components/sidenav.jsx";
import { GrantTimeline } from "../Components/grantTimeline.jsx"
import { SavedGrants } from "../Components/savedGrants.jsx"
import exploreIMG from "../imgs/explore.png"
import { SavedGrantCards } from "../Components/savedGrantCards"
import { useEffect } from 'react';

export default function Mygrants() {

    

    return (
        <div className="dashboard-bg">
            <Sidenav />
            <div className="appTracker-wrapper">
                <div className="appTracker-list-explore-wrapper">
                    <div className="myGrants-SavedGrantCard">
                        <SavedGrantCards />
                    </div>
                    <div className="appTracker-explore">
                        <h1>Explore Grants</h1>
                        <img src={exploreIMG}/> 
                        <p>Find the proper funding for your needs</p>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

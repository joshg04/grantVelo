import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import Sidenav from "../Components/sidenav.jsx";
import { GrantTimeline } from "../Components/grantTimeline.jsx"
import { SavedGrants } from "../Components/savedGrants.jsx"
import { HorizontalNonLinearStepper } from "../Components/stepper.jsx"
import exploreIMG from "../imgs/explore.png"

export default function AppTracker() {

    return (
        <div className="dashboard-bg">
            <Sidenav />
            <div className="appTracker-wrapper">
                <div className="appTracker-timeline">
                    <h1>Grant Timeline</h1>
                    <HorizontalNonLinearStepper />
                </div>
                 
            </div>
        </div>
    )
}

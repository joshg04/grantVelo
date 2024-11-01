import Navbar from "../Components/navbar";
import HomeCard from "../Components/card";
import { Searchbar } from "../Components/searchBar";
import React, { useState, useEffect } from "react";

import Featured from "../Pages/featured"
import Discover from "./home-discover"
import Cta from "../Pages/cta"
import Newsletter from "../Pages/newsletter"
import Footer from "../Pages/footer"
import Login from "../Pages/login"

export default function Home() {

    const [results, setResults] = useState([])


    return (
        <>
            <Navbar />
            <div className="home-parent-wrapper">
            <div className="home-wrapper">
                <div className="home-text-section">
                    <h1 className="primary-heading">Unlock Your Funding Potential With Ease</h1>
                    <p className="primary-body">
                        Discover a comprehensive platform that simplifies your search for grants and funding opportunities.
                        With everything in one place, you can easily find and organize the resources you need to succeed.
                    </p>
                    <Searchbar setResults={setResults} />
                </div>
                
            </div>
            </div>


            <Featured />
            <Discover />
            {/* <Cta /> */}
            <Newsletter />
            <HomeCard />
            <Footer />
        </>
    )
}
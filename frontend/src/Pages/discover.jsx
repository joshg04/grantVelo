import { Link } from 'react-router-dom';
import Sidenav from "../Components/sidenav.jsx";
import { GrantTimeline } from "../Components/grantTimeline.jsx"
import { SavedGrants } from "../Components/savedGrants.jsx"
import exploreIMG from "../imgs/explore.png"
import { SavedGrantCards } from "../Components/savedGrantCards"
import { Searchbar } from "../Components/searchBar"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Discover() {

    const [search, setSearch] = useState('')
    const [grants, setGrants] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/')
                const uniqueIndustries = [...new Set(response.data)];
                setGrants(uniqueIndustries)
            }
            catch (error) {
                console.error('Error getting data:', error)
            }
        }

        fetchData()

    }, []);

    return (
        <div className="dashboard-bg">
            <Sidenav />
            <div className="discover-wrapper">
                <div className="discover-header-search">
                    <h1>Explore</h1>
                    <div className="discover-searchbar-wrapper">
                        <Searchbar setSearch={setSearch} />
                    </div>
                </div>
                <div className="discover-SavedGrantCards">
                    <div className="SavedGrantCard-wrapper">

                        {grants
                            .filter((grant) => {
                                return search.toLowerCase === ''
                                    ? grant
                                    : grant.title.toLowerCase().includes(search);
                            })
                            .map((grant, index) => (
                                
                                    <div key={index} className="SavedGrantCard-item">
                                        <div className="SavedGrantCard-item-name">{grant.title}</div>
                                        <div>
                                        {/* <div>{grant.category}</div> */}
                                        <div className="SavedGrantCard-item-award">{grant.awardCeiling}</div>
                                        <div className="SavedGrantCard-item-date">Due Date: {grant.closingDate}</div>
                                        </div>
                                    </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

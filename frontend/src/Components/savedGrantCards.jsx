import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

export const SavedGrantCards = () => {

    const [grants, setGrants] = useState([])

    useEffect(() => {
        const fetchData = async() => {
          try{
            const response = await axios.get('http://localhost:4000/')
            const uniqueIndustries = [...new Set(response.data)];
            setGrants(uniqueIndustries)
          }
          catch(error){
            console.error('Error getting data:', error)
          }
        }
    
        fetchData()
    
      }, []);

    return(
        <div className="SavedGrantCard-wrapper">
            
            {grants.map((grant, index) => {
                return(
                    <div key={index} className="SavedGrantCard-item">
                        <div className="SavedGrantCard-item-name">{grant.title}</div>
                        <div className="SavedGrantCard-item-award">${grant.awardCeiling}</div>
                        <div className="SavedGrantCard-item-date">Due Date: {grant.closingDate}</div>
                    </div>
                )
            })
            }
        </div>
    )
}
import { useEffect, useState } from "react";

const Grants = [
    {
        id: 1,
        name: "Educator's Grant",
        duedate: "12/01/2024",
    },
    {
        id: 2,
        name: "Women in Tech Grant",
        duedate: "12/02/2024",
    },
    {
        id: 3,
        name: "Business Grant",
        duedate: "12/03/2024",
    },
    {
        id: 4,
        name: "Minority Grant",
        duedate: "12/04/2024",
    },
    {
        id: 5,
        name: "Minority Grant",
        duedate: "12/04/2024",
    },
    {
        id: 6,
        name: "Minority Grant",
        duedate: "12/04/2024",
    },
]

export const SavedGrants = () => {

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
        <div className="yourGrants-wrapper">
            <h1>Saved Grants</h1>
            {grants.map((grant, index) => (
          
                    <div key={index} className="yourGrants-item">
                        <li className="yourGrants-item-name">{grant.title}</li>
                        <li className="yourGrants-item-date">{grant.closingDate}</li>
                    </div>
                
            ))

            }
        </div>
    )
}
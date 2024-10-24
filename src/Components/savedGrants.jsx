import React from "react";

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
    return(
        <div className="yourGrants-wrapper">
            <h1>Saved Grants</h1>
            {Grants.map((grant) => {
                return(
                    <div key={grant.id} className="yourGrants-item">
                        <li className="yourGrants-item-name">{grant.name}</li>
                        <li className="yourGrants-item-date">{grant.duedate}</li>
                    </div>
                )
            })

            }
        </div>
    )
}
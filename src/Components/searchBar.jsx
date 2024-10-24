import React, { useState, useEffect, useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = ({ setResults }) => {

    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const searchBarRef = useRef();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const user = await response.json();
            setUsers(user);
        }

        fetchPost();
    }, [])

    const toggleDropdown = () => {
        
            setOpen(true);
        
    }

    const handleItemClick = (item) => {
        setSearchTerm(item);
        setOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setOpen(false); // Close the dropdown if clicked outside
            }
        };

        // Add the event listener when the dropdown is open
        // if (open) {
        //     document.addEventListener("click", handleClickOutside);
        // } else {
        //     document.removeEventListener("click", handleClickOutside);
        // }

        document.addEventListener("mousedown", handleClickOutside);  // Listen for clicks outside
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);  // Cleanup the listener
        };

       
    }, []);

 

    return (
        <div className="searchbar-wrapper" ref={searchBarRef}>
            <div className="searchbar-inside">
                <SearchIcon />
                <input 
                    placeholder="Search for a category" 
                    type="search" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onClick={toggleDropdown}>
                </input>
            </div>
            <div className={`results-list ${open ? "results-list-open" : null}`}>

                {users
                    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((user, id) => {
                    return <div className="list-item" onClick={() => {handleItemClick(user.name); {toggleDropdown}}} key={id}>{user.name}</div>;
                })}

            </div>
        </div>
    )
}
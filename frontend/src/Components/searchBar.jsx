import React, { useState, useEffect, useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SelectLocation from "./select_location";
import SelectAmount from "./select_amount";
import SelectIndustry from "./select_Industry";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Searchbar = ({ setSearch }) => {

    const [grants, setGrants] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [selectedIndustry, setSelectedIndustry] = useState('')


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

      

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);  // Send search value to parent
    setSearchValue(event.target.value);
  };

  const handleIndustrySelect = (industry) => {
    setSearchValue(industry); // Update search bar with selected industry
    setSearch(industry);      // Send selected industry to parent for filtering
};



    return (

    <Stack sx={{width: '100%', padding: 2}}>
        <Box display='flex' gap={1} alignItems='center'>
        <Box sx={{flex: 2}}>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={grants.map((grant) => grant.title)}
            inputValue={searchValue} // Controlled input value
            onInputChange={(e, newInputValue) => setSearchValue(newInputValue)}
            renderInput={(params) => (
                <TextField onChange={handleSearchChange}

                    {...params}
                    label="Search For Grants"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            type: 'search',
                        },
                    }}
                />
                
            )}
        />
        </Box>
        
        <Box display='flex' sx={{flex: 1, height: '100%'}}>
        <SelectLocation />
        <SelectIndustry 
        onSelectIndustry={handleIndustrySelect}
        />
        <FormControl sx={{m: 1, minWidth: 100}} size="small">
      <InputLabel id="demo-select-small-label">Amount</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>$0 - $4,999</MenuItem>
        <MenuItem value={20}>$5,000 - $19,999</MenuItem>
        <MenuItem value={30}>$20,000 - $49,999</MenuItem>
        <MenuItem value={40}>$50,000 - $99,999</MenuItem>
        <MenuItem value={50}>$100,000+</MenuItem>
      </Select>
    </FormControl>
        </Box>
        </Box>
    </Stack>


    )
}
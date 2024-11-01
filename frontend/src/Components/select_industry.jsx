import * as React from 'react';
import {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';


export default function SelectIndustry() {
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get('http://localhost:4000/')
        const uniqueIndustries = [...new Set(response.data)];
        setIndustry(uniqueIndustries)
      }
      catch(error){
        console.error('Error getting data:', error)
      }
    }

    fetchData()

  }, []);

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">Industry</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={industry}
        label="industry"
        onChange={handleChange}
      >
        {Array.isArray(industry) && industry.map((industry, index) => (
            <MenuItem key={index} value=''>
              {industry.category}
            </MenuItem>
        ))}
        

      </Select>
    </FormControl>
  );
}

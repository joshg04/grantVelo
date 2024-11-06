import * as React from 'react';
import {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';


// export default function SelectIndustry(){
//   const [industry, setIndustry] = useState([]);
//   const [industryValue, setIndustryValue] = useState('');

//   useEffect(() => {
//     const fetchData = async() => {
//       try{
//         const response = await axios.get('http://localhost:4000/')
//         const uniqueIndustries = [...new Set(response.data)];
//         setIndustry(uniqueIndustries)
//       }
//       catch(error){
//         console.error('Error getting data:', error)
//       }
//     }

//     fetchData()

//   }, []);

//   const handleChange = (event) => {
//     setIndustryValue(event.target.value);
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }} size="small">
//       <InputLabel id="demo-select-small-label">Industry</InputLabel>
//       <Select
//         labelId="demo-select-small-label"
//         id="demo-select-small"
//         value={industryValue}
//         label="industry"
//         onChange={handleChange}
//       >
//         {Array.isArray(industry) && industry.map((industry, index) => (
//             <MenuItem key={index} value={industry.category}>
//               {industry.category}
//             </MenuItem>
//         ))}
        

//       </Select>
//     </FormControl>
//   );
// }

export default function SelectIndustry({ onSelectIndustry }) {
  const [industry, setIndustry] = useState([]);
  const [industryValue, setIndustryValue] = useState('');

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:4000/');
              const uniqueIndustries = [...new Set(response.data.map(item => item.category))];
              setIndustry(uniqueIndustries);
          } catch (error) {
              console.error('Error getting data:', error);
          }
      };
      fetchData();
  }, []);

  const handleChange = (event) => {
      const selectedIndustry = event.target.value;
      setIndustryValue(selectedIndustry);
      onSelectIndustry(selectedIndustry); // Update search bar with selected industry
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Industry</InputLabel>
          <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={industryValue}
              label="Industry"
              onChange={handleChange}
          >
              {Array.isArray(industry) && industry.map((industryName, index) => (
                  <MenuItem key={index} value={industryName}>
                      {industryName}
                  </MenuItem>
              ))}
          </Select>
      </FormControl>
  );
}
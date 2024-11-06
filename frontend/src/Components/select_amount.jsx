import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAmount() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
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
  );
}

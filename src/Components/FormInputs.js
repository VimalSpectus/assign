import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import classes from "./style.module.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const FormInputs = () => {

  const [value, setValue] = useState('');
  const[country, setCountry]=  useState([])
  


  const handleChange = (event) => {
    setValue(event.target.value);
    setCountry(event.target.value)
  };

  const navigate = useNavigate();
  const handleClick = () => navigate(`/datashow/`, { state: country });

  return (
    <div className={classes.center}>
      <div>
        <TextField
          id="standard-textarea"
          placeholder="Enter Counry Name"
          multiline
          variant="standard"
          value={value} onChange={handleChange}
         
        />
      </div>

      <div className={classes.btn}>

      
        <Button
          disabled={!value} onClick={() => {
            alert('clicked');
          handleClick()
          }}>

          Submit
        </Button>

      </div>

    </div>

  );
}
export default FormInputs;

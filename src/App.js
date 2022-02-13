import './App.css';
import React, { useEffect, useState } from "react";

import Weather from './components/weather';
import SearchIcon from '@material-ui/icons/Search'
import { Typography, TextField, InputAdornment, IconButton, Card } from '@mui/material';
export default function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState(false)
  
  
  function ifClickedSearch() {
      fetch(`${process.env.REACT_APP_API_URL}/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }
    
  
  return (
    
    <div className="App">
      {(!weather) ? (<Typography variant='h3'>
        Search your city
        </Typography>): null}
      

      
      <TextField
            id="searchbar"
            placeholder="Search"
            margin="normal"
            onChange={(e) => setLocation(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton onClick={() => {
                            ifClickedSearch();
                            setWeather(true);
                        }}>
                        <SearchIcon />
                        </IconButton> 
                    </InputAdornment>
                )
            }}>
            </TextField>
          
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
        ): (
            <div></div>
        )
          }
    </div>
  );
}

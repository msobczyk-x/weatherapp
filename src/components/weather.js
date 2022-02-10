import React from "react";
import './weather.css';
import { Card, CardContent, Typography } from "@mui/material";
import moment from 'moment';


const CardExampleCard = ({weatherData}) => (
    <Card sx={{maxWidth: 450}}>
        <CardContent>
            <Typography variant="h4" component="div">
            City Name: {weatherData.name}
            </Typography>
            
            
            <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
        </CardContent>
    </Card>
)


export default CardExampleCard;
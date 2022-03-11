import React,{useEffect, useState} from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './styles.css'
import Pop from "./Pop";
interface Weather{
    temperature:string,
    weather_icons:string,
    wind_speed:string
}
const CountryDetail:React.FC<any> = ({ country,name1 }) => {
    const [weatherData,setWeatherData]=useState<Weather[]>([])
    const[open,setOpen]=useState<boolean>(false)
    const getWeather=(cap:string)=>{
        let API_KEY:string = '91de6b7aa252a524d90ddb917750b0d4'
        axios
        .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cap}`)
        .then((response) => {
            const data:any = response.data.current
            setWeatherData(data)
            setOpen(true)
        });
    }
   const handleClose=()=>{
       setOpen(false)
   }
  return (
    <div data-testid='country' className="country-del">
        <div className="back_home">
            <h1>
            <Link data-testid='back_home_link' style={{color:'black'}} to='/'>Back Home</Link>
            </h1>
        </div>
      {country?.map((country:any,idx:number) => (
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={country.flags.svg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Capital: <span>{country.capital}</span>
            </Typography>
            <Typography  variant="h5" >
              Population: <span>{country.population}</span>
            </Typography>
            <Typography variant="h5">
              Lat & Lan: {country.capitalInfo.latlng.map((lat:any) => (
                <span>{lat}</span>
              ))}
            </Typography>
          </CardContent>
          <CardActions sx={{display:'flex',justifyContent:'center'}}>
            <Button data-testid='capital' className="btn" variant="contained" onClick={()=>getWeather(country.capital[0])} size="large">Submit</Button>
          </CardActions>
        </Card>
      ))}
      <Pop data={weatherData} open={open} close={handleClose}/>
    </div>
  );
};

export default CountryDetail;

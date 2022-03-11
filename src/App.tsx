import React,{useState,useEffect} from "react";
import CountryDetail from "./components/CountryDetail";
import "./App.css";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

const App:React.FC<any>=()=> {
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<[]>([])
  const [mount, setMount] = useState<boolean>(false)
  const history = useNavigate()
  // submitting form
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    await axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data)
      });
    setMount(true)
    setName("");
    history('/country')

  };
  useEffect(() => {
  }, [mount])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          
            <form onSubmit={handleSubmit} className="input">
              <TextField
              data-testid='input-el'
              fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="country name"
              />
              <Button  className="btn" sx={{paddingTop:'15px',paddingBottom:'15px'}} variant="contained" disabled={!name} type="submit" >
               Submit
              </Button>
            </form>
          } />
        <Route  path='/country' element={<CountryDetail country={country} />} />
      </Routes>
    </div>
  );
}

export default App;


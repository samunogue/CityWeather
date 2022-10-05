import { useEffect, useState } from 'react';
import { Input } from './components/input/index.jsx';
import { BoxCity } from './components/box-city/index.jsx';
import { callApiCity } from './api/CallCity.js';
import './App.css';
import { ButtonSearch } from './components/buttonSearch/index.jsx';
import { BoxErro } from './components/box-erro/index.jsx';
import { IconMap } from './components/icon-map/index.jsx';

function App() {
  const [city, setCity] = useState("")
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    searchCity()
  }, [searchValue])
const searchCity  = async () =>{
  const api_city = await callApiCity(searchValue);
  console.log(api_city)
  setCity(api_city)
}  
const handleChange = () =>{
  const value = document.querySelector('input').value
  setSearchValue(value)
}
return(
  <>
  <h1 className='title'>CityWeather</h1>
  <section className='box_home'>
    <div className='box_input'>
    <Input />
    <ButtonSearch handleChange={handleChange}/>
    </div>
    {city.cod == 400 &&(
      <IconMap/>
    )}
    {city.cod == 200 &&(
      <BoxCity city={city}/>
    )}
    {city.cod == 404 &&(
      <BoxErro/>
    )}
  </section>
  </>
)
}

export default App;

import { ApiKey } from "./ApiKey";
export const callApiCity = async (queryCity) =>{
        const api_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${ApiKey}&units=metric`)
        const city = await api_response;
        const city_json = city.json();
        return city_json
}
import axios from "axios"

const URL="https://api.openweathermap.org/data/2.5/weather";
const Api_Key ="93a2e398d295d4427b4f91c049e5f021";

export const FetchApi = async (query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:Api_Key,
        }
    })
    return data;
}
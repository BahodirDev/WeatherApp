import React,{ useState }  from 'react';
import { FetchApi } from './API/FetchApi';



function Search(props) {
    const [query,setQuery]=useState('');
    const [data,setData]=useState({});
    

    const search = async(e)=>{
        if(e.key==="Enter"){
            const weather = await FetchApi(query);
            setData(weather)
            setQuery('')
            console.log(weather);
        }
    }
    return (
        <div className="Search-container">
            <div className="search">
                <input
                 type="text"
                 className="search"
                 placeholder='Search...'
                 value={query}
                 onChange={e=>setQuery(e.target.value)}
                 onKeyPress={search}
                 required
                />
            </div>
            {data.main && (
                <div className="city">
                   <div className='details'>
                   <div className='info'> 
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
                    </div>
                    <div className='city-name'>
                        <h3>
                            <span>{data.name}</span>
                            <sup>{data.sys.country}</sup>
                        </h3>
                    </div>
                    <div className='city-temp'>
                        {Math.round(data.main.temp)}
                        <sup>&deg;C</sup>
                        <p>{data.weather[0].description}</p>
                    </div>
                   </div>
                   <div className='extra'>
                       <p style={{'color':'red'}}> wind speed: {data.wind.speed} m/s</p>
                       <h4><span>Now weather is: </span>{data.weather[0].main}</h4>
                   </div>
                   
                </div>
            )}
        </div>
    );
}

export default Search;
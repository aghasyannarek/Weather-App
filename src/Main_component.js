import './App.css';
import { useState } from "react";
import DateTimeComponent from './DateTimeComponent';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';
import Button from './components/Button';
import SearchInput from './components/SearchInput';

function Main_component(){
    const [inputValue,SetInputValue] = useState("")
    const [elementStyles, SetElementStyles] = useState();
    const [change, SetChange] = useState();
    const [showDiv, SetShowDiv] = useState(false);
    const [state, setState] = useState("-");
    const [ fs,setFs ] = useState();
    const [weatherData, setWeatherData] = useState("--");
    const [error, setError] = useState(false);
    const API_KEY = '289fa4de5f0876e68a81e6a23efbf46f';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    let weatherApp = 'Weather App';
    let city = inputValue;

    const fetchData = async () => {
            if(!inputValue.trim()){
                setError(true);
                return;
            }
            try {
                const response = await axios.get(`${API_URL}?q=${inputValue}&appid=${API_KEY}&units=metric`);
                setError(false);
                setState(`${Math.round(response.data.main.temp)}`);
                setWeatherData(response.data);
            } catch (err) {
                setError(true);
                SetInputValue("");
            }
    }       
    const handleClick = (e) => {
        e.preventDefault();
        if(inputValue.trim() && error){
                fetchData();
                SetElementStyles({
                    margin: '0',
                    borderRadius: '0px',
                    height:'100%',
                });
                SetChange({
                    display:'none',
                });
                SetShowDiv(!showDiv);
                if(city.length > 8 ){
                    setFs({
                        fontSize: '50px'
                    });
                }
            } else {
                setError(true);
            }
    }
    const btnHandleClick = (e) => {
        e.preventDefault();
            SetElementStyles({
                height: '100%',
                marginTop: '300px',
                borderRadius: '70px 70px 0 0',
            });
            SetChange({
                display:'block',
            });
            SetShowDiv(!showDiv);        
    }
    const handleChange = (e) =>{
        SetInputValue(e.target.value);
    }
    return(
        <div className="Global-block">
            <div className="Main">
                <p className='title'>
                    {weatherApp}
                </p>
                <div className="circle" style={elementStyles}>
                    {
                        showDiv && <>
                            <button 
                                className="addedBtn" 
                                type="button" 
                                onClick={btnHandleClick}
                            >X</button> 
                            <div className='temp'>
                                    <div className="city" style={fs}>
                                        <svg 
                                            version="1.0" 
                                            id="Layer_1" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 64 64" 
                                            style={fs}
                                            >
                                            <path 
                                                fill="#FFF" 
                                                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                            />
                                        </svg>    
                                    {city}</div>
                                <DateTimeComponent/>
                                <div className="temperature-icon">
                                    <div className='img'>
                                        {weatherData && weatherData.weather?.length > 0 && ( 
                                            <WeatherIcon weatherCode={weatherData.weather[0]?.icon} />
                                        )}
                                    </div>
                                    <span className='num'>{state}</span>
                                    <span>°C</span>
                                </div>
                            </div>
                            <footer className='footer'>
                                <div>This app was created by Narek Aghasyan</div>
                            </footer>
                        </>                 
                    }
                    <SearchInput style={change} onChange={handleChange}/>
                    <Button Click={handleClick} style={change}/>
                    {error && <p style={{color: "red", paddingTop: "20px", fontSize: "20px"}}>Invalid City Name</p>}
                </div>
            </div>
        </div>
    );
}

export default Main_component;

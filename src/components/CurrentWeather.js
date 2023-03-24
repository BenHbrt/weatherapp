import axios from 'axios'
import './CurrentWeather.scss'
import windDirection from '../Functions/WindDirection'
import weatherType from '../Functions/WeatherType'
import isDaytime from '../Functions/IsDaytime'
import getTimeString from '../Functions/GetTimeString'
import { useState, useEffect } from 'react'
import Loader from './Loader'

const CurrentWeather = ({ location, setSelectedCity, selectedCity }) => {

  const isSelected = selectedCity === null || selectedCity.city === location.city
    
    const [currentWeather, setCurrentWeather] = useState(null)
    // const [isWeatherSet, setIsWeatherSet] = useState(false)
    // const [showWeather, setShowWeather] = useState(false)

    const loadData = async () => {
      const ApiData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true&timezone=auto&daily=sunrise,sunset`)
      console.log([location.city, isDaytime(ApiData.data.current_weather.time, ApiData.data.daily.sunrise[0], ApiData.data.daily.sunset[0])])
      setCurrentWeather({
        temperature: ApiData.data.current_weather.temperature,
        windspeed: ApiData.data.current_weather.windspeed,
        windDirection: windDirection(ApiData.data.current_weather.winddirection),
        type: weatherType(ApiData.data.current_weather.weathercode, isDaytime(ApiData.data.current_weather.time, ApiData.data.daily.sunrise[0], ApiData.data.daily.sunset[0])),
        time: getTimeString(ApiData.data.current_weather.time)     
      })
      // setIsWeatherSet(true)
    }
  
    useEffect(() => {
      // Simulated slow internet
      setTimeout(() => {
        loadData()
      }, 1500)
    }, [])

    return (
        <>
            { currentWeather ?
                <div className={`currentWeather ${isSelected ? "" : "inactive"}`} onClick={() => {setSelectedCity(location)}}>
                    <div className="currentWeather_city">{location.city}</div>
                    <div className='currentWeather_mainInfo'>
                        <div className="currentWeather_mainInfo_temp">{currentWeather.temperature}°C</div>
                        <img src={require(`../img/WeatherIcons/${currentWeather.type.type.img}`)}/>
                    </div> 
                    <div className="currentWeather_windspeed"><strong>Windspeed: </strong>{currentWeather.windspeed} km/h</div>
                    <div className="currentWeather_windDirection"><strong>Direction: </strong>{currentWeather.windDirection}</div>
                    <div className="currentWeather_updated">Last updated at {currentWeather.time} local time.</div>
                </div>
                :
                <Loader />
            }
        </>
    )
}

export default CurrentWeather
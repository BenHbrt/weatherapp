import axios from 'axios'
import './SelectedCity.scss'
import { useState, useEffect } from 'react'
import DayForecast from './DayForecast'

const SelectedCity = ({ location }) => {

    const [dailyForecast, setDailyForecast] = useState([])

    const loadData = async () => {
        const ApiData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`)
        const weatherData = []
        const dataLength = ApiData.data.daily.time.length
        for (let i = 0; i < dataLength; i++) {
            const data = {}
            Object.keys(ApiData.data.daily).forEach((key) => {
                data[key] = ApiData.data.daily[key][i]
            })
            weatherData.push(data)
        }
        setDailyForecast(weatherData)
    }
    
    useEffect(() => {
        loadData()
    }, [location])

    return (
        <div className="selectedcity">
            <div className="selectedcity_title">{location.city} Daily Forecast</div>
            <div className="selectedcity_container">
                {
                    dailyForecast && dailyForecast.map((day, i) => {
                        return <DayForecast key={i} forecast={day}/>
                    })
                }
            </div>
        </div>
    )
}

export default SelectedCity
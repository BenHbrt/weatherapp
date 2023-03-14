import axios from 'axios'
import { useState, useEffect } from 'react'

const CurrentWeather = ({ location, setSelectedCity }) => {
    
    const [currentWeather, setCurrentWeather] = useState(null)

    const loadData = async () => {
      const ApiData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true&timezone=auto`)
      setCurrentWeather(ApiData.data.current_weather)
    }
  
    useEffect(() => {
      loadData()
    }, [])

    return (
        <>
            {currentWeather &&
                <div className="currentweather" onClick={() => {setSelectedCity(location)}}>
                    {location.city}: {currentWeather.temperature}°C
                </div>
            }
        </>
        
    )
}

export default CurrentWeather
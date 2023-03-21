import getDateString from "../Functions/GetDateString"
import weatherType from "../Functions/WeatherType"
import windDirection from "../Functions/WindDirection"
import getTimeString from "../Functions/GetTimeString"
import './DayForecast.scss'

const DayForecast = ({ forecast }) => {
    return (
        <div className="dayforecast">
            <div className="dayforecast_date">{getDateString(forecast.time)}</div>
            <div className="dayforecast_main">
                <div className="dayforecast_temperatures">
                    <div className="dayforecast_temperatures_max">
                        <img className="icon" src={require("../img/WeatherIcons/thermostat.png")}/>
                        <img className="icon" src={require("../img/WeatherIcons/up.png")}/>
                        {Math.round(forecast.temperature_2m_max)}°C
                    </div>
                    <div className="dayforecast_temperatures_min">
                        <img className="icon" src={require("../img/WeatherIcons/thermostat.png")}/>
                        <img className="icon" src={require("../img/WeatherIcons/down.png")}/>
                        {Math.round(forecast.temperature_2m_min)}°C
                    </div>  
                </div>
                <img src={require(`../img/WeatherIcons/${weatherType(forecast.weathercode, true).type.img}`)}/>
            </div>
            <div className="dayforecast_wind">
                <img className="icon" src={require("../img/WeatherIcons/air.png")}/>
                <span>{forecast.windspeed_10m_max}km/h {windDirection(forecast.winddirection_10m_dominant)}</span> 
            </div>
            <div className="dayforecast_sunrise">
                <img className="icon" src={require("../img/WeatherIcons/sunrise.png")}/>
                <span>{getTimeString(forecast.sunrise)}</span>
            </div>
            <div className="dayforecast_sunset">
                <img className="icon" src={require("../img/WeatherIcons/sunset.png")}/>
                <span>{getTimeString(forecast.sunset)}</span>
            </div>
            {/* <button onClick={() => console.table(forecast)}>Data</button> */}
        </div>
    )
}

export default DayForecast
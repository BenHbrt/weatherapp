const DayForecast = ({ forecast }) => {
    return (
        <div className="dayforecast">
            {forecast.time}
        </div>
    )
}

export default DayForecast
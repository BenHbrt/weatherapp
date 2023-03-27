const Credits = () => {
    return (
        <div className="credits">
            <h1>Credits</h1>
            <h2>API</h2>
            <p>This app uses API data from the Open-Meteo Weather Forecast API. Details of the API can be found at <a href="https://open-meteo.com/en/docs">open-meteo.com/en/docs</a>.</p>
            <h2>Icons</h2>
            <p>I would like to credit the creators of the following icons which can be found at:</p>
            <p>Flaticon.com (<a href="https://www.flaticon.com">link</a>)</p>
            <div className="credits_flaticon">
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/sun.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/sky" title="sky icons">Sky icons created by Stasy - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/partly-cloudy.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/cloudy" title="cloudy icons">Cloudy icons created by Andy Horvath - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/cloudy-day.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/cloudy" title="cloudy icons">Cloudy icons created by Andy Horvath - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/overcast.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/overcast" title="overcast icons">Overcast icons created by Ubaid El-Ahyar Alyafizi - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/fog.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/fog" title="fog icons">Fog icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/drizzle.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/drizzle" title="drizzle icons">Drizzle icons created by bastian 5 - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/rain.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by Umeicon - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/heavy-rain.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/snow.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/snow" title="snow icons">Snow icons created by Muhammad_Usman - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/snowflake.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/snow" title="snow icons">Snow icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/light-rain.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/light-rain" title="light rain icons">Light rain icons created by Ridho Imam Prayogi - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/snowing.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/snowflake" title="snowflake icons">Snowflake icons created by Muhammad Atif - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/storm.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/storm" title="storm icons">Storm icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/moon.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/moon-and-cloud.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/full-moon" title="full moon icons">Full moon icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/WeatherIcons/night.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/clouds-and-sun" title="clouds and sun icons">Clouds and sun icons created by ariyantodeni - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/Other/sunrise.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/sunrise" title="sunrise icons">Sunrise icons created by Freepik - Flaticon</a></span>
                </div>
                <div className="credits_flaticons_icon">
                    <img src={require('../img/Other/sunset.png')} />
                    <span><a href="https://www.flaticon.com/free-icons/afternoon" title="afternoon icons">Afternoon icons created by Freepik - Flaticon</a></span>
                </div>            
            </div>
            <p>Google Material Icons (<a href="https://fonts.google.com/icons">link</a>)</p>
            <div className="credits_icons">
                <img src={require('../img/Other/sunny.png')} />
                <img src={require('../img/Other/loading.png')} />
                <img src={require('../img/Other/thermostat.png')} />
                <img src={require('../img/Other/air.png')} />
                <img src={require('../img/Other/up.png')} />
                <img src={require('../img/Other/down.png')} />
            </div>
        </div>
    )
}

export default Credits
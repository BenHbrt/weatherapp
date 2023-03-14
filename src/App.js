import './App.scss';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)

  const loadData = async () => {
    const ApiData = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=50.0515&longitude=14.2517&current_weather=true&timezone=auto")
    console.log(ApiData.data.current_weather)
    setCurrentWeather(ApiData.data.current_weather)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Prague Weather</h2>
      {currentWeather && <div>Temp: {currentWeather.temperature}</div>}
    </div>
  );
}

export default App;

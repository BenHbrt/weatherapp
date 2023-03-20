import './App.scss';
import locations from './Data/locations';
import { useState } from 'react'
import CurrentWeather from './Components/CurrentWeather';
import SelectedCity from './Components/SelectedCity';

function App() {

  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="locationsContainer">
      {locations.map((location, i) => {
        return <CurrentWeather location={location} key={i} setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
      })}
      </div>
      {selectedCity && <SelectedCity location={selectedCity} />}
    </div>
  );
}

export default App;

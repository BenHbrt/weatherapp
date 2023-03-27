import locations from '../Data/locations';
import { useState } from 'react'
import CurrentWeather from './CurrentWeather';
import SelectedCity from './SelectedCity';

const Main = () => {

    const [selectedCity, setSelectedCity] = useState(null)

    return (
        <div className="App">
          <h1 id="top">Weather App</h1>
          <div className="locationsContainer">
          {locations.map((location, i) => {
            return <CurrentWeather location={location} key={i} setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
          })}
          </div>
          {selectedCity && <SelectedCity location={selectedCity} />}
        </div>
    );
}

export default Main
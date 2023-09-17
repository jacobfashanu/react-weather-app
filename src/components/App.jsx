import Search from "./Search"
import Stats from "./Stats"
import BackgroundImg from "./BackgroundImg"
import { useState } from "react"
import defaultbackground1 from '../assets/scenic/scenic-background2.jpeg'
import defaultbackground2 from '../assets/scenic/scenic4.jpeg'

const background = [defaultbackground1, defaultbackground2][Math.floor(Math.random() * (2 - 0) + 0)];

function App() {
  const [backgroundpic, setBackgroundPic] = useState(background);
  const [showStats, setShowStats] = useState(false);
  const [temp, setTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [location, setLocation] = useState('hello');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [statsBackgroundColor, setStatsBackgroundColor] = useState('blue');
  const [tempColor, setTempColor] = useState('blue');
  const [locationColor, setLocationColor] = useState('blue');
  const [minMaxColor, setMinMaxColor] = useState('blue');


  return (
    <>
      <BackgroundImg backgroundpic={backgroundpic}></BackgroundImg>
      <Search setStatsBackgroundColor={setStatsBackgroundColor} setTempColor={setTempColor} setLocationColor={setLocationColor} setMinMaxColor={setMinMaxColor} setWeatherIcon={setWeatherIcon} setTemp={setTemp} setMinTemp={setMinTemp} setMaxTemp={setMaxTemp} setLocation={setLocation} setBackgroundPic={setBackgroundPic} setShowStats={setShowStats} />
      {showStats && <Stats minMaxColor={minMaxColor} locationColor={locationColor} tempColor={tempColor} statsBackgroundColor={statsBackgroundColor} weatherIcon={weatherIcon} temp={temp} minTemp={minTemp} maxTemp={maxTemp} location={location} />}
    </>
  )
}

export default App

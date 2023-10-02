import PropTypes from 'prop-types'
import dayclearsky from '../assets/background/day/clear-sky.jpeg'
import daycloudy from '../assets/background/day/cloudy.jpeg'
import dayrainy from '../assets/background/day/rainy.jpeg'
import daysnow from '../assets/background/day/snow.avif'
import daythunder from '../assets/background/day/thunder:lightning.webp'

import nightclearsky from '../assets/background/night/clear-sky.jpeg'
import nightcloudy from '../assets/background/night/cloudy.jpeg'
import nightrain from '../assets/background/night/rain.jpeg'
import nightsnow from '../assets/background/night/snow.jpeg'
import nightthunder from '../assets/background/night/thunder:lightning.webp'

import sunicon from '../assets/icons/sun-icon.png'
import cloudicon from '../assets/icons/cloudy-icon.png'
import rainicon from '../assets/icons/rain-icon.png'
import thundericon from '../assets/icons/thunder-icon.png'
import snowicon from '../assets/icons/snow-icon.png'
import moonicon from '../assets/icons/moon-icon.png'

export default function Search ({setStatsBackgroundColor, setTempColor, setLocationColor, setMinMaxColor, setWeatherIcon, setTemp, setMinTemp, setMaxTemp, setLocation, setShowStats, setBackgroundPic}) {

    async function getWeatherData(city) {
        const apiKey = '8262a18388df4a006009d44e175f7806';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    
      

    return (
        <>
            <div id="search-input">
                <input onKeyDown={(event) => {
                    if (event.key == "Enter") {
                        const returnvalue = getWeatherData(event.target.value);
                        returnvalue.then((data) => {
                            if(data.cod === '404') {
                                return
                            }
                            event.target.value = '';
                            document.querySelector("input").blur();
                            console.log(data);
                            setShowStats(true);
                            // setBackgroundPic(daythunder);
                            setTemp(Math.round(data.main.temp));
                            setLocation(`${data.name}, ${data.sys.country}`);
                            setMaxTemp(Math.round(data.main.temp_max));
                            setMinTemp(Math.round(data.main.temp_min));
                            // console.log(data.weather[0].icon)
                            if(data.weather[0].icon === '01d' || data.weather[0].icon === '50d') {
                                setBackgroundPic(dayclearsky);
                                setWeatherIcon(sunicon);
                                setStatsBackgroundColor('rgba(111,175,213,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#F8B200');
                            }
                            else if(data.weather[0].icon === '02d' || data.weather[0].icon === '03d' || data.weather[0].icon === '04d') {
                                setBackgroundPic(daycloudy);
                                setWeatherIcon(cloudicon);
                                setStatsBackgroundColor('rgba(236,236,236,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#C6E0F7');
                            }

                            else if(data.weather[0].icon === '09d' || data.weather[0].icon === '10d') {
                                setBackgroundPic(dayrainy);
                                setWeatherIcon(rainicon);
                                setStatsBackgroundColor('rgba(236,236,236,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#305572');
                            }

                            else if(data.weather[0].icon === '11d') {
                                setBackgroundPic(daythunder);
                                setWeatherIcon(thundericon);
                                setStatsBackgroundColor('rgba(139,202,235,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#305572');
                            }

                            else if(data.weather[0].icon === '13d') {
                                setBackgroundPic(daysnow);
                                setWeatherIcon(snowicon);
                                setStatsBackgroundColor('rgba(103,132,182,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#305572');
                            }
                            else if(data.weather[0].icon === '01n' || data.weather[0].icon === '50n') {
                                setBackgroundPic(nightclearsky);
                                setWeatherIcon(moonicon); //Fixxxxxxx thissssssssssssssssssss, get a moon icon
                                setStatsBackgroundColor('rgba(103,132,182,0.31)');
                                setTempColor('#6FAFD5');
                                setLocationColor('#6FAFD5');
                                setMinMaxColor('white');
                            }

                            else if(data.weather[0].icon === '02n' || data.weather[0].icon === '03n' || data.weather[0].icon === '04n') {
                                setBackgroundPic(nightcloudy);
                                setWeatherIcon(cloudicon);
                                setStatsBackgroundColor('rgba(103,132,182,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#86A3BF');
                            }

                            else if(data.weather[0].icon === '09n' || data.weather[0].icon === '10n') {
                                setBackgroundPic(nightrain);
                                setWeatherIcon(rainicon);
                                setStatsBackgroundColor('rgba(48,85,114,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#D7ECFD');
                            }

                            else if(data.weather[0].icon === '11n') {
                                setBackgroundPic(nightthunder);
                                setWeatherIcon(thundericon);
                                setStatsBackgroundColor('rgba(139,202,235,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#305572');
                            }

                            else if(data.weather[0].icon === '13n') {
                                setBackgroundPic(nightsnow);
                                setWeatherIcon(snowicon);
                                setStatsBackgroundColor('rgba(215,236,253,0.31)');
                                setTempColor('white');
                                setLocationColor('white');
                                setMinMaxColor('#D7ECFD');
                            }
                        });
                    }
                }} type="search" id="citySearch" name="citySearch" placeholder="Enter city"/>
            </div>
        </>
        
    )
    
}

Search.propTypes = {
    setStatsBackgroundColor: PropTypes.func,
    setTempColor: PropTypes.func,
    setLocationColor: PropTypes.func,
    setMinMaxColor: PropTypes.func,
    setWeatherIcon: PropTypes.func,
    setShowStats: PropTypes.func,
    setBackgroundPic: PropTypes.func,
    setTemp: PropTypes.func,
    setMinTemp: PropTypes.func,
    setMaxTemp: PropTypes.func,
    setLocation: PropTypes.func
}
import PropTypes from 'prop-types'

// import sunicon from '../assets/icons/sun-icon.png'
//  import PropTypes from 'prop-types'


 
 function Stats ({minMaxColor, locationColor, tempColor, statsBackgroundColor, weatherIcon, temp, minTemp, maxTemp, location}) {
    return (
        <div style={{
            backgroundColor: statsBackgroundColor
        }} className="stats-card">
            <img src={weatherIcon} />
            <p id='temp' style={{
                color: tempColor,
            }}>{temp}°C</p>
            <p style={{
                color: locationColor
            }} id='location'>{location}</p>
            <p style={{
                color: minMaxColor
            }} id='min-max'>Max. {maxTemp}°C, Min. {minTemp}°C</p>
            {/* <img src={rainyicon} /> */}
        </div>
    )
}

Stats.propTypes = {
    minMaxColor: PropTypes.string,
    locationColor: PropTypes.string,
    tempColor: PropTypes.string,
    statsBackgroundColor: PropTypes.string,
    weatherIcon: PropTypes.string,
    temp: PropTypes.number,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    location: PropTypes.string
}


export default Stats
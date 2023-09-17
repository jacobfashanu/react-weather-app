// import img from './clear-sky.jpeg'
import PropTypes from 'prop-types'

export default function BackgroundImg({backgroundpic}) {
    // const myStyles = {
    //     z-index:'-1',
    // }
    return(
        <img src={backgroundpic} style={{
            zIndex: '-1',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
        }}></img>
    );

    
}

BackgroundImg.propTypes = {
    backgroundpic: PropTypes.string
}
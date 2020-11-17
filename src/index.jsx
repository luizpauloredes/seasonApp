import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './errorPage';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


const App = () => {

    const [lat, setLat] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
       navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, [])

    if (errorMessage && !lat) {
        return (

            <div>
                <ErrorPage msg="Oops, sounds you don't want to show your location. Thanks anyway"
                    msg2="Accept google request location and refresh the page to work this page"
                />
            </div>

        )
    }

    if (!errorMessage && lat) {
        return <SeasonDisplay lat={lat} newlat={(x) => {
            return setLat(x)
        }} />
    }

    return <Spinner msg="Please accept google request to know your location and we will tell you how is the weather like" />;



}


ReactDOM.render(<App />, document.querySelector('#root'))
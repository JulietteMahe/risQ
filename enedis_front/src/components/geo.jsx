import React from "react";

const Geo = () => {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
      }, []);

    return (
        <div className="geo">
            <h4>Using geolocation JavaScript API in React</h4>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
        </div>
    );

}

export default Geo;
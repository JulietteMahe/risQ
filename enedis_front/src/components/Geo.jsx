import React from "react";
import "./Geo.css";

const Geo = () => {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div className="geo">
      <h4 className="geo-h4">Votre position exacte est :</h4>
      <p className="geo-p">Latitude: {latitude}</p>
      <p className="geo-p">Longitude: {longitude}</p>
    </div>
  );
};

export default Geo;

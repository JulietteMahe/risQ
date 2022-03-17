<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
=======
import React, { useRef, useState, useContext } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { MapCoordContext } from "../../context/MapCoordContext.js";
import osm from "./osm-providers.js";
import markerIconPng from "../../assets/mapmarker-blue500.png";
>>>>>>> 182a083ca2e907c13f72c684fb911c5c0d4287b8
import "leaflet/dist/leaflet.css";

<<<<<<< HEAD
import visitorIcon from "./constants";

const Maps = () => {
  // visitor geoLocalisation on the Map
  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, []);

    return position === null ? null : (
      <Marker position={position} icon={visitorIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      center={[48.856614, 2.3522219]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
    </MapContainer>
=======
const BasicMap = () => {
  const { latitude, longitude } = useContext(MapCoordContext);
  const [center, setCenter] = useState({ lat: latitude, lng: longitude });
  const ZOOM_LEVEL = 15;
  const mapRef = useRef();

  // React.useEffect(() => {
  //     map.locate().on("locationfound", function (e) {
  //       setCenter(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //       const radius = e.accuracy;
  //       const circle = L.circle(e.latlng, radius);
  //       circle.addTo(map);
  //     //   setBbox(e.bounds.toBBoxString().split(","));
  //     });
  //   }, [map]);

  return (
    <div className="BasicMap">
      <div
        className="col"
        style={{
          width: "100vw",
          height: "100%",
          margin: "0px",
          padding: "0px",
        }}
      >
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
        >
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
          <Marker
            position={center}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [30, 30],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>Le risque se situe ici</Popup>
          </Marker>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
>>>>>>> 182a083ca2e907c13f72c684fb911c5c0d4287b8
  );
};

export default Maps;
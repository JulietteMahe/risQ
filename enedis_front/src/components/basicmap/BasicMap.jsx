import React, { useRef, useState, useContext } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import { MapCoordContext } from  "../../context/MapCoordContext.js";
import osm from "./osm-providers.js";
import markerIconPng from "../../assets/mapmarker-blue500.png";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';

const BasicMap = () => {
    const {latitude, longitude}=useContext( MapCoordContext);
    const [center, setCenter] = useState({lat: latitude, lng: longitude});
    const ZOOM_LEVEL = 9;
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
            <div className="col" style={{ width: '100vw', height: '100vw', margin: '0px', padding: '0px'}}>
                <Map 
                style={{ width: '100%', height: '100%' }}
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
                    <Marker 
                    position={center}
                    icon={new Icon({iconUrl: markerIconPng, iconSize: [30, 30], iconAnchor: [12, 41]})}
                    >
                        <Popup>
                            Le risque se situe ici
                        </Popup>
                    </Marker> */}
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
    );
};

export default BasicMap;

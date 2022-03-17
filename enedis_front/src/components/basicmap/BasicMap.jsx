import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import osm from "./osm-providers.js";
import markerIconPng from "../../assets/mapmarker-blue500.png";
// import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

import 'leaflet/dist/leaflet.css';

/*function GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require({mapmarker}),
      iconSize: [_iconSize],
    });
}*/

const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 0, lng: 0 });
    const ZOOM_LEVEL = 9;
    const map = useMap();
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
            <h2>React-leaflet Basic Openstreet Maps</h2>
            <p>Loading basic map using layer from maptiler</p>
            <div className="col" style={{ width: '600px', height: '600px' }}>
                <MapContainer
                    // style={{ width: '100%', height: '100%' }}
                    center={[51.505, -0.09]}
                    // center={center}
                    zoom={ZOOM_LEVEL}
                    // ref={mapRef}
                >
                    {/* <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
                    <Marker
                        position={center}
                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
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

/*    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>Vous êtes ici</Popup>
        </Marker>
    )*/
/*Dans un autre composant ou dans celui-là?*/

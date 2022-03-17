import React, { useRef, useState }from "react";
import { Map, TileLayer, Popup, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import osm from "./osm-providers.js";
import mapmarker from "../../assets/mapmarker-blue500.png";
import 'leaflet/dist/leaflet.css';

/*function GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require({mapmarker}),
      iconSize: [_iconSize],
    });
}*/
  

const BasicMap = () => {
    const [center, setCenter] = useState({lat: 48.52, lng: 2.19});
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return(
        <div className="BasicMap">
            <h2>React-leaflet Basic Openstreet Maps</h2>
            <p>Loading basic map using layer from maptiler</p>
            <div className="col" style={{ width: '600px', height: '600px' }}>
                <Map 
                style={{ width: '100%', height: '100%' }}
                center={center}
                zoom={ZOOM_LEVEL}
                ref={mapRef}
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
                    <Marker 
                    
                    position={center}
                    >
                        <Popup>
                            Le risque se situe ici
                        </Popup>
                    </Marker>
                </Map>
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

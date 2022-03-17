import React from "react";
import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import visitorIcon from "./constants";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css'
import axios from "axios";

// Message ou Type_problem ?
const exampleData = [
    { latitude: 49.0200, longitude: 4.0297, message: "Cable tombé au sol" },
    { latitude: 49.0297, longitude: 4.0000, message: "Armoire électrique ouverte" },
    { latitude: 49.0257, longitude: 4.0019, message: "Branche trop près de la ligne" }
]

export default function Markers() {
    const [markers, setMarkers] = React.useState([]);

    React.useEffect(() => {
        // axios
        // .get()
        // .then()
        setMarkers(exampleData)
    }, []);

    return (
        <MarkerClusterGroup>
            {markers.map(marker =>
            <Marker position={[marker.latitude, marker.longitude]} icon={visitorIcon}><Popup>{marker.message}</Popup></Marker>
            )}
        </MarkerClusterGroup>
    );
}
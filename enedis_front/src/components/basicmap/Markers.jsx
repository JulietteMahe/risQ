import React from "react";
import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import visitorIcon from "./constants";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css'
// import axios from "axios";

// Message ou Type_problem ?
const exampleData = [
    [ // Juliette lat 48.121791 long -1.6820842
        { latitude: 48.121000, longitude: -1.6821, message: "Cable tombé au sol" },
        { latitude: 48.121097, longitude: -1.6800, message: "Armoire électrique ouverte" },
        { latitude: 48.121257, longitude: -1.6819, message: "Branche trop près de la ligne" }
    ],
    [ // seconde démo
        { latitude: 48.121000, longitude: -1.6897, message: "Cable tombé au sol" },
        { latitude: 48.121097, longitude: -1.6800, message: "Armoire électrique ouverte" },
        { latitude: 48.121257, longitude: -1.6819, message: "Branche trop près de la ligne" }
    ],
    [ // Sylvain
        { latitude: 49.0200, longitude: 4.0297, message: "Cable tombé au sol" },
        { latitude: 49.0297, longitude: 4.0000, message: "Armoire électrique ouverte" },
        { latitude: 49.0257, longitude: 4.0019, message: "Branche trop près de la ligne" }
    ]
]

export default function Markers(props) {
    const [markers, setMarkers] = React.useState([]);

    React.useEffect(() => {
        // axios
        // .get()
        // .then()
        if (props.cluster === 1)
            setMarkers(exampleData[0])
        else if (props.cluster === 2)
            setMarkers(exampleData[1])
        else setMarkers(exampleData[2])
    }, []);

    return (
        <MarkerClusterGroup>
            {markers.map(marker =>
                <Marker position={[marker.latitude, marker.longitude]} icon={visitorIcon}><Popup>{marker.message}</Popup></Marker>
            )}
        </MarkerClusterGroup>
    );
}
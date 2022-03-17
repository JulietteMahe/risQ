import React from "react";
import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import visitorIcon from "./constants";
import 'leaflet/dist/leaflet.css';

export default function Markers() {
    return (
        <MarkerClusterGroup>
            <Marker position={[49.0200, 4.0297]} icon={visitorIcon}><Popup>Problème 1</Popup></Marker>
            <Marker position={[49.0297, 4.0000]} icon={visitorIcon}><Popup>Problème 2</Popup></Marker>
            <Marker position={[49.0257, 4.0019]} icon={visitorIcon}><Popup>Problème 3</Popup></Marker>
        </MarkerClusterGroup>
    );
}
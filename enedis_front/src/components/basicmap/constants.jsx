import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png"
import shadow from "leaflet/dist/images/marker-shadow.png"
import mapmarker from "../../assets/mapmarker-blue500.png"

export const visitorIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: icon,
  shadowUrl: shadow
});



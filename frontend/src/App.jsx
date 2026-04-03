import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Node coordinates
const nodeCoords = {
  A: [17.3850, 78.4867],
  B: [17.4474, 78.3762],
  C: [17.3616, 78.4747],
  D: [17.4399, 78.4983],
  E: [17.4126, 78.2679],
  F: [17.4573, 78.5000],
};

function FitBounds({ routeCoords }) {
  const map = useMap();

  if (routeCoords.length > 0) {
    map.fitBounds(routeCoords);
  }

  return null;
}

function App() {
  const center = [17.3850, 78.4867];

  const [start, setStart] = useState("A");
  const [end, setEnd] = useState("D");
  const [path, setPath] = useState([]);
  const [cost, setCost] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFindRoute = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/shortest?start=${start}&end=${end}`
      );
      const data = await res.json();

      if (!data.path || data.path.length < 2) {
        alert("No valid route found");
        setRouteCoords([]);
        return;
      }

      setPath(data.path);
      setCost(data.cost);

      const coordsString = data.path
        .map((node) => {
          const [lat, lng] = nodeCoords[node];
          return `${lng},${lat}`;
        })
        .join(";");

      const osrmRes = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${coordsString}?overview=full&geometries=geojson`
      );

      const osrmData = await osrmRes.json();

      if (!osrmData.routes || osrmData.routes.length === 0) {
        const fallback = data.path.map((node) => nodeCoords[node]);
        setRouteCoords(fallback);
        return;
      }

      const route = osrmData.routes[0].geometry.coordinates;
      const formattedRoute = route.map(([lng, lat]) => [lat, lng]);

      setRouteCoords(formattedRoute);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleUpdateTraffic = async () => {
    try {
      await fetch("http://localhost:5000/update");
      handleFindRoute();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">

      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className="flex flex-1 overflow-hidden">

        <Sidebar
          start={start}
          end={end}
          setStart={setStart}
          setEnd={setEnd}
          handleFindRoute={handleFindRoute}
          handleUpdateTraffic={handleUpdateTraffic}
          path={path}
          cost={cost}
          loading={loading}
        />

        {/* MAP */}
        <div className="flex-1 relative">
          <MapContainer
            center={center}
            zoom={12}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {routeCoords.length > 0 && (
              <>
                <Polyline positions={routeCoords} color="#22c55e" weight={10} opacity={0.2} />
                <Polyline positions={routeCoords} color="#22c55e" weight={5} />
              </>
            )}

            {routeCoords.length > 0 && (
              <Marker position={routeCoords[0]}>
                <Popup>Start</Popup>
              </Marker>
            )}

            {routeCoords.length > 0 && (
              <Marker position={routeCoords[routeCoords.length - 1]}>
                <Popup>End</Popup>
              </Marker>
            )}

            <FitBounds routeCoords={routeCoords} />
          </MapContainer>
        </div>

      </div>
    </div>
  );
}

export default App;
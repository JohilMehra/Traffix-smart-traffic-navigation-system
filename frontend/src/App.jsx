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

import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { nodes } from "./graph";

// 🔴 RED MARKER ICON
const RedIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Convert nodes → coordinates
const nodeCoords = Object.fromEntries(
  Object.entries(nodes).map(([key, val]) => [
    key,
    [val.lat, val.lng],
  ])
);

function FitBounds({ routeCoords }) {
  const map = useMap();

  if (routeCoords.length > 0) {
    map.fitBounds(routeCoords);
  }

  return null;
}

function App() {
  const center = [17.3850, 78.4867];

  const nodeKeys = Object.keys(nodeCoords);

  const [start, setStart] = useState(nodeKeys[0] || "");
  const [end, setEnd] = useState(nodeKeys[1] || "");

  const [path, setPath] = useState([]);
  const [cost, setCost] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFindRoute = async () => {
    if (!start || !end) return;

    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/shortest?start=${start}&end=${end}`
      );

      const data = await res.json();

      if (!data.path || data.path.length < 2) {
        alert("No valid route found");
        setRouteCoords([]);
        setLoading(false);
        return;
      }

      setPath(data.path);
      setCost(data.cost);

      const coordsString = data.path
        .map((node) => {
          const coord = nodeCoords[node];
          if (!coord) return null;
          const [lat, lng] = coord;
          return `${lng},${lat}`;
        })
        .filter(Boolean)
        .join(";");

      const osrmRes = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${coordsString}?overview=full&geometries=geojson`
      );

      const osrmData = await osrmRes.json();

      if (!osrmData.routes || osrmData.routes.length === 0) {
        const fallback = data.path
          .map((node) => nodeCoords[node])
          .filter(Boolean);

        setRouteCoords(fallback);
        setLoading(false);
        return;
      }

      const route = osrmData.routes[0].geometry.coordinates;

      const formattedRoute = route.map(([lng, lat]) => [lat, lng]);

      setRouteCoords(formattedRoute);

    } catch (err) {
      console.error("Route error:", err);
    }

    setLoading(false);
  };

  const handleUpdateTraffic = async () => {
    try {
      await fetch("http://localhost:5000/update");
      handleFindRoute();
    } catch (err) {
      console.error("Traffic update error:", err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">

      <Header />

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
          nodes={nodeKeys}
        />

        <div className="flex-1 relative">
          <MapContainer center={center} zoom={12} className="h-full w-full">

            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 🔵 BLUE ROUTE */}
            {routeCoords.length > 0 && (
              <>
                <Polyline
                  positions={routeCoords}
                  color="#3b82f6"
                  weight={10}
                  opacity={0.2}
                />
                <Polyline
                  positions={routeCoords}
                  color="#2563eb"
                  weight={5}
                />
              </>
            )}

            {/* 🔴 START MARKER */}
            {routeCoords.length > 0 && (
              <Marker position={routeCoords[0]} icon={RedIcon}>
                <Popup>Start: {start}</Popup>
              </Marker>
            )}

            {/* 🔴 END MARKER */}
            {routeCoords.length > 0 && (
              <Marker position={routeCoords[routeCoords.length - 1]} icon={RedIcon}>
                <Popup>End: {end}</Popup>
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
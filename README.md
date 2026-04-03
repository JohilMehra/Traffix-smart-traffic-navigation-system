#🚦 Smart Traffic Navigation System

📌 Project Overview

The Smart Traffic Navigation System is a graph-based web application that simulates real-time route optimization similar to modern navigation systems like Google Maps.

It calculates the shortest path between locations using Dijkstra’s Algorithm, dynamically updates traffic conditions by modifying edge weights, and visualizes routes on an interactive map.

---

🎯 Features

- 📍 Select Start and End Nodes
- 🧠 Shortest Path using Dijkstra’s Algorithm
- 🔄 Dynamic Traffic Updates (Edge Weight Changes)
- 🗺️ Real-world Map Integration (OpenStreetMap + Leaflet)
- 🚗 Real Road Routing using OSRM API
- 🎨 Modern UI with React + Tailwind CSS
- 📊 Route visualization with highlighted paths
- 📌 Start & End markers on map
- ⚡ Fast and interactive user experience

---

🧠 Core Concepts Used

- Graph Data Structure (Adjacency List)
- Dijkstra’s Algorithm (Shortest Path)
- Priority Queue (Min Heap)
- REST API Architecture
- Real-time system simulation

---

🏗️ Tech Stack

Frontend

- React (Vite)
- Tailwind CSS
- React-Leaflet
- OpenStreetMap

Backend

- Node.js
- Express.js

APIs Used

- OSRM (Open Source Routing Machine)

---

🗂️ Project Structure

SmartTrafficNavigation/
│
├── backend/
│   ├── graph.js
│   ├── dijkstra.js
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── RouteInfo.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│
└── README.md

---

⚙️ How to Run the Project

🔧 1. Clone Repository

git clone <your-repo-link>
cd SmartTrafficNavigation

---

▶️ 2. Run Backend

cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000

---

▶️ 3. Run Frontend

cd frontend
npm install
npm run dev

Open in browser:

http://localhost:5173

---

🧪 Example Usage

Input:

Start: A
End: D

Output:

Path: A → C → D
Cost: 9

Map will display:

- 🟢 Best route (highlighted path)
- 📍 Start & End markers

---

🔌 API Endpoints

📍 Get Shortest Path

GET /shortest?start=A&end=D

🔄 Update Traffic

GET /update

---

🔥 Key Highlights

- Combines Data Structures & Algorithms with Full Stack Development
- Real-world simulation of navigation systems
- Interactive UI with map visualization
- Clean and scalable architecture

---

🚀 Future Enhancements

- 📱 Mobile responsive design
- 📊 Real-time traffic data integration
- 🧭 Multiple alternate routes
- 🚗 Moving vehicle animation

---

If you like this project, consider giving it a ⭐ on GitHub!

---

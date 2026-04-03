# 🚦 Smart Traffic Navigation System

## 📖 Overview

The **Smart Traffic Navigation System** is a full-stack web application that simulates real-time route optimization similar to modern navigation systems like Google Maps.

It uses **Dijkstra’s Algorithm** to compute the shortest path between locations, dynamically updates traffic conditions, and visualizes routes on an interactive map.

---

## ✨ Key Features

- Shortest path using Dijkstra’s Algorithm  
- Dynamic traffic updates  
- Interactive map (OpenStreetMap + Leaflet)  
- Real road routing (OSRM API)  
- Modern UI with React + Tailwind CSS  
- Route highlighting with markers  
- Fast and responsive  

---

## 🧠 Technical Concepts

- Graph (Adjacency List)  
- Dijkstra’s Algorithm  
- Priority Queue (Min Heap)  
- REST APIs  
- Real-time simulation  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React-Leaflet
- OpenStreetMap

### Backend
- Node.js
- Express.js

### API
- OSRM (Open Source Routing Machine)

---

## 📁 Project Structure

```
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
```

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

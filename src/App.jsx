import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import './Components/Red'
import './Components/Blue'
import Homepage from "./Components/Home"
import Blue from "./Components/Blue"
import Red from "./Components/Red"
function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
        </div>
  </div>
  )
}

export default App

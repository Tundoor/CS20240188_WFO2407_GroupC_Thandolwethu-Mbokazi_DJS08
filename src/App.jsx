import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/Vans"

import "../server.js"

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/" className="site-logo">#vanlife</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>

      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

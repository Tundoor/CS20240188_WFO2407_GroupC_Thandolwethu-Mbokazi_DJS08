import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/vans/Vans.jsx"
import VanDetail from "../pages/vans/VanDetail.jsx"
import Layout from "../Comps/layouts.jsx"
import Dashboard from "../pages/Hosts/Dashboard"
import Income from "../pages/Hosts/Income"
import Reviews from "../pages/Hosts/Reviews.jsx"

import "../server.js"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

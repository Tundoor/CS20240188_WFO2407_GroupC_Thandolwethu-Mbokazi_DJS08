import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/vans/Vans.jsx"
import VanDetail from "../pages/vans/VanDetail.jsx"
import Layout from "../Comps/layouts.jsx"
import Dashboard from "../pages/Hosts/Dashboard"
import Income from "../pages/Hosts/Income"
import Reviews from "../pages/Hosts/Reviews.jsx"
import HostLayout from "../Comps/HostLayout.jsx"
import HostVans from "../pages/Hosts/HostVans.jsx"
import HostVanDetails from "../pages/Hosts/HostVanDetails.jsx"
import HostVanInfo from "../pages/Hosts/HostVanInfo"
import HostVanPricing from "../pages/Hosts/HostVanPricing"
import HostVanPhotos from "../pages/Hosts/HostVanPhotos"
import "../server.js"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            
          <Route path="host" element={<HostLayout />}>
           <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route  path="vans" element={<HostVans/>} />
            <Route  path="vans/:id" element={<HostVanDetails/>} >
               <Route index element={<HostVanInfo />} />
               <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
          </Route>
         
         </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"

function App() {

  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/" className="site-logo">#vanlife</Link>
          <Link to="/about">About</Link>
        </nav>

      </header>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

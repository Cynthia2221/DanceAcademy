
import { Route, Routes } from "react-router-dom"
import { Navbar } from './components/Navbar'
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Services from "./pages/services/Services"



function App() {
  return (
    <div className="app">
      {<Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;

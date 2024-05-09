
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Forum from "./pages/forum/Forum";
import Terms from './components/terms/Terms';
import Cockies from './components/cockies/Cockies';
import Privacy from "../src/components/privacy/Privacy";
import Security from './components/security/Security';

function App() {
  return (
    <div className="app">
      {<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cockies" element={<Cockies />} />
        <Route path="/privacy" element={<Privacy />} />ç
        <Route path="/security" element={<Security />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

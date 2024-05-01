
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Forum from "./pages/forum/Forum";



function App() {
  return (
    <div className="app">
      {<Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;

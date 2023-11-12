import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Navbar";
function App() {
  return (
    <div
      className="w-full mx-auto bg-cover bg-repeat min-h-screen"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2018/09/12/07/17/background-image-3671385_1280.jpg")',
      }}
    >
      <header>
        <Nav />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

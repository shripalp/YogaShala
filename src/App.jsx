import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;

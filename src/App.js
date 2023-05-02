import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contect from "./routes/Contect";
import Project from "./routes/Project";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />s
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;

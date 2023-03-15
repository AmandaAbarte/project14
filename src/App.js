import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Employees from "./components/pages/employees";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;

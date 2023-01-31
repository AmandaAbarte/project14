import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Employees from "./components/employees";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>

      {/* <Employees/> */}
    </div>
  );
}

export default App;

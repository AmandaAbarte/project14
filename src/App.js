import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Employees from "./components/pages/employees";
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import APitest from "./Components/APitest";
import Dashboard from "./Dashboard";
import Signin from "./Components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
    // < APitest/>
    // < Dashboard/>
  );
}

export default App;

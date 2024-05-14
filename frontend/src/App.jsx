import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import APitest from "./Components/APitest";
import Signin from "./Components/Signin";
import Dashboardhome from "./Components/Dashboardhome";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navbar />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/signin" element={<Signin/>}/>
    //   </Routes>
    // </BrowserRouter>
    // < APitest/>
    // < Dashboard/>
    < Dashboardhome/>
  );
}

export default App;

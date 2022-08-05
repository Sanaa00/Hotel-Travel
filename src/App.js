import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hotels from "./pages/Hotels";
import Travel from "./pages/Travel";
import Search from "./component/Search";
import Hotel from "./pages/Hotel";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Hotels" element={<Hotels />}></Route>
        <Route path="Travel" element={<Travel />}></Route>
        <Route path="Search" element={<Search />}></Route>
        <Route path="hotel/:id" element={<Hotel />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;

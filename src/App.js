import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hotels from "./pages/Hotels";
import Travels from "./pages/Travels";
import Signin from "./pages/Signin";
import Search from "./component/Search";
import Hotel from "./pages/Hotel";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Travel from "./pages/Travel";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="Hotels" element={<Hotels />}></Route>
        <Route path="SignIn" element={<Signin />}></Route>
        <Route path="Travels" element={<Travels />}></Route>
        <Route path="Search" element={<Search />}></Route>
        <Route path="hotel/:id" element={<Hotel />}></Route>
        <Route path="Travel/:id" element={<Travel />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="ForgetPassword" element={<ForgetPassword />}></Route>
      </Routes>
    </>
  );
}

export default App;

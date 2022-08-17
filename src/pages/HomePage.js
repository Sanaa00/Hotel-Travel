import Navbar from "../component/Navbar";
import React from "react";
function HomePage() {
  return (
    <>
      <Navbar />
      homeeeeeeeee
      <div className="container mx-52">
        <div>
          <div className="text-green-600 font-bold text-3xl">
            Our website help tourist and collect information in Kurdistan
          </div>
          <div>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600  px-30 py-1">
              Contact Us
            </button>
          </div>
        </div>
        <div> images </div>
      </div>
    </>
  );
}

export default HomePage;

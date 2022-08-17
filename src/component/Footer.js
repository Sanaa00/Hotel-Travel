import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className=" flex flex-col bg-gradient-to-r from-green-600 to-emerald-600 ...">
      <p className="px-28 pt-10 text-2xl font-medium text-gray-50 grow">
        Tourist Web
      </p>
      <div className=" px-20 flex md:flex-row flex-col items-center justify-between mb-6">
        <div className="flex flex-col p-4 m-4 text-gray-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
          <div className="flex flex-row py-2 ">
            <input
              type="text"
              className="bg-white rounded-md border-2 border-green-600   focus:outline-none hover:border-gray-100"
            ></input>
            <button
              type="submit"
              className="bg-white text-green-600 rounded-md px-5 py-1 mx-2 hover:bg-gray-50 shadow-md"
            >
              submit
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 m-4 item-center ">
          <p className="text-xl font-medium text-gray-50">Follow As</p>
          <div className="flex flex-row text-gray-50">
            <FaFacebookSquare className="w-5 h-5" fill="#f9fafb" />
            <p className="px-2">facebook</p>
          </div>
          <div className="flex flex-row text-gray-50">
            <FaInstagramSquare className="w-5 h-5" fill="#f9fafb" />
            <p className="px-2">Instagram</p>
          </div>
        </div>
        <div className="flex flex-col p-4 m-4 items-center">
          <p className="text-xl font-medium text-gray-50">Contact As</p>
          <p className="text-gray-50">+(964) 000 000 00 00</p>
          <p className="text-gray-50">example@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

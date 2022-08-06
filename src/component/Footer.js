import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-gray-100 flex flex-col">
      <p className="px-28 pt-10 text-2xl font-medium text-green-600 grow">
        Tourist Web
      </p>
      <div className=" px-20 flex md:flex-row flex-col items-center justify-between">
        <div className="flex flex-col p-4 m-4 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
          <div className="flex flex-row py-2 ">
            <input
              type="text"
              className="bg-white rounded-md border-2 border-green-600   focus:outline-none hover:border-green-400"
            ></input>
            <button
              type="submit"
              className="bg-green-600 text-white rounded-md px-5 py-1 mx-2 hover:bg-green-400 "
            >
              submit
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 m-4 item-center ">
          <p className="text-xl font-medium text-green-600">Follow As</p>
          <div className="flex flex-row text-gray-500">
            <FaFacebookSquare className="w-6 h-6" />
            <p className="px-2">facebook</p>
          </div>
          <div className="flex flex-row text-gray-500">
            <FaInstagramSquare className="w-6 h-6" />
            <p className="px-2">Instagram</p>
          </div>
        </div>
        <div className="flex flex-col p-4 m-4 items-center">
          <p className="text-xl font-medium text-green-600">Contact As</p>
          <p className="text-gray-500">+(964) 000 000 00 00</p>
          <p className="text-gray-500">example@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;

  const onNavbarHandler = () => setShowMenu(!showMenu);

  if (showMenu) {
    menu = (
      <div className="flex flex-col fixed bg-gray-50  w-4/5 h-full top-0 z-40 left-0 shadow-md">
        <div className=" flex items-center p-6 h-28 shadow-md ">
          {" "}
          <button className="" onClick={onNavbarHandler}>
            <IoIosClose className="text-5xl" fill="#379e5d" />
          </button>
          {menu}
        </div>
        <hr></hr>
        <div className=" items-center">
          <div className="bg-gray-50 shadow-sm py-4 text-2xl text-green-600 text-bold w-full flex  justify-center mb-2">
            <Link onClick={onNavbarHandler} to="/">
              {" "}
              Home
            </Link>
          </div>
          <div className="bg-gray-50 shadow-sm py-4 text-2xl text-green-600 text-bold w-full flex  justify-center  mb-2">
            <Link onClick={onNavbarHandler} to="/Hotels">
              {" "}
              Hotels
            </Link>
          </div>
          <div className="bg-gray-50 shadow-sm py-4 text-2xl text-green-600 text-bold w-full flex  justify-center  ">
            <Link onClick={onNavbarHandler} to="/Travels">
              {" "}
              Travels
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {showMenu && (
        <div
          onClick={onNavbarHandler}
          className="bg-black opacity-10 blur-sm w-screen h-screen"
        ></div>
      )}

      <nav className="flex items-center justify-between p-6 h-28 bg-gray-50 shadow-md font-bold ">
        <ul>
          <li className="space-x-5 text-xl">
            <Link
              to="/"
              className="hidden sm:inline-block text-green-600 font-bold text-2xl"
            >
              Home
            </Link>
            <Link
              to="/Hotels"
              className="hidden sm:inline-block text-green-600 font-bold text-2xl"
            >
              Hotels
            </Link>
            <Link
              to="/Travels"
              className="hidden sm:inline-block text-green-600 font-bold text-2xl"
            >
              Travels
            </Link>
          </li>
          <div className="sm:hidden hover:cursor-pointer flex z-50">
            <button className="" onClick={onNavbarHandler}>
              <FiMenu className="w-10 h-10 " fill="#379e5d" />
            </button>
            {menu}
          </div>
          {/* <div className="sm:hidden space-y-1 hover:cursor-pointer">
            <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
            <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
            <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
          </div> */}
        </ul>

        <Link
          to="/Profile"
          className="flex flex-col py-5 px-3 rounded-full  justify-center items-center "
        >
          <img
            alt="profile"
            className="rounded-full w-12 h-12 "
            src="https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
          <div className=" text-green-600 font-bold mt-2">My Profile</div>{" "}
        </Link>
      </nav>

      {/* navigationbar start */}
      {/* <nav className="bg-gray-50 dark:bg-gray-700 shadow   ">
        <div className=" p-4  flex flex-row  justify-between items-center">
          <div className="flex flex-row py-3 px-2 md:px-6 items-center justify-between h-16 grow">
            <ul className="flex flex-row  mt-0 mr-6 space-x-8 font-medium   ">
              <li className="text-green-600 dark:text-white  text-2xl font-bold">
                Tourist web
              </li>
              <li>
                <Link
                  to="/"
                  className="text-green-600 dark:text-white  text-2xl hovertext-green-600 hover:opacity-80 font-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Hotels"
                  className="text-green-600 dark:text-white  text-2xl hover:text-green-600 hover:opacity-80 font-bold"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/Travels"
                  className="text-green-600 dark:text-white  text-2xl hover:text-green-600 hover:opacity-80 font-bold"
                >
                  Travels
                </Link>
              </li>
            </ul>
          </div>
          <div className="grow-0 flex flex-col items-center p-4 justify-center">
            <div className="pb-2">
              <img
                alt="profile"
                className="rounded-full w-12 h-12 "
                src="https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />
            </div>
            <div>
              <Link to="/Profile">
                <div className=" text-green-600 font-bold">My Profile</div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
      {/* navigation bar end */}
    </>
  );
}

export default Navbar;

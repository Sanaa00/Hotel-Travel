import React from "react";

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      {/* navigationbar start */}
      <nav className="bg-gray-50 dark:bg-gray-700 shadow   ">
        <div className=" p-4  flex flex-row  justify-between items-center">
          <div className="flex flex-row py-3 px-2 md:px-6 items-center justify-between h-16 grow">
            <ul className="flex flex-row  mt-0 mr-6 space-x-8 font-medium   ">
              <li className="text-green-600 dark:text-white  text-2xl ">
                Tourist web
              </li>
              <li>
                <Link
                  to="/"
                  className="text-green-600 dark:text-white  text-2xl hovertext-green-600 hover:opacity-80"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Hotels"
                  className="text-green-600 dark:text-white  text-2xl hover:text-green-600 hover:opacity-80"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/travel"
                  className="text-green-600 dark:text-white  text-2xl hover:text-green-600 hover:opacity-80"
                >
                  Travels
                </Link>
              </li>
            </ul>
          </div>
          <div className="grow-0 flex flex-row items-center p-4">
            <Link to="/Profile">
              <img
                alt="profile"
                className="rounded-full w-12 h-12 "
                src="https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />
            </Link>
          </div>
        </div>
      </nav>
      {/* navigation bar end */}
    </>
  );
}

export default Navbar;

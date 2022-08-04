import React from "react";
import { IoFilter } from "react-icons/io5";
function Search() {
  return (
    <>
      <div className="flex   justify-center flex-row items-center mt-7 h-20 w-full ">
        <form className="w-full flex justify-center items-center ">
          <div className="rounded-md bg-gray-50 border-slate-100 h-10 w-1/2 shadow flex flex-row items-center p-4 justify-between hover:bg-gray-100 hover:border ">
            <input
              placeholder="search"
              className="bg-transparent hover:border-0  focus:outline-none   w-full "
            ></input>
            <button>
              <IoFilter className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Search;

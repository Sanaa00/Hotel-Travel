import React from "react";
import { Link } from "react-router-dom";
function ForgetPassword() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-5 sm:mx-auto sm:w-3/5 lg:w-2/5 xl:w-1/4 bg-gray-50 py-20 shadow-md mt-10">
        <div className="flex flex-col items-center ">
          <p className="text-3xl text-green-600  font-medium"> Welcome Back!</p>
          <p className="text-2xl text-green-600 font-medium mt-3">Log in</p>
        </div>
        <div>
          <div>please write your Email ...</div>
          <section className="flex flex-col mt-5">
            <div className=" transform border-2 bg-transparent text-lg duration-300 focus-within:border-green-500 my-3 py-2 shadow-md rounded-md px-2">
              <input
                type="Email"
                placeholder={`Email`}
                className=" border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>
            <div className="mt-5 mb-2 rounded-md bg-green-600  py-2 font-medium text-l hover:bg-green-400   text-white shadow-lg text-center ">
              <Link to="/Home">Send</Link>
            </div>{" "}
            <Link to="/ForgetPassword" className="text-blue-500">
              login here
            </Link>
            <div className="flex flex-row">
              <p className="mr-1 text-gray-500">Dont have accont? </p>
              <Link to="/Signin" className="text-blue-500">
                Rigester here
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;

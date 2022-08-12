import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div>
      <div className="  flex flex-col justify-center items-center mt-40 bg-gray-50 py-20 shadow-md xl:mx-40  sm:mx-0 lg:mx-96 md:mx-10 2xl:mx-96">
        <div className="flex flex-col items-center ">
          <p className="text-3xl text-green-600  font-medium"> Welcome Back!</p>
          <p className="text-2xl text-green-600 font-medium mt-3">Log in</p>
        </div>
        <div>
          <section className="flex w-[30rem] flex-col mt-5 xl:w-[20rem] lg:w-[18rem] md:w-[14rem] sm:w-[10rem]">
            <div className=" transform border-2 bg-transparent text-lg duration-300 focus-within:border-green-500 my-3 py-2 shadow-md rounded-md px-2">
              <input
                type="Email"
                placeholder={`Email`}
                className=" border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>
            <div className=" transform border-2 bg-transparent text-lg duration-300 focus-within:border-green-500 my-3 py-2 shadow-md rounded-md px-2">
              <input
                type="Password"
                placeholder={`Password`}
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>
            <div className="mt-5 mb-2 rounded-md bg-green-600 w-[30rem] py-2 font-medium text-l hover:bg-green-400   text-white shadow-lg text-center xl:w-[20rem] lg:w-[18rem] md:w-[14rem] sm:w-[10rem]">
              <Link to="/Home">LOG IN</Link>
            </div>{" "}
            <Link to="/ForgetPassword" className="text-blue-500">
              Forget password
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

export default Profile;

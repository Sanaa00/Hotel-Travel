import React from "react";
import { Link } from "react-router-dom";
function ForgetPassword() {
  return (
    <div>
      <div className="">
        <div className="   flex flex-col justify-center items-center mt-40 bg-gray-50 py-20 shadow-md xl:mx-40  sm:mx-0 lg:mx-96 md:mx-10 2xl:mx-96">
          <div className="flex flex-col items-center ">
            <p className="text-3xl text-green-600  font-medium">
              {" "}
              Forget password?
            </p>
          </div>
          <div>
            <section className="flex w-[30rem] flex-col mt-5 xl:w-[20rem] lg:w-[18rem] md:w-[14rem] sm:w-[10rem]">
              <div>
                <p className="text-gray-500">
                  {" "}
                  If you need help to reset password we can help to send you
                  link to reset it , please write your Email ...
                </p>
              </div>
              <div className=" transform border-2 bg-transparent text-lg duration-300 focus-within:border-green-500 my-3 shadow-md rounded-md p-2">
                <input
                  type="Email"
                  placeholder={`Email`}
                  className=" border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                />
              </div>
              <div className="mt-5 mb-2 rounded-md bg-green-600 w-[30rem] py-2 font-medium text-l hover:bg-green-400   text-white shadow-lg text-center xl:w-[20rem] lg:w-[18rem] md:w-[14rem] sm:w-[10rem]">
                <Link to="">Reset password</Link>
              </div>{" "}
              <div className="flex flex-row">
                <p className="mr-1 text-gray-500">Back to </p>
                <Link to="/Profile" className="text-blue-500">
                  Log in
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;

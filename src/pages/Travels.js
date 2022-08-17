import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Search from "../component/Search";
import Footer from "../component/Footer";
import Loading from "../component/Loading";
export default function Travels() {
  const [Travels, setTravel] = useState();
  const [err, setErr] = useState("");

  useEffect(() => {
    // get request to the API endpoint
    axios
      .get("http://localhost:3001/travels")
      .then((result) => {
        console.log(result.data);
        return setTravel(result.data);
      })
      .catch((err) => setErr(err));
  }, []);

  if (err) return <div> There was an error fetching ur data: {err}</div>;
  if (!Travels) return <Loading />;
  return (
    <>
      <Search hotelsData={Travels} setHotelsData={setTravel} />

      <div className="container mx-auto mt-10 min-h-screen mb-32  ">
        <ul>
          {Travels.map((travel) => {
            return (
              <div key={travel.id}>
                <div className="text-xl rounded-md lg:mx-20 my-4 2xl:mx-40 p-2 bg-gray-50 flex flex-row  hover:bg-gray-100 drop-shadow md:flex-col sm:flex-row xl:w-5/6">
                  <div className="flex flex-row justify-between">
                    <div className="flex grow flex-col  justify-between basis-3/4">
                      <div className="flex lg:flex-row flex-col justify-between text-slate-600 pl-8 sm:flex-col">
                        <div className=" flex flex-col grow  md:w4/6 w-fit">
                          <div className="text-2xl text-green-600 font-medium ">
                            {travel.name}
                          </div>
                          <div className="text-base">
                            <div className="text-base flex my-2">
                              {[1, 2, 3, 4, 5].map((_, index) =>
                                travel.star > index ? (
                                  <AiFillStar key={index} fill="#e8de23" />
                                ) : (
                                  <AiOutlineStar key={index} color="#e8de23" />
                                )
                              )}
                            </div>
                          </div>
                          <div className="text-sm">{travel.description}</div>
                        </div>
                        <div className="flex flex-col grow-0 lg:w-2/6 items-center w-fit justify-center rounded-md">
                          <div className=" rounded-md grow">
                            <img
                              className="rounded-lg  object-cover  p-2  lg:w-96  lg:h-64 w-full  "
                              alt="hotel"
                              height="200"
                              width="200"
                              src={travel.image}
                            ></img>
                          </div>
                          <div>
                            <Link
                              to={`/travel/${travel.id}`}
                              className="btn bg-gradient-to-r from-green-600 to-emerald-600 ... text-white text-sm  md:px-32 py-1  p-64  rounded-md my-2 lg:mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80 xl:px-32 lg:px-28"
                            >
                              View
                            </Link>
                          </div>
                          <div className="text-sm flex flex-row justify-center items-center px-2 mx-2 pt-1">
                            <div className="px-1">
                              <IoLocationSharp fill="#0ca34a" />
                            </div>
                            <div>{travel.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}

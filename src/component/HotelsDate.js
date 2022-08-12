import axios from "axios";
import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function HotelsDate({ hotel }) {
  const [Hotels, setHotels] = useState();
  const [err, setErr] = useState("");

  const yellowStar = (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>First star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );

  const greyStar = (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>First star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );

  useEffect(() => {
    // get request to the API endpoint
    axios
      .get("http://localhost:3001/hotels")
      .then((result) => {
        console.log(result.data);
        return setHotels(result.data);
      })
      .catch((err) => setErr(err));
  }, []);

  if (err) return <div> There was an error fetching ur data: {err}</div>;
  if (!Hotels)
    return (
      <div>
        {" "}
        <div className="flex items-center justify-center opacity-50 w-full align-middle  place-content-center">
          <div className="lds-ring flex items-center justify-center h-full w-full">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <Search hotelsData={Hotels} setHotelsData={setHotels} />
      <div className="container mx-auto my-10 ">
        <ul>
          {Hotels.map((hotel) => {
            return (
              <div key={hotel.id}>
                <div className="text-xl rounded-md  my-4 lg:mx-40 p-2 bg-gray-50 flex flex-row  hover:bg-gray-100 drop-shadow md:flex-col sm:flex-row lg:w-5/6">
                  <div className="flex flex-row justify-between">
                    <div className="flex grow flex-col  justify-between basis-3/4">
                      <div className="flex lg:flex-row flex-col justify-between text-slate-600 pl-8 sm:flex-col">
                        <div className=" flex flex-col grow  md:w4/6 w-fit">
                          <div className="text-2xl text-green-600 font-medium ">
                            {hotel.name}
                          </div>
                          <div className="text-base">
                            <Rating
                              className="pt-2 mr-2"
                              initialRating={hotel.star}
                              fullSymbol={yellowStar}
                              emptySymbol={greyStar}
                              readonly={true}
                            />
                          </div>
                          <div className="text-sm">{hotel.description}</div>
                        </div>
                        <div className="flex flex-col grow-0 lg:w-2/6 items-center w-fit justify-center rounded-md">
                          <div className=" rounded-md grow">
                            <img
                              className="rounded-lg  object-cover  p-2  lg:w-96  lg:h-64 w-full  "
                              alt="hotel"
                              height="200"
                              width="200"
                              src={hotel.image}
                            ></img>
                          </div>
                          <div>
                            <Link
                              to={`/hotel/${hotel.id}`}
                              className="btn bg-green-600 text-white text-sm  md:px-32 py-1  p-64  rounded-md my-2 lg:mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80 lg:px-28"
                            >
                              View
                            </Link>
                          </div>
                          <div className="text-sm flex flex-row justify-center items-center px-2 mx-2 pt-1">
                            <div className="px-1">
                              <IoLocationSharp />
                            </div>
                            <div>{hotel.location}</div>
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
    </>
  );
}

import axios from "axios";
import React, { useState, useEffect } from "react";
import hotelImage from "./hotelImage.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Search from "./Search";
export default function HotelsDate() {
  const [Hotels, setHotels] = useState();
  const [err, setErr] = useState("");

  useEffect(() => {
    // get request to the API endpoint
    axios
      .get("https://62dc35604438813a2613372b.mockapi.io/api/hotels/Hotels")
      .then((result) => {
        console.log(result.data);
        return setHotels(result.data);
      })
      .catch((err) => setErr(err));
  }, []);

  if (err) return <div> There was an error fetching ur data: {err}</div>;
  if (!Hotels)
    return (
      <div className="flex items-center justify-center opacity-50 w-full align-middle  place-content-center">
        <div class="lds-ring flex items-center justify-center h-full w-full">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <>
      <Search />
      <div className="container mx-auto my-10 ">
        <ul>
          {Hotels.map((hotel) => {
            return (
              <div key={hotel.id}>
                <div className="text-xl rounded-md my-5 md:my-10 md:mx-40 p-2 bg-gray-50 flex md:flex-row flex-row hover:bg-gray-100 drop-shadow ">
                  <div className="flex md:flex-row justify-between flex-col">
                    <div className="flex grow flex-col  justify-between ">
                      <div className="flex md:flex-row flex-col justify-between text-slate-600 pl-8">
                        <div className=" flex flex-col grow  md:w4/6 w-fit">
                          <div className="text-2xl text-green-600 font-medium ">
                            {hotel.name}
                          </div>
                          <div className="text-base">stars</div>
                          <div className="text-sm">
                            {hotel.description}
                            <p>
                              El Greco Hotel is a three star hotel in
                              Thessaloniki located right in the center of the
                              city on Egnatia Street. El Greco Hotel is just a
                              10 minute walk away from the Aristotelous Square
                              and is easily reachable from the Airport and Train
                              Station by public transportation links.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col grow-0 md:w-2/6 items-center w-fit justify-center">
                          <div className="w-fit rounded-md ">
                            <img
                              className="rounded-md  w-fit p-2"
                              alt="hotel"
                              height="200"
                              width="200"
                              src={hotelImage}
                            ></img>
                          </div>
                          <div>
                            <Link
                              to={`/hotel/${hotel.id}`}
                              className="btn bg-green-600 text-white text-sm  md:px-40 py-1  px-56 rounded-md my-2 mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80"
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

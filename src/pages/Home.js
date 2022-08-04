import axios from "axios";
import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
function Home() {
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
      <div>
        {" "}
        <div className="flex items-center justify-center opacity-50 w-full align-middle  place-content-center">
          <div class="lds-ring flex items-center justify-center h-full w-full">
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
      <div className="flex md:my-20 md:mx-32 flex-row justify-center mt-10">
        <div id="detailed-pricing" class="overflow-y-auto h-full align-center">
          <div class="  p-4 text-sm font-medium text-gray-900 bg-gray-50 border-t border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white ">
            <div className="flex flex-row justify-between items-center">
              <div class="flex items-center text-2xl align-center grow text-green-600 font-medium ">
                Hotels
              </div>
              <div>
                <Link
                  to="/Hotels"
                  className="btn bg-green-600  text-white text-sm md:px-16 px-4 lg:px-20 sm:px-10 py-1 rounded-md my-2 grow-0 mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div class="overflow-x-hidden overflow-y-auto min-h-max align-center max-h-[30rem]">
            {Hotels.slice(0, 10).map((hotel) => (
              <div className="flex flex-wrap  justify-center">
                <div className=" flex justify-center">
                  <div>
                    <div className="text-xl rounded-md  my-4 md:mx-40 p-2 bg-gray-50 flex flex-row  hover:bg-gray-100 drop-shadow ">
                      <div className="flex flex-row justify-between">
                        <div className="flex grow flex-col  justify-between basis-3/4">
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
                                  Thessaloniki located right in the center of
                                  the city on Egnatia Street. El Greco Hotel is
                                  just a 10 minute walk away from the
                                  Aristotelous Square and is easily reachable
                                  from the Airport and Train Station by public
                                  transportation links.
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
                                  src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                ></img>
                              </div>
                              <div>
                                <Link
                                  to={`/hotel/${hotel.id}`}
                                  className="btn bg-green-600 text-white text-sm  md:px-32 py-1  p-64  rounded-md my-2 md:mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;

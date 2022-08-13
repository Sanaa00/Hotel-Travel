import axios from "axios";
import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Home() {
  const [Hotels, setHotels] = useState();
  const [Travels, setTravel] = useState();
  const [err, setErr] = useState("");

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
      <div className="mt-32">
        <div className="flex md:my-20 flex-row justify-center  mt-28 md:mx-52 lg:mx-52 xl:mx-52 2xl:mx-52 mb-50">
          <div className="overflow-y-auto h-full align-center">
            <div className="  p-4 text-sm font-medium text-gray-900 bg-gray-50 border-t border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white ">
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center text-2xl align-center grow text-green-600 font-medium ">
                  Hotels
                </div>
                <div>
                  <Link
                    to="/Hotels"
                    className="btn bg-green-600  text-white text-sm md:px-16 px-4 lg:px-20 sm:px-10 py-1 rounded-md my-2 grow-0 mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80 "
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-x-hidden overflow-y-auto min-h-max align-center max-h-[30rem] items-center md:flex-col lg-w-5/6 sm:flex-col">
              {Hotels.slice(0, 10).map((hotel) => (
                <div className="flex flex-wrap  justify-center" key={hotel.id}>
                  <div className=" flex justify-center">
                    <div>
                      <div className="text-xl rounded-md  my-4 md:mx-40 p-2 bg-gray-50 flex flex-row  hover:bg-gray-100 drop-shadow lg:w-5/6 items-center md:flex-col">
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex grow flex-col  justify-between basis-3/4">
                            <div className="flex md:flex-row flex-col justify-between text-slate-600">
                              <div className=" flex flex-col grow  md:w4/6 w-fit">
                                <div className="text-2xl text-green-600 font-medium ">
                                  {hotel.name}
                                </div>
                                <div className="text-base flex my-2">
                                  {[1, 2, 3, 4, 5].map((_, index) =>
                                    hotel.star > index ? (
                                      <AiFillStar key={index} fill="#e8de23" />
                                    ) : (
                                      <AiOutlineStar
                                        key={index}
                                        color="#e8de23"
                                      />
                                    )
                                  )}
                                </div>
                                <div className="text-sm">
                                  {hotel.description}
                                  <p>
                                    stars description 1 There are many
                                    variations of passages of Lorem Ipsum
                                    available, but the majority have suffered
                                    alteration in some form, by model sentence
                                    structures, to generate Lorem Ipsum which
                                    looks reasonable. The generated Lorem Ipsum
                                    is therefore always free from repetition,
                                    injected humour, or non-characteristic words
                                    etc. injected humour, or randomised words
                                    which don't look even slightly believable.
                                    If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn't
                                    anything embarrassing hidden in the middle
                                    of text. All the Lorem Ipsum generators on
                                    the Internet tend to repeat predefined
                                    chunks as necessary, making this the first
                                    true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined
                                    with a handful of model sentence structures,
                                    to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is
                                    therefore always free from repetition,
                                    injected humour, or non-characteristic words
                                    etc
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col grow-0 md:w-2/6 items-center w-fit justify-center rounded-md">
                                <div className=" rounded-md grow">
                                  <img
                                    className="  object-cover  p-2  md:w-full md:h-full md:object-cover "
                                    alt="hotel"
                                    height="200"
                                    width="200"
                                    src={hotel.image}
                                  ></img>
                                </div>
                                <div>
                                  <Link
                                    to={`/hotel/${hotel.id}`}
                                    className="btn bg-green-600 text-white text-sm  md:px-32 py-1  p-64  rounded-md my-2 md:mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80 lg:mx-28"
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
      </div>

      {/* travell part */}
      <div className=" mt-52 mb-40">
        <div className="flex md:my-20 flex-row justify-center mt-30 md:mx-52 lg:mx-52 xl:mx-52 2xl:mx-52 ">
          <div className="overflow-y-auto h-full align-center">
            <div className="  p-4 text-sm font-medium text-gray-900 bg-gray-50 border-t border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white ">
              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center text-2xl align-center grow text-green-600 font-medium ">
                  Travel Agency
                </div>
                <div>
                  <Link
                    to="/Travels"
                    className="btn bg-green-600  text-white text-sm md:px-16 px-4 lg:px-20 sm:px-10 py-1 rounded-md my-2 grow-0 mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80 "
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-x-hidden overflow-y-auto min-h-max align-center max-h-[30rem] items-center md:flex-col lg-w-5/6 sm:flex-col">
              {Travels.slice(0, 10).map((travel) => (
                <div className="flex flex-wrap  justify-center" key={travel.id}>
                  <div className=" flex justify-center">
                    <div>
                      <div className="text-xl rounded-md  my-4 md:mx-40 p-2 bg-gray-50 flex flex-row  hover:bg-gray-100 drop-shadow lg:w-5/6 items-center md:flex-col">
                        <div className="flex flex-row justify-between items-center">
                          <div className="flex grow flex-col  justify-between basis-3/4">
                            <div className="flex md:flex-row flex-col justify-between text-slate-600">
                              <div className=" flex flex-col grow  md:w4/6 w-fit">
                                <div className="text-2xl text-green-600 font-medium ">
                                  {travel.name}
                                </div>
                                <div className="text-base flex my-2">
                                  {[1, 2, 3, 4, 5].map((_, index) =>
                                    travel.star > index ? (
                                      <AiFillStar key={index} fill="#e8de23" />
                                    ) : (
                                      <AiOutlineStar
                                        key={index}
                                        color="#e8de23"
                                      />
                                    )
                                  )}
                                </div>
                                <div className="text-sm">
                                  {travel.description}
                                  <p>
                                    stars description 1 There are many
                                    variations of passages of Lorem Ipsum
                                    available, but the majority have suffered
                                    alteration in some form, by model sentence
                                    structures, to generate Lorem Ipsum which
                                    looks reasonable. The generated Lorem Ipsum
                                    is therefore always free from repetition,
                                    injected humour, or non-characteristic words
                                    etc. injected humour, or randomised words
                                    which don't look even slightly believable.
                                    If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn't
                                    anything embarrassing hidden in the middle
                                    of text. All the Lorem Ipsum generators on
                                    the Internet tend to repeat predefined
                                    chunks as necessary, making this the first
                                    true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined
                                    with a handful of model sentence structures,
                                    to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is
                                    therefore always free from repetition,
                                    injected humour, or non-characteristic words
                                    etc
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col grow-0 md:w-2/6 items-center w-fit justify-center rounded-md">
                                <div className=" rounded-md grow">
                                  <img
                                    className="  object-cover  p-2  md:w-full md:h-full md:object-cover "
                                    alt="hotel"
                                    height="200"
                                    width="200"
                                    src={travel.image}
                                  ></img>
                                </div>
                                <div>
                                  <Link
                                    to={`/travel/${travel.id}`}
                                    className="btn bg-green-600 text-white text-sm  md:px-32 py-1  p-64  rounded-md my-2 md:mx-1 drop-shadow-md hover:bg-green-600 hover:opacity-80 lg:mx-28"
                                  >
                                    View
                                  </Link>
                                </div>
                                <div className="text-sm flex flex-row justify-center items-center px-2 mx-2 pt-1">
                                  <div className="px-1">
                                    <IoLocationSharp />
                                  </div>
                                  <div>{travel.location}</div>
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
      </div>
      <Footer />
    </>
  );
}
export default Home;

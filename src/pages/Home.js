import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import HomeSlider from "../component/HomeSlider";

function Home() {
  // const [Hotels, setHotels] = useState();
  // const [Travels, setTravel] = useState();
  // const [err, setErr] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/hotels")
  //     .then((result) => {
  //       console.log(result.data);
  //       return setHotels(result.data);
  //     })
  //     .catch((err) => setErr(err));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/travels")
  //     .then((result) => {
  //       console.log(result.data);
  //       return setTravel(result.data);
  //     })
  //     .catch((err) => setErr(err));
  // }, []);

  // if (err) return <div> There was an error fetching ur data: {err}</div>;
  // if (!Hotels || !Travels) return <Loading />;

  return (
    <>
      <div className="min-h-screen ">
        <div className="flex lg:flex-row flex-col items-center justify-center bg-gray-50 rounded-md mx-5 xl:mx-10 mt-20 mb-32 p-2 xl:p-4 shadow-md">
          <div className="flex flex-col items-start grow justify-center">
            <div className="text-green-600 font-bold text-2xl xl:text-5xl mb-4">
              Our website help tourist and collect information in Kurdistan
            </div>
            <div className="text-gray-600">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.<br></br> It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining<br></br> essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages
            </div>
            <div className="flex flex-row md:flex-col md:justify-center items-center md:items-start my-5 space-x-3 md:space-x-0">
              <div>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-md py-2 px-8 text-gray-50">
                  Contact Us
                </button>
              </div>
              <div className="flex flex-row  justify-center items-center lg:mt-10">
                <p className="text-xl xl:text-3xl font-bold text-green-600 ">
                  30.0 K{" "}
                </p>

                <p className="text-gray-400 font-bold">&nbsp; Active User</p>
              </div>
            </div>
          </div>

          <div className="items-end justify-center grow-0 w-full sm:w-full sm:h-fit lg:w-3/6 lg:h-fit">
            <HomeSlider />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-5">
          <div className="sm:mt-4 lg:mt-10 font-bold text-green-600 text-3xl md:text-4xl xl:text-5xl flex justify-center items-center">
            what we serve in this website ?
          </div>
          {/* hotel and travel */}
          <div className="flex lg:flex-row flex-col justify-center items-center mt-5 mb-20 xl:mx-10">
            <div className="rounded-md shadow-md md:p-4 flex flex-col justify-between bg-gradient-to-r from-green-600/10 to-emerald-600/10 lg:py-20 px-2 md:mr-4">
              <div className="text-green-600 font-bold text-3xl pt-2">
                Hotels
              </div>
              <div className="text-gray-800 xl:mt-6 sm:mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including
              </div>
              <div className="my-6 lg:mt-3">
                <Link
                  to="/Hotels"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-gray-50  py-2 px-12 rounded-md hover:bg-green-600 hover:opacity-80 shadow-md "
                >
                  Hotels
                </Link>
              </div>
            </div>

            <div className="   rounded-md shadow-md md:p-4 flex flex-col  justify-between bg-gradient-to-r from-green-600/10 to-emerald-600/10 lg:py-20 px-2 mt-5 md:ml-4">
              <div className="text-green-600 font-bold text-3xl pt-2">
                Travels
              </div>
              <div className="text-gray-800 xl:mt-6 sm:mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including
              </div>
              <div className="my-6 lg:mt-3">
                <Link
                  to="/Travels"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-gray-50  py-2 px-12 rounded-md hover:bg-green-600 hover:opacity-80 shadow-md "
                >
                  Travels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-32">
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
      </div> */}
      <Footer />
    </>
  );
}
export default Home;

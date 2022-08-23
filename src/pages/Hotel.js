import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../component/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import RoomHotelCard from "../component/RoomHotelCard";
import HotelSliderCard from "../component/HotelSliderCard";
import Loading from "../component/Loading";
import ModalButton from "../component/ModalButton";
const roomsData = [
  {
    roomType: "Single Room",
    price: "10$",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    roomType: "Double Room",
    price: "15$",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    roomType: "Double Room",
    price: "20$",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

function Hotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios
      .get(`https://hotel-travel-server.herokuapp.com/hotels`)
      .then(async (result) => {
        const res = await result.data.hotels.filter(
          (hotel) => hotel.id === parseInt(id)
        );
        setHotel(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!hotel) {
    return <Loading />;
  }
  return (
    <>
      <div className="md:mt-20 mt-10 mx-5 2xl:mx-20 mb-32 lg:mx-24">
        {/* abou hotel */}
        <div className="text-3xl font-bold text-green-600  mx-5 2xl:mx-40 ">
          About Hotel
        </div>
        <div className=" flex 2xl:mx-52 bg-gray-50  justify-between  rounded-md mt-4 flex-col shadow-md md:flex-col lg:flex-row">
          <div className=" flex flex-col w-full p-6 lg:w-3/5 justify-between ">
            <div className=" text-2xl text-green-600 font-bold">
              {hotel[0].name}
            </div>
            <div className="text-base flex ">
              {[1, 2, 3, 4, 5].map((_, index) =>
                hotel[0].star > index ? (
                  <AiFillStar key={index} fill="#e8de23" />
                ) : (
                  <AiOutlineStar key={index} color="#e8de23" />
                )
              )}
            </div>
            <div>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by model
              sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </div>
            <div>
              <div>
                <button
                  className="bg-gradient-to-r from-green-600 to-emerald-600 mt-6 rounded-md py-2 px-8 text-gray-50"
                  onClick={openModal}
                >
                  Feedback
                </button>
                <ModalButton
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center p-4 lg:w-2/5  justify-between md:w-full ">
            <img
              className="rounded-lg object-fit w-full h-full "
              alt="hotel"
              src={hotel[0].image}
            />

            <div>
              <div className="text-sm flex flex-row justify-center items-center pt-2">
                <div className="px-1 ">
                  <IoLocationSharp fill="#0ca34a" className="w-4 h-4" />
                </div>
                <div className="text-lg font-medium text-gray-500">
                  {hotel[0].location}
                </div>
              </div>
            </div>
          </div>
        </div>
        <HotelSliderCard />

        {/* rooms and booking */}
        <div className=" lg:mt-20 mt-10 mx-5 2xl:mx-52 ">
          <div className="text-3xl font-bold text-green-600 mb-4">
            Rooms & Booking
          </div>{" "}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
            {roomsData.map((room, i) => (
              <RoomHotelCard
                key={i}
                roomType={room.roomType}
                price={room.price}
                description={room.description}
                imageUrl={room.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hotel;

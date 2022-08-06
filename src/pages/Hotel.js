import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../component/Footer";
import RoomHotelCard from "../component/RoomHotelCard";

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
  console.log(id);

  // function handleClick() {
  //   setButtonText("cancel");
  // }

  // function handleClickAgain() {
  //   setButtonText("Booking");
  // }
  useEffect(() => {
    // https://pokeapi.co/api/v2/pokemon/1
    axios
      .get(
        `https://62dc35604438813a2613372b.mockapi.io/api/hotels/Hotels/${id}`
      )
      .then((result) => {
        console.log(result.data);
        setHotel(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!hotel) {
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
  }
  return (
    <>
      <div className="md:mt-20 my-10 mx-5 md:mx-20">
        {/* abou hotel */}
        <div className="text-3xl font-bold text-green-600  mx-5 md:mx-52 ">
          About Hotel
        </div>
        <div className=" flex md:mx-52 bg-gray-50  justify-between  rounded-md mt-4 flex-col md:flex-row shadow-md">
          <div className=" flex flex-col w-full p-4 md:w-3/5">
            <div className=" text-2xl text-green-600 font-medium">
              {Hotel.name}
            </div>
            <div>stars</div>
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
          </div>
          <div className=" w-full flex flex-col items-center p-4 md:w-2/5  justify-between">
            <img
              className="rounded-lg object-fill "
              alt="hotel"
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />

            <div>
              <div className="text-sm flex flex-row justify-center items-center pt-2">
                <div className="px-1">
                  <IoLocationSharp />
                </div>
                <div>{hotel.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* <ServiceSlider /> */}
        {/* servicesss */}
        {/* <div className="mt-10 md:mt-20">
          <div className="text-3xl font-bold text-green-600 md:mx-48 mx-5">
            Services
          </div>
          <div className="flex md:flex-row  justify-center flex-col ">
          
            <div className=" bg-gray-50 m-4 flex flex-col item-center justify-center md:w-1/6 rounded-md w-fit">
              <div className="p-4">
                {" "}
                <div className="text-green-600  font-medium py-1 text-xl">
                  {" "}
                  Breakfast
                </div>
                <div>
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </div>
              </div>
              <img
                className=" py-1 "
                alt="breackfast"
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
           
            <div className=" bg-gray-50 m-4 flex flex-col item-center justify-center md:w-1/6 rounded-md w-fit">
              <div className="p-4">
                {" "}
                <div className="text-green-600  font-medium py-1 text-xl">
                  {" "}
                  GYM
                </div>
                <div>
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </div>
                <div></div>{" "}
              </div>
              <img
                className=" w-fit "
                alt="GYM"
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              />
            </div>
     
            <div className=" bg-gray-50 m-4 flex flex-col item-center justify-center md:w-1/6 rounded-md w-fit">
              <div className="p-4">
                {" "}
                <div className="text-green-600  font-medium py-1 text-xl">
                  {" "}
                  Parking
                </div>
                <div>
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </div>
                <div></div>{" "}
              </div>
              <img
                className=" w-fit "
                alt="GYM"
                src="https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
      
            <div className=" bg-gray-50 m-4 flex flex-col item-center justify-center md:w-1/6 rounded-md w-fit">
              <div className="p-4">
                {" "}
                <div className="text-green-600  font-medium py-1 text-xl">
                  {" "}
                  Parking
                </div>
                <div>
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </div>
                <div></div>{" "}
              </div>
              <img
                className=" w-fit "
                alt="GYM"
                src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
        </div> */}

        {/* rooms and booking */}
        <div className=" md:mt-20 mt-10 mx-5 md:mx-52 ">
          <div className="text-3xl font-bold text-green-600 mb-4">
            Rooms & Booking
          </div>{" "}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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

//  <NumberPicker
// defaultValue={0}
// step={1}
// min={0}
// max={50}
// />

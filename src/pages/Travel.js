import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../component/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import TripTravelCard from "../component/TripTravelCard";
import TravelSlideCard from "../component/TravelSlideCard";
import Loading from "../component/Loading";
const tripData = [
  {
    tripType: "Egypt Trip",
    price: "530$",
    duration: 7,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://worldtourtravels.com/wp-content/uploads/2021/01/Tips-for-Making-Your-Egypt-Tour-Enjoyable-and-Memorable.jpg",
  },
  {
    tripType: "Dubai Trip",
    price: "1000$",
    duration: 3,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://cdn1.goibibo.com/voy_ing/t_fs/dubai-dubai-162046417415o.jpeg",
  },
  {
    tripType: "Istanbul Trip",
    price: "700$",
    duration: 7,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://tourscanner.com/blog/wp-content/uploads/2019/09/best-day-trips-from-Istanbul.jpg",
  },
  {
    tripType: "Akre Trip",
    price: "100$",
    duration: 3,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nawroz_festival_in_Akre%2C_Kurdistan_Region_of_Iraq_09.jpg",
  },
  {
    tripType: "Ahmawa Trip",
    price: "50$",
    duration: 2,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://scontent.febl4-2.fna.fbcdn.net/v/t31.18172-8/11731799_853037788110209_1352790732799268249_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=1oXU-4hk580AX_yCM98&_nc_ht=scontent.febl4-2.fna&oh=00_AT_Gq7NlyQaIPBre8-utLDhwJLjoHS8EOshDOIfpDX4wjA&oe=631BD539",
  },
  {
    tripType: "Rwandz Trip",
    price: "50$",
    duration: 1,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://i.pinimg.com/564x/6a/8c/bf/6a8cbf4aaceae201f6a1b45879c61bd9.jpg",
  },
];

export default function Travel() {
  const { id } = useParams();
  const [travel, settravel] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/travels/${id}`)
      .then((result) => {
        settravel(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!travel) {
    return <Loading />;
  }
  return (
    <div>
      <div className="md:mt-20 my-10 mx-5 2xl:mx-20 ">
        {/* abou hotel */}
        <div className="text-3xl font-bold text-green-600  mx-5 2xl:mx-52  lg:mx-24">
          About Travel Agency
        </div>
        <div className=" flex 2xl:mx-52 bg-gray-50  justify-between  rounded-md mt-4 flex-col shadow-md md:flex-col lg:flex-row  lg:mx-24">
          <div className=" flex flex-col w-full p-4 lg:w-3/5">
            <div className=" text-2xl text-green-600 font-medium">
              {travel.name}
            </div>
            <div>
              {" "}
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
          <div className=" w-full flex flex-col items-center p-1 lg:w-2/5  justify-center md:w-full ">
            <img
              className="rounded-lg object-fit w-5/6 h-5/6 shadow-md"
              alt="hotel"
              src={travel.image}
            />

            <div>
              <div className="text-sm flex flex-row justify-center items-center pt-2">
                <div className="px-1 ">
                  <IoLocationSharp fill="#0ca34a" className="w-4 h-4" />
                </div>
                <div className="text-lg font-medium text-gray-500">
                  {travel.location}
                </div>
              </div>
            </div>
          </div>
        </div>
        <TravelSlideCard />
        <div className="lg:mt-20 mt-10 mx-5 2xl:mx-52">
          <div className="text-3xl font-bold text-green-600 mb-4">
            Trips & Booking
          </div>{" "}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
            {tripData.map((trip, i) => (
              <TripTravelCard
                key={i}
                tripType={trip.tripType}
                price={trip.price}
                duration={trip.duration}
                description={trip.description}
                imageUrl={trip.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

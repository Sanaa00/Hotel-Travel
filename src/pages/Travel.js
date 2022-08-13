import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../component/Footer";

import SliderCard from "../component/SliderCard";
import Rating from "react-rating";
import TripTravelCard from "../component/TripTravelCard";
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
    tripType: "dukan Trip",
    price: "50$",
    duration: 2,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    imageUrl:
      "https://www.iraq-businessnews.com/wp-content/uploads/2021/06/Gali-Ali-Beg-waterfall-KRG-Board-of-Tourism.jpg",
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
    axios
      .get(`http://localhost:3001/travels/${id}`)
      .then((result) => {
        settravel(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!travel) {
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
  }
  return (
    <div>
      <div className="md:mt-20 my-10 mx-5 lg:mx-20">
        {/* abou hotel */}
        <div className="text-3xl font-bold text-green-600  mx-5 md:mx-52 ">
          About Travel Agency
        </div>
        <div className=" flex md:mx-52 bg-gray-50  justify-between  rounded-md mt-4 flex-col shadow-md md:flex-col lg:flex-row">
          <div className=" flex flex-col w-full p-4 lg:w-3/5">
            <div className=" text-2xl text-green-600 font-medium">
              {travel.name}
            </div>
            <div>
              {" "}
              <Rating
                className="pt-2 mr-2"
                initialRating={travel.star}
                fullSymbol={yellowStar}
                emptySymbol={greyStar}
                readonly={true}
              />
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
              <div className="text-sm flex flex-row justify-center items-center pt-3 ">
                <div className="px-1">
                  <IoLocationSharp />
                </div>
                <div>{travel.location}</div>
              </div>
            </div>
          </div>
        </div>
        <SliderCard />
        <div className=" md:my-20 my-10 mx-5 md:mx-52 ">
          <div className="text-3xl font-bold text-green-600 mb-4">
            Trips & Booking
          </div>{" "}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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

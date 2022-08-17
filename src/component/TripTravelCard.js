import React, { useState } from "react";
import BasicDatePicker from "./BasicDatePicker";
export default function TripTravelCard({
  tripType,
  description,
  duration,
  price,
  imageUrl,
}) {
  const [isBooked, setIsBooked] = useState(false);
  return (
    <div>
      <div className="bg-gray-50 rounded-md shadow-md">
        <div className="flex flex-col md:h-2/6 md:m-2 rounded-md">
          <div className="  flex flex-col p-1 m-2">
            <div className="text-xl font-medium text-green-600 flex flex-row justify-between py-2">
              <div>{tripType}</div>
              <div>{price}</div>
            </div>
            <div>{description}</div>{" "}
            <div className="flex flex-row justify-between py-1">
              <div>Duration</div>
              <div>{duration} Days</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Start Date </div>
              <div className="date_picker_container">
                <BasicDatePicker className="focus:outline-none active:border-none" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-center  pt-2">
              <button
                className={`${
                  isBooked
                    ? "bg-red-400"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 ..."
                } text-white text-sm w-full py-1 mt-2 rounded-md  drop-shadow-md hover:opacity-80 active:bg-red-400`}
                onClick={() => {
                  setIsBooked(!isBooked);
                }}
              >
                {isBooked ? "Cancel" : "Booking"}
              </button>
            </div>
          </div>
        </div>{" "}
        <img
          className=" rounded-md w-fit h-3/6 object-contain  "
          alt="travel"
          src={imageUrl}
        />
      </div>
    </div>
  );
}

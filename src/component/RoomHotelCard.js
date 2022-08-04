import React, { useState } from "react";
import BasicDatePicker from "./BasicDatePicker";

const RoomHotelCard = ({ roomType, price, description, imageUrl }) => {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:h-2/6 md:m-4 rounded-md">
        <div className="  flex flex-col p-1 m-2">
          <div className="text-xl font-medium text-green-600 flex flex-row justify-between py-2">
            <div>{roomType}</div>
            <div>{price}</div>
          </div>
          <div>{description}</div>
          <div className="flex items-center justify-between">
            <div>Start Date </div>
            <div className="date_picker_container">
              <BasicDatePicker className="focus:outline-none active:border-none" />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div> Duration</div>
            <div>
              <input
                type="number"
                defaultValue={0}
                step={1}
                min={0}
                max={50}
                className="bg-transparent focus:outline-none w-full"
                style={{ outline: "none" }}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-center  ">
            <button
              className={`${
                isBooked ? "bg-red-400" : "bg-green-600"
              } text-white text-sm w-full py-1 mt-2 rounded-md  drop-shadow-md hover:bg-green-600 hover:opacity-80 active:bg-red-400`}
              onClick={() => {
                setIsBooked(!isBooked);
              }}
            >
              {isBooked ? "Cancel" : "Booking"}
            </button>
          </div>
        </div>
        <div>
          <img className="object-cover" alt="single room" src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default RoomHotelCard;

import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
export default function TravelSlideCard() {
  const [cardNumber, setCardNumber] = useState(1);

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-restricted-globals
      if (innerWidth <= 768) {
        setCardNumber(1);
      } else {
        setCardNumber(3);
      }
    })();

    // eslint-disable-next-line no-restricted-globals, react-hooks/exhaustive-deps
  }, [innerWidth]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: cardNumber,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className=" md:mt-20 mt-10 mx-5 2xl:mx-52  lg:mx-24">
        <div className="text-3xl font-bold text-green-600 mb-4">Photo</div>{" "}
      </div>
      <div className="2xl:mx-52  lg:mx-24">
        <Slider {...settings}>
          <div>
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit shadow-md">
              <img
                className="   rounded-md object-contain"
                alt="breackfast"
                src="https://www.ootlah.com/wp-content/uploads/2021/01/GettyRF_1085205362.jpg"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit shadow-md object-cover">
              <img
                className="   rounded-md object-contain h-full"
                alt="breackfast"
                src="https://a.cdn-hotels.com/gdcs/production126/d521/bf8f5c39-3793-4eda-96ba-8d2ecb30956e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit shadow-md">
              <img
                className="   rounded-md"
                alt="breackfast"
                src="https://a.cdn-hotels.com/gdcs/production85/d784/3a2d1bd9-05c4-414e-af06-a444d81a105b.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
              />
            </div>
          </div>

          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit shadow-md">
              <img
                className="   rounded-md"
                alt="breackfast"
                src="https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/slideshow/shutterstock_1196821240.jpg?1622542766"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit shadow-md">
              <img
                className="   rounded-md"
                alt="breackfast"
                src="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-zermatt.jpg"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

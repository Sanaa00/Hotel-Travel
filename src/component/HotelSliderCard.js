import React, { useEffect, useState } from "react";
import Slider from "react-slick";
function HotelSliderCard() {
  // eslint-disable-next-line no-restricted-globals
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
      <div className=" md:mt-20 mt-10 mx-5 2xl:mx-52 ">
        <div className="text-3xl font-bold text-green-600 mb-4">Service</div>{" "}
      </div>
      <div className="2xl:mx-52">
        <Slider {...settings}>
          <div>
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit shadow-md">
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
                className="   rounded-md"
                alt="breackfast"
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit  shadow-md">
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
              </div>
              <img
                className="  rounded-md "
                alt="GYM"
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center md:w-6/6 rounded-md w-fit  shadow-md">
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
              </div>
              <img
                className="  rounded-md"
                alt="Parking"
                src="https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 flex  m-2 flex-col item-center justify-center md:w-6/6 rounded-md w-fit  shadow-md">
              <div className="p-4">
                {" "}
                <div className="text-green-600  font-medium py-1 text-xl">
                  {" "}
                  Swiming
                </div>
                <div>
                  {" "}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </div>
              </div>
              <img
                className=" rounded-md"
                alt="Parking"
                src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HotelSliderCard;

import React from "react";
import Slider from "react-slick";
export default function HomeSlider() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    infinite: true,
  };

  return (
    <>
      <div className=" "></div>
      <div className="">
        <Slider {...settings}>
          <div>
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center rounded-md w-fit shadow-md">
              <img
                className="rounded-md object-cover h-full w-full"
                alt="breackfast"
                src="https://www.ootlah.com/wp-content/uploads/2021/01/GettyRF_1085205362.jpg"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center rounded-md w-fit shadow-md object-cover">
              <img
                className="rounded-md object-cover h-full w-full"
                alt="breackfast"
                src="https://a.cdn-hotels.com/gdcs/production126/d521/bf8f5c39-3793-4eda-96ba-8d2ecb30956e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center rounded-md w-fit shadow-md">
              <img
                className="rounded-md object-cover h-full w-full"
                alt="breackfast"
                src="https://a.cdn-hotels.com/gdcs/production85/d784/3a2d1bd9-05c4-414e-af06-a444d81a105b.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center rounded-md w-fit shadow-md">
              <img
                className="rounded-md object-cover h-full w-full"
                alt="breackfast"
                src="http://discovererbil.com/wp-content/uploads/2015/05/gali-ali-beg-summer-resort-2-1024x680.jpg"
              />
            </div>
          </div>
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center rounded-md w-fit shadow-md">
              <img
                className="rounded-md object-cover h-full w-full"
                alt="breackfast"
                src="https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/slideshow/shutterstock_1196821240.jpg?1622542766"
              />
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className=" bg-gray-50 m-2 flex flex-col item-center justify-center rounded-md w-fit shadow-md">
              <img
                className="rounded-md object-cover h-full w-full"
                alt="breackfast"
                src="https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

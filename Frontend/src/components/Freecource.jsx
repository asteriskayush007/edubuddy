import React from "react";
import List from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freecource() {
  const filterCource = List.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <center>
            <h1 className="text-4xl font-semibold pb-2 ">Free Cources</h1>
          </center>
          <p className="font-light text-xl ">
            Explore a wide range of free web development and technology courses,
            designed to help you learn and grow. From beginner to advanced
            levels, you'll find a variety of topics to suit your interests.
            Access to these resources is available for free, making them an
            excellent choice for those looking to expand their skills.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterCource.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freecource;

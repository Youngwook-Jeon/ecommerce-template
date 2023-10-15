"use client";

import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";

import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import BannerText from "./BannerText";

const Banner = () => {
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 
                  rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 
                  rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <Image
            src={bannerone}
            alt="bannerone"
            className="w-full h-full relative"
          />
          <BannerText title="Outware Picks" />
        </div>

        <div className="w-full h-full relative">
          <Image
            src={bannertwo}
            alt="bannertwo"
            className="w-full h-full relative"
          />
          <BannerText title="Seasonal Offers" />
        </div>

        <div className="w-full h-full relative">
          <Image
            src={bannerthree}
            alt="bannerthree"
            className="w-full h-full relative"
          />
          <BannerText title="Best for men" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
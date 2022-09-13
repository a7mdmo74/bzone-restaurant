import React from "react";
import HeroImg from "../../assets/hero-bg.png";
import Bike from "../../assets/delivery.png";
import Strawberries from "../../assets/f5.png";
import Chicken from "../../assets/c3.png";
import Tilapia from "../../assets/fi3.png";
import Icream from "../../assets/i1.png";
const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-bold">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Bike}
              alt="Bike"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Food Delivery in
          <br />
          <span className="text-orange-600 text-[2.5rem] lg:text-[4.6rem]">
            Al Mansoura
          </span>
        </h1>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
          delectus sed, vel quaerat, libero nesciunt debitis, architecto
          repudiandae accusamus aut exercitationem nisi non doloribus!
          Temporibus officia architecto reiciendis blanditiis.
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroImg}
          alt="hero"
          className="ml-auto h-[420px] lg:h-[550px] w-full lg:w-auto"
        />
        <div className="w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-4 flex-wrap">
          <div className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center">
            <img
              src={Strawberries}
              alt="Strawberries"
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              Strawberries
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              Fresh Strawberries
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">£</span>
              7.25
            </p>
          </div>
          <div className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center">
            <img
              src={Chicken}
              alt="Chicken"
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              Chicken
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              Mixed Chicken
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">£</span>
              15.65
            </p>
          </div>
          <div className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center">
            <img
              src={Tilapia}
              alt="Tilapia"
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              Tilapia
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              Roasted Tilapia
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">£</span>
              10.25
            </p>
          </div>
          <div className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center">
            <img
              src={Icream}
              alt="Icream"
              className="w-24 lg:w-40 -mt-10 lg:-mt-20"
            />
            <p className="text-base lg:text-lg font-semibold text-textColor">
              Icream
            </p>
            <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
              Chocolate & Vanila
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">£</span>
              5.25
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

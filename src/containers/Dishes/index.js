import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Categories from "../../components/Categories";

const Dishes = ({ setMeal, meal }) => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="w-full my-5">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl text-headingColor font-semi-bold capitalize relative before:absolute before:rounded before:content before:w-32 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our Hot Dishes
        </h2>
        <div className="hidden md:flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg"
            onClick={() => scroll(-200)}
          >
            <IoIosArrowBack className="text-lg text-white" />
          </div>
          <div
            className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg"
            onClick={() => scroll(200)}
          >
            <IoIosArrowForward className="text-lg text-white" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-start lg:justify-center h-auto gap-4 md:gap-8 px-6 overflow-x-scroll scrollbar-hidden scroll-smooth">
        <Categories state={ref} setMeal={setMeal} meal={meal} />
      </div>
    </section>
  );
};

export default Dishes;

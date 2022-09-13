import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const Meal = ({ meal, toggleModal, setMealItem }) => {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <div
      className="w-[320px] min-w-[320px] md:w-[300px] md:min-w-[300px] my-12 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer"
      onClick={(e) => {
        toggleModal();
        setMealItem(strMeal);
      }}
      id={idMeal}
    >
      <div className="w-full flex items-center justify-around md:justify-between">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-36 h-36 md:w-40 md:h-40 -mt-8 rounded-xl object-contain cursor-pointer"
        />
        <div className="flex flex-col gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer">
            <MdAddShoppingCart className="text-white" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-end flex-col my-4">
        <p className="text-textColor font-semi-bold text-lg">{strMeal}</p>
      </div>
    </div>
  );
};

export default Meal;

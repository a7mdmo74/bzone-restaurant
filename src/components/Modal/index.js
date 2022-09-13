import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeal } from "../../store/features/dishes/dishesSlice";
import MealDetails from "../MealDetails.js";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Modal = ({ showModal, setShowModal, mealItem }) => {
  const dispatch = useDispatch();
  const { meal } = useSelector((state) => state.dishes);

  useEffect(() => {
    try {
      dispatch(getMeal(mealItem));
    } catch (error) {
      console.warn(error.message);
    }
    return () => {
      getMeal([]);
    };
  }, [dispatch, mealItem]);
  return (
    <div className="fixed bg-black/75 top-0 left-0 bottom-0 right-0 z-50">
      <div className="w-full h-full flex justify-center items-center p-4 opacity-100">
        <div className="relative w-full md:w-1/2 p-4 bg-white opacity-100 h-auto rounded-xl">
          <button
            className="absolute top-0 right-0 p-2 bg-red-600 text-white font-semibold rounded-bl-lg"
            onClick={() => setShowModal(!showModal)}
          >
            <MdOutlineRestaurantMenu />
          </button>
          {meal.map((item) => {
            const { idMeal } = item;
            return <MealDetails key={idMeal} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;

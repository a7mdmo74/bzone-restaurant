import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishesCategories } from "../../store/features/dishes/dishesSlice";
import Dish from "./Dish";
const Categories = ({ state, setMeal, meal }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(getDishesCategories());
  }, [dispatch]);

  return (
    <div
      className="w-full my-12 flex items-center min-h-[200px] gap-4 px-2 overflow-x-scroll scrollbar-hidden scroll-smooth"
      ref={state}
    >
      {categories.map((category) => {
        const { idCategory } = category;
        return (
          <Dish
            key={idCategory}
            category={category}
            setMeal={setMeal}
            meal={meal}
          />
        );
      })}
    </div>
  );
};

export default Categories;

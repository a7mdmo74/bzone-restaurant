import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meal from "../../components/Meal/Meal";
import Loading from "../../components/Loading";
import { getMeals } from "../../store/features/dishes/dishesSlice";
import { Modal } from "../../components";
const Meals = ({ meal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mealItem, setMealItem] = useState("");
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.dishes);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(getMeals(meal));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.warn(error.message);
    }
  }, [dispatch, meal]);
  return (
    <section className="w-full my-5 relative">
      <div className="bg-containerbg w-full my-12 flex items-center justify-center   min-h-[200px] gap-4  px-2 overflow-x-hidden flex-wrap">
        {isLoading && <Loading />}
        {meals.map((meal) => {
          const { idMeal } = meal;
          return (
            <Meal
              key={idMeal}
              meal={meal}
              toggleModal={toggleModal}
              setMealItem={setMealItem}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          mealItem={mealItem}
        />
      )}
    </section>
  );
};

export default Meals;

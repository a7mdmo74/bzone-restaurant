import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserAuth } from "../../context/AuthContext";
import { addToCart } from "../../store/features/cart/cartSlice";

const Meal = ({ meal, toggleModal, setMealItem }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { user } = UserAuth();
  const cart = useSelector((state) => state.cart);
  const handleAddCart = () => {
    if (user) {
      dispatch(addToCart(meal));
      toast.success(`${strMeal} add to cart successfully`);
    } else {
      toast.error("Login to add to cart");
      navigate("/login");
    }
  };

  return (
    <div
      className="w-[220px] md:w-[300px] md:min-w-[300px] my-12 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm"
      id={idMeal}
    >
      <div className="w-full flex items-center justify-around md:justify-between">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-28 h-36 md:w-40 md:h-40 -mt-8 rounded-xl object-contain cursor-pointer"
          onClick={(e) => {
            toggleModal();
            setMealItem(strMeal);
          }}
        />
        <div className="flex flex-col gap-2">
          <button
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
            onClick={handleAddCart}
          >
            <MdAddShoppingCart className="text-white" />
          </button>
        </div>
      </div>
      <div className="w-full flex items-end justify-end flex-col my-4">
        <p className="text-textColor font-semi-bold text-lg">{strMeal}</p>
      </div>
    </div>
  );
};

export default Meal;

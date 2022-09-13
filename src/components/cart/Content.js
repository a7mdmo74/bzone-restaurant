import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../store/features/cart/cartSlice";

const Content = ({ item }) => {
  const dispatch = useDispatch();
  const { idMeal, strMeal, strMealThumb, quantity, price } = item;

  const increment = () => {
    dispatch(incrementQuantity(idMeal));
  };

  const decrement = () => {
    dispatch(decrementQuantity(idMeal));
  };

  const remove = () => {
    dispatch(removeItem(idMeal));
  };

  return (
    <div
      className="w-full p-1 px-2 rounded-lg bg-cartItem hover:shadow-md flex items-center justify-between gap-2 cursor-pointer"
      id="idMeal"
    >
      <div className=" flex items-center  gap-2">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        />
        <div className="flex flex-col gap-0 ">
          <p className="text-sm text-gray-50">{strMeal.slice(0, 10)}</p>
          <p className="text-sm block text-gray-300 font-semibold">
            <span className="text-xs text-red-600">£</span> {price * quantity}
          </p>
        </div>
        <div className="group flex items-center gap-2  cursor-pointer">
          <button className="text-slate-100" onClick={increment}>
            <AiOutlinePlus />
          </button>
          <p className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-cartBg flex items-center justify-center cursor-default">
            {quantity}
          </p>
          <button className="text-slate-100" onClick={decrement}>
            <AiOutlineMinus />
          </button>
        </div>
        <button
          className="text-sm text-gray-50 w-6 h-6 rounded-lg px-1 bg-cartNumBg flex items-center justify-center"
          onClick={remove}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Content;

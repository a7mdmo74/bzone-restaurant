import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../assets/emptyCart.svg";
import Content from "./Content";
const Body = () => {
  const { cart } = useSelector((state) => state.cart);
  let sum = cart.reduce(function (prev, current) {
    if (current.quantity === 1) {
      return prev + +current.price;
    } else {
      return prev + +current.price * current.quantity;
    }
  }, 0);
  return (
    <>
      {cart.length === 0 ? (
        <div className="w-full p-5 flex flex-col items-center gap-4 justify-center">
          <img src={Cart} alt="emptyCart" className="h-[340px]" />
          <p className="text-textColor font-semibold">Cart is empty</p>
        </div>
      ) : (
        <div className="w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col">
          <div className="w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden">
            {cart.map((item) => {
              const { idMeal } = item;
              return <Content key={idMeal} item={item} />;
            })}
          </div>
          <div className="w-full mt-2 md:mt-0 flex-1 rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-base md:text-lg ">Sub Total</p>
              <p className="text-gray-400 text-base md:text-lg">-</p>
              <p className="text-gray-400 text-base md:text-lg ">
                <span className="text-sm text-red-600">£</span> {sum}
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-base md:text-lg ">Delivery</p>
              <p className="text-gray-400 text-base md:text-lg">-</p>
              <p className="text-gray-400 text-base md:text-lg ">
                <span className="text-sm text-red-600">£</span> 0
              </p>
            </div>
            <div className="w-full border-b border-gray-600 my-"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-50 text-base md:text-lg uppercase">
                Total
              </p>
              <p className="text-gray-50 text-base md:text-lg">-</p>
              <p className="text-gray-50 text-base md:text-lg ">
                <span className="text-sm text-red-600">₵</span> {sum}
              </p>
            </div>
            <button className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
              Checkout £ {sum}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;

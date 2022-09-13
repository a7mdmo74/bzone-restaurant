import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../assets/emptyCart.svg";
const Body = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="h-full w-full flex-1 flex items-center justify-center">
      {cart.length === 0 ? (
        <div className="w-full p-5 flex flex-col items-center gap-4 justify-center">
          <img src={Cart} alt="emptyCart" className="h-[340px]" />
          <p className="text-textColor font-semibold">Cart is empty</p>
        </div>
      ) : (
        <div className="w-full p-5 flex flex-col items-center gap-4 justify-center">
          <p className="text-textColor font-semibold">
            Cart length is {cart.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;

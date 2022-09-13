import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { MdLogin, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import Body from "./Body";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { CartState } from "../../context/CartContext";
const Cart = () => {
  const { user } = UserAuth();
  const { isCart, closeCart } = CartState();
  return (
    <div
      className={
        isCart
          ? "w-full md:w-1/4 bg-white fixed top-0 right-0 transition-all duration-500 p-4 z-50 min-h-screen shadow-xl"
          : "w-full md:w-1/4 bg-white fixed top-0 -right-full transition-all duration-500 p-4 z-50 min-h-screen shadow-xl"
      }
    >
      <div className="w-full flex items-center justify-between">
        <button onClick={closeCart}>
          <HiOutlineArrowNarrowRight className="text-xl" />
        </button>
        <div className="flex items-center gap-2 justify-center">
          Cart{" "}
          <span className="text-red-700">
            <MdShoppingBasket className="text-xl" />
          </span>
        </div>
        {!user && (
          <Link
            to="/login"
            className="flex items-center gap-2 justify-center"
            onClick={closeCart}
          >
            <span className="text-red-700">
              <MdLogin className="text-xl" />
            </span>
            Login to cart
          </Link>
        )}
      </div>
      <Body />
    </div>
  );
};

export default Cart;

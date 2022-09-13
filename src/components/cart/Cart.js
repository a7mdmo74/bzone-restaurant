import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { MdLogin, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import Body from "./Body";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { CartState } from "../../context/CartContext";
const Cart = ({ setIsMobileOn }) => {
  const { user } = UserAuth();
  const { isCart, closeCart } = CartState();
  return (
    <div
      className={
        isCart
          ? "w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[101] drop-shadow-xl fixed top-0 right-0 transition-all duration-500 min-h-screen shadow-xl overflow-y-scroll"
          : "w-full md:w-1/4 bg-white fixed top-0 -right-full transition-all duration-500 p-4 z-50 min-h-screen shadow-xl overflow-y-scroll"
      }
    >
      <div className="w-full flex items-center bg-white justify-between px-4 py-2 cursor-pointer">
        <button onClick={closeCart}>
          <HiOutlineArrowNarrowRight className="text-xl" />
        </button>
        <div className="flex items-center gap-2 justify-center">
          Cart{" "}
          <button className="text-red-700">
            <MdShoppingBasket className="text-xl" />
          </button>
        </div>
        {!user && (
          <Link
            to="/login"
            className="flex items-center gap-2 justify-center"
            onClick={() => {
              closeCart();
              setIsMobileOn(false);
            }}
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

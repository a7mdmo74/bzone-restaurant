import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartState } from "../../context/CartContext";

const Navigation = () => {
  const { toggleCart } = CartState();

  return (
    <div className="flex items-center gap-8">
      <ul className="flex items-center gap-8">
        <li className="md:text-sm lg:text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="md:text-sm lg:text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Menu
        </li>
        <li className="md:text-sm lg:text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Services
        </li>
        <li className="md:text-sm lg:text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          About Us
        </li>
        <li className="md:text-sm lg:text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Contact Us
        </li>
      </ul>
      <button
        className="relative flex items-center justify-center text-textColor"
        onClick={toggleCart}
      >
        <MdShoppingBasket className="text-2xl cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center cursor-pointer">
          <p className="text-sm text-white font-semibold">0</p>
        </div>
      </button>
    </div>
  );
};

export default Navigation;

import React from "react";
import { MdShoppingBasket, MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/chef1.png";
import { CartState } from "../../context/CartContext";
const MobileNav = ({ isMobileOn, setIsMobileOn }) => {
  const { toggleCart } = CartState();
  return (
    <div className="flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen overflow-y-hidden  z-50 overflow-hidden ">
      <div className="flex items-center justify-between w-screen h-24  px-10">
        <button
          className="relative flex items-center justify-center text-textColor"
          onClick={toggleCart}
        >
          <MdShoppingBasket className="text-4xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">0</p>
          </div>
        </button>
        <div
          className="relative flex items-center justify-center text-textColor cursor-pointer"
          onClick={() => setIsMobileOn(!isMobileOn)}
        >
          <MdOutlineRestaurantMenu className="text-headingColor text-4xl" />
        </div>
      </div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Menu
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Services
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          About
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Contact
        </p>
      </div>

      <Link to={"/"} className="flex items-center  justify-center w-full">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="Logo" className="w-16 object-cover" />
          <p className="text-headingColor text-3xl font-bold">Bentilzone</p>
        </div>
      </Link>
    </div>
  );
};

export default MobileNav;

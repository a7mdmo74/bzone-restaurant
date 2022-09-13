import React from "react";
import { MdShoppingBasket, MdOutlineRestaurantMenu } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/chef1.png";
import { CartState } from "../../context/CartContext";
const MobileNav = ({ isMobileOn, setIsMobileOn }) => {
  const { toggleCart } = CartState();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div
      className={
        isMobileOn
          ? "fixed top-0 left-0 min-h-screen w-full z-30 bg-white backdrop-blur-sm transition-all duration-500"
          : "fixed top-0 -left-full min-h-screen w-full z-30 bg-cardOverlay backdrop-blur-sm transition-all duration-500"
      }
    >
      <div className="flex flex-col items-start justify-start gap-16 w-screen h-screen overflow-y-hidden overflow-hidden ">
        <div className="flex items-center justify-between w-screen h-24  px-10">
          <button
            className="relative flex items-center justify-center text-textColor"
            onClick={toggleCart}
          >
            <MdShoppingBasket className="text-4xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">
                {cart.length === undefined ? "0" : cart.length}
              </p>
            </div>
          </button>
          <div
            className="relative flex items-center justify-center text-textColor cursor-pointer"
            onClick={() => setIsMobileOn(!isMobileOn)}
          >
            <MdOutlineRestaurantMenu className="text-headingColor text-4xl" />
          </div>
        </div>
        <ul
          className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
          onClick={() => setIsMobileOn(!isMobileOn)}
        >
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
            Menu
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
            Services
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
            About
          </li>
          <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
            Contact
          </li>
        </ul>

        <Link
          to={"/"}
          className="flex items-center  justify-center w-full"
          onClick={() => setIsMobileOn(!isMobileOn)}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-16 object-cover" />
            <p className="text-headingColor text-3xl font-bold">Bentilzone</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;

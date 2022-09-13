import React, { useState } from "react";
import Logo from "../../assets/chef1.png";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import LoginAction from "./LoginAction";
import MobileNav from "./MobileNav";
import { UserAuth } from "../../context/AuthContext";
import { MdLogin } from "react-icons/md";
import Avatar from "../../assets/avatar.png";
const Header = ({ isMobileOn, setIsMobileOn }) => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <header className="w-screen fixed z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16">
      <div className="hidden md:flex w-full justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} alt="Logo" className="md:w-6 lg:w-8 object-cover" />
            <p className="text-headingColor md:text-lg lg:text-xl font-bold">
              Bentilzone
            </p>
          </div>
        </Link>
        {/* Navigation */}
        <Navigation />
        {user !== null ? (
          <div className="flex items-center justify-center gap-4">
            <img
              src={user.photoURL !== null ? user.photoURL : Avatar}
              alt="Avatar"
              className="w-12 h-12 rounded-full border-4 border-gray-400"
            />
            <button
              className="flex items-center gap-3 border border-slate-200 px-3 py-1 rounded-lg cursor-pointer"
              onClick={handleLogOut}
            >
              <MdLogin className="text-2xl text-headingColor" />
            </button>
          </div>
        ) : (
          <LoginAction text="Login" />
        )}
      </div>
      {/* mobile screen */}
      <MobileNav isMobileOn={isMobileOn} setIsMobileOn={setIsMobileOn} />
      <div className="flex md:hidden w-full p-0 items-center justify-between">
        <div className="p-5 flex items-center justify-between w-full">
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsMobileOn(!isMobileOn)}
          >
            <HiOutlineMenuAlt2 className="text-headingColor text-4xl" />
          </div>
          <Link to={"/"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={Logo} alt="Logo" className="w-8 object-cover" />
              <p className="text-headingColor text-xl font-bold">Bentilzone</p>
            </div>
          </Link>
          {user !== null ? (
            <div className="flex items-center justify-center gap-4">
              <img
                src={user.photoURL !== null ? user.photoURL : Avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-4 border-gray-400"
              />
              <button
                className="flex items-center gap-3 border border-slate-200 px-3 py-1 rounded-lg cursor-pointer"
                onClick={handleLogOut}
              >
                <MdLogin className="text-2xl text-headingColor" />
              </button>
            </div>
          ) : (
            <LoginAction mobile={true} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

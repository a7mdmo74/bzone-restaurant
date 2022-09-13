import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/chef1.png";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-4 bg-primary sm:p-6 w-full">
      <div className="flex justify-center md:justify-start items-center">
        <div className="mb-3 md:mb-0">
          <Link className="flex gap-8 items-center" to="/">
            <img
              src={Logo}
              alt={Logo}
              className="w-10 md:w-36 object-contain"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-headingColor">
              Bentilzone
            </span>
          </Link>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between my-4">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          &copy; 2022 Bentilzone™. All Rights Reserved.{" "}
        </span>
        <a
          href="https://github.com/a7mdmo74"
          className="text-slate-400 hidden md:block"
          target="_blank"
          rel="noreferrer"
        >
          a7mdmo74
        </a>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:text-xl">
          <a
            href="https://github.com/a7mdmo74"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://facebook.com/a7mdmo74"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://linkedin.com/a7mdmo74"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://hackerreank.com/a7mdmo74"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
            rel="noreferrer"
          >
            <FaHackerrank />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

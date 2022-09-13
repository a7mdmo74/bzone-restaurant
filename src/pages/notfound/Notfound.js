import React from "react";
import notfound from "../../assets/NotFound.svg";
const Notfound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <img src={notfound} alt="Notfound" className="w-1/3" />
      <p className="text-textColor font-semibold my-4">
        <span className="text-red-700 font-bold">404 </span>page not found!
      </p>
    </div>
  );
};

export default Notfound;

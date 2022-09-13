import React from "react";

const Dish = ({ category, setMeal, meal }) => {
  const { idCategory, strCategory, strCategoryThumb } = category;
  return (
    <div
      id={idCategory}
      className={
        meal === strCategory
          ? `group bg-cartNumBg cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-2 items-center justify-center duration-150 transition-all ease-out px-1 py-4`
          : `group hover:bg-cartNumBg bg-btnOverlay cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-2 items-center justify-center duration-150 transition-all ease-out px-1 py-4`
      }
      onClick={() => setMeal(strCategory)}
    >
      <div
        className={`w-28 h-18 rounded-xl flex items-center justify-center p-3`}
      >
        <img src={strCategoryThumb} alt={strCategory} className="rounded-lg" />
      </div>
      <p
        className={
          meal === strCategory
            ? `text-base font-semibold text-white`
            : `text-base group-hover:text-white font-semibold text-cartNumBg`
        }
      >
        {strCategory}
      </p>
    </div>
  );
};

export default Dish;

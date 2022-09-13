import React from "react";

const MealDetails = ({ item }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = item;
  console.log(idMeal);
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex w-full items-center justify-around mb-4">
        <p className="text-slate-400">
          Category:
          <span className="text-black font-semibold">{strCategory}</span>
        </p>
        <p className="text-slate-400">
          Area: <span className="text-black font-semibold">{strArea}</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={strMealThumb} alt={strMeal} className="w-1/3 rounded-lg" />
        <div className="flex flex-col items-center">
          <h3>{strMeal}</h3>
          <p className="text-xs my-2 text-justify">
            {strInstructions}{" "}
            <a
              href={strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold"
            >
              watch video
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;

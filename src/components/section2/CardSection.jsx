import React, { useEffect, useState } from "react";
import axios from "axios";

const CardSection = () => {
  const [imgUrl, setImgUrl] = useState([]);

  const mealData = async () => {
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    const res = await axios(API);
    const data = await res.data.meals;

    setImgUrl(data.slice(0, 6));
  };

  useEffect(() => {
    mealData();
  }, []);

  return (
    <div className="h-full max-w-6xl m-auto">
      <div className="grid sm:grid-cols-3 h-full w-fit m-auto cursor-pointer justify-items-center items-center">
        {imgUrl.map((meal, index) => {
          return (
            <div
              key={meal.idMeal || index}
              className="hover:bg-neutral-100/50 duration-200 flex flex-col gap-6 justify-center items-center rounded-2xl h-fit p-5 w-fit"
            >
              {" "}
              <img
                src={meal.strMealThumb}
                alt="food image"
                className="w-80  rounded-2xl"
              />
              <h2 className=" font-semibold text-neutral-800  text-center  text-base">
                {meal.strMeal}
                <p className="text-base font-normal text-neutral-600">
                  {meal.strCategory}
                </p>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;

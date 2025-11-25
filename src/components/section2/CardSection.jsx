import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import { MainLoader } from "../ui/MainLoader";

const CardSection = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [loading, setLoading] = useState(true);

  const mealData = async () => {
    try {
      const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
      setLoading(true);
      const res = await axios(API);
      const data = res.data.meals;
      setImgUrl(data?.slice(0, 6) || []);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  useEffect(() => {
    mealData();
  }, []);

  return (
    <div className="h-full relative mb-10">
      {loading ? (
        <div className="flex w-full h-full items-center justify-center">
          <MainLoader size={50} />
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-6 justify-items-center items-start max-w-6xl m-auto">
          {imgUrl.map((meal, index) => (
            <motion.div
              key={meal.idMeal}
              initial={{ filter: "blur(10px)", opacity: 0 }}
              layout
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: [0.55, 0, 0.58, 1],
              }}
              className="hover:bg-neutral-100/50 duration-200 flex flex-col gap-6 justify-center items-center rounded-2xl h-fit p-5 w-fit relative"
              onClick={() => handleClick(meal.idMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt="food image"
                className="w-80 rounded-2xl"
              />

              <h2 className="font-semibold text-neutral-800 text-center text-base">
                {meal.strMeal}
                <p className="text-base font-normal text-neutral-600">
                  {meal.strCategory}
                </p>
              </h2>

              {expandedCard === meal.idMeal && (
                <div className="bg-[#ffffffcc] h-full w-full absolute left-0 top-0 flex items-center z-20">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: [0.58, 0, 0.6, 1] }}
                    className="max-w-lg bg-neutral-100 w-full m-auto h-fit overflow-hidden rounded-4xl pb-5"
                  >
                    <div className="flex flex-col gap-4">
                      <img
                        src={meal.strMealThumb}
                        alt="food image"
                        className="w-full h-70 object-cover"
                      />
                      <div className="p-6 flex flex-col gap-4 capitalize max-h-90 overflow-hidden">
                        <motion.h2
                          initial={{ paddingLeft: "50px" }}
                          animate={{ paddingLeft: "0px" }}
                          transition={{
                            duration: 0.3,
                            ease: [0.42, 0, 0.58, 1],
                          }}
                          className="font-semibold text-neutral-800 text-base"
                        >
                          {meal.strMeal}
                          <p className="text-base font-normal text-neutral-600">
                            {meal.strCategory}
                          </p>
                        </motion.h2>

                        <motion.p
                          initial={{ height: 50, paddingLeft: "10px" }}
                          layout
                          animate={{ height: "auto", paddingLeft: "0px" }}
                          transition={{
                            duration: 0.3,
                            ease: [0.55, 0, 0.58, 1],
                          }}
                          className="text-base font-normal text-neutral-600 pb-10"
                        >
                          {meal.strInstructions}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSection;

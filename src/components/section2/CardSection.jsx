import {
  Briefcase,
  CookieIcon,
  CookingPot,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";
import React from "react";

const CardSection = () => {
  return (
    <div className="h-screen">
      <section className="relative text-center py-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 items-center max-w-6xl mx-auto px-4">
          {/* Badge */}
          <span className="inline-flex animate-fade-in-down items-center px-6 py-2.5 rounded-full bg-orange-50 text-[#F83002] text-lg font-semibold shadow-sm border border-orange-100">
            <CookingPot size={20} className="mr-2" />
            Smart Cooking Starts Here.
          </span>

          {/* Heading */}
          <h1 className="mt-4 text-6xl font-bold tracking-tight animate-fade-in-up">
            Quick Recipes &amp; <br />
            Better Ways{" "}
            <span className="text-[#6A38C2] relative">
              to Cook
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 358 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.8c54-4 98.5-4.3 137.3-3.5 39 .8 78.6 2.7 118.4 3.7 39.7 1 79.6 1.2 98.3 1.2"
                  stroke="#6A38C2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              
            </span>
          </h1>

          {/* Subtitle */}
           <p className="mt-4 font-normal text-base text-neutral-600 max-w-lg text-center mx-auto">
                AI Chef brings innovation to your kitchen, serving smart recipe
                ideas that balance flavor, freshness, and modern technology.
              </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mt-4 animate-fade-in-up animation-delay-300">
            <div className="flex shadow-lg border border-gray-200 bg-white rounded-full items-center gap-4 pl-6 transition-all duration-300 hover:shadow-xl">
              <CookieIcon size={20} className="text-neutral-500" />
              <input
                type="text"
                placeholder="Find Your Dream Job"
                className="outline-none px-4 py-4 w-full border-none text-lg placeholder:text-gray-400"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground py-2 bg-[#6A38C2] hover:bg-[#5b30a6] rounded-r-full h-14 px-8 transition-all duration-300 text-neutral-100">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8 animate-fade-in-up animation-delay-450">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-[#6A38C2]  " size={24} />
              <span className="text-lg">
                <strong className="font-bold">10k+</strong> Jobs Posted
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={20} className="text-[#F83002]" />
              <span className="text-lg">
                <strong className="font-bold">8k+</strong> Companies
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={20} className="text-[#6A38C2]" />
              <span className="text-lg">
                <strong className="font-bold">15k+</strong> Candidates
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;

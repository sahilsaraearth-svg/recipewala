import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: "1",
    title: "Trip Planner",
    desc: "5 Inspiring Apps for Your Next Trip",
    img: "https://source.unsplash.com/random/800x600?travel",
  },
  {
    id: "2",
    title: "Urban Explore",
    desc: "Urban Exploration of the Vertical City",
    img: "https://source.unsplash.com/random/800x600?city",
  },
  {
    id: "3",
    title: "Nature Reflection",
    desc: "Contemplate the Meaning of Life Twice a Day",
    img: "https://source.unsplash.com/random/800x600?nature",
  },
  // add more as desired
];

function CardAimation() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen  p-8 max-w-6xl m-auto">
      <div className="grid gap-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div></div>
        {cards.map((card) => (
          <>
            <div className="w-full flex flex-col justify-center items-center mt-50 mb-20 gap-3 ">
              <h1 className="text-2xl md:text-7xl font-medium tracking-tight animate-fade-in-up text-center font-display ">
                How AI Helps You Cook
              </h1>
              <p className="text-neutral-600 text-base">
                Your intelligent cooking companion for every step of the journey
              </p>
            </div>
            <motion.div
              key={card.id}
              layoutId={`card-container-${card.id}`}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg"
              onClick={() => setSelectedId(card.id)}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
                layoutId={`card-image-${card.id}`}
              />
              <motion.div className="p-4" layoutId={`card-body-${card.id}`}>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.desc}</p>
              </motion.div>
            </motion.div>
          </>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black/1 bg-opacity-50 flex items-center justify-center p-6 z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={cards.find((c) => c.id === selectedId).img}
                alt=""
                className="w-full h-64 object-cover"
                layoutId={`card-image-${selectedId}`}
              />
              <motion.div className="p-6" layoutId={`card-body-${selectedId}`}>
                <h2 className="text-2xl font-bold mb-4">
                  {cards.find((c) => c.id === selectedId).title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {cards.find((c) => c.id === selectedId).desc}
                </p>
                <p className="text-gray-500">
                  This is a detailed view. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Donec euismod, nisl eget
                  consectetur sagittis, nisl nunc consectetur nisi, eu
                  consectetur nisl nunc et nisl.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CardAimation;

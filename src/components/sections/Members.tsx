import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion"

import { ChevronLeft } from "../../motion/ChevronLeft";
import { ChevronRight } from "../../motion/ChevronRight";
import { members } from "../context/members";

import { AnimatedTooltip } from "../../animation/AnimatedTooltips";


// Generic transition for smooth animations
const smoothTransition: Transition = {
  duration: 0.7,
  ease: "easeInOut",
};

// Parent container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Child fade-in items
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Carousel (direction-aware)
const testimonialVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: smoothTransition,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction < 0 ? 45 : -45,
    transition: smoothTransition,
  }),
};

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Members = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedMembers, setSelectedMembers] = useState<typeof members[0] | null>(null);

  // Function to move carousel
  const swipeToTestimonial = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) =>
      newDirection === 1
        ? (prev + 1) % members.length
        : (prev - 1 + members.length) % members.length
    );
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => swipeToTestimonial(1), 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="members"
      className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-green-50 to-green-100 relative"
    >
      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-6 
             bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
             bg-clip-text text-transparent"
        >
          Core Team Members
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
         Meet the people driving TechTribe forward
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative flex items-start justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={testimonialVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl 
                p-8 md:p-12 max-w-2xl border border-green-100">
              <img
                src={members[current].image}
                alt={members[current].name}
                onClick={() => setSelectedMembers(members[current])}
                className="w-24 h-24 rounded-full object-cover border-4 border-green-300 shadow-lg mx-auto mb-6"
              />
              <div className="text-center space-y-1">

                <h3 className="text-2xl font-bold text-green-800">
                  {members[current].name}
                </h3>
                <p className="text-emerald-600 font-semibold">
                  {members[current].designation}
                </p>
                <blockquote className="text-gray-700 text-lg italic">
                  "{members[current].desc}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <motion.div className="flex justify-center mt-8 space-x-6" initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
        <button
          onClick={() => swipeToTestimonial(-1)}
          className="p-3 rounded-full bg-white border border-green-300 
               shadow hover:bg-green-50 hover:shadow-lg 
               transition-all duration-300 text-green-700"
        >
          <ChevronLeft/>
        </button>
        <button
          onClick={() => swipeToTestimonial(1)}
          className="p-3 rounded-full bg-white border border-green-300 
               shadow hover:bg-green-50 hover:shadow-lg 
               transition-all duration-300 text-green-700"
        >
         <ChevronRight/>
        </button>
      </motion.div>
      <motion.div className="flex flex-row items-center justify-center mt-15 w-full" initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
      <AnimatedTooltip items={members} onClick={setSelectedMembers}  />
    </motion.div>

    <AnimatePresence>
        {selectedMembers && (
          <motion.div
            key={selectedMembers.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
            onClick={() => setSelectedMembers(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-green-500"
                onClick={() => setSelectedMembers(null)}
              >
                ✕
              </button>
              <img
                src={selectedMembers.image}
                alt={selectedMembers.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-green-300 shadow-lg mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-green-800 text-center">
                {selectedMembers.name}
              </h3>
              <p className="text-emerald-600 font-semibold text-center">
                {selectedMembers.designation}
              </p>
              <blockquote className="text-gray-700 text-lg italic text-center mt-4">
                {selectedMembers.desc}
              </blockquote>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Members;

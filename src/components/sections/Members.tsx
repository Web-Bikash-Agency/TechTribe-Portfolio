import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion"

import { ChevronLeft } from "../../motion/ChevronLeft";
import { ChevronRight } from "../../motion/ChevronRight";
import { members } from "../context/members";
import { founder } from "../context/founder";
import { coreTeam } from "../context/coreTeam";
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

const Members = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedFounder, setSelectedFounder] = useState<typeof founder[0] | null>(null);
  const [selectedCoreTeam, setSelectedCoreTeam] = useState<typeof founder[0] | null>(null);

  // Function to move carousel
  const swipeToTestimonial = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) =>
      newDirection === 1
        ? (prev + 1) % members.length
        : (prev - 1 + members.length) % members.length
    );
  };

  // Handle Founder click from AnimatedTooltip
  const handleFounderClick = (item: { id: number; name: string; designation: string; image: string }) => {
    // Find the full member data including the 'desc' property
    const fullFounder = founder.find(founder => founder.id === item.id);
    if (fullFounder) {
      setSelectedFounder(fullFounder);
    }
  };
  // Handle Founder click from AnimatedTooltip
  const handleCoreTeamClick = (item: { id: number; name: string; designation: string; image: string }) => {
    // Find the full member data including the 'desc' property
    const fullCoreTeam = coreTeam.find(coreTeam => coreTeam.id === item.id);
    if (fullCoreTeam) {
      setSelectedFounder(fullCoreTeam);
    }
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
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
            bg-clip-text text-transparent mb-6"
        >
          Team Members
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8 rounded-full"></div>
        <motion.p
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
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
          <ChevronLeft />
        </button>
        <button
          onClick={() => swipeToTestimonial(1)}
          className="p-3 rounded-full bg-white border border-green-300 
               shadow hover:bg-green-50 hover:shadow-lg 
               transition-all duration-300 text-green-700"
        >
          <ChevronRight />
        </button>
      </motion.div>

        {/* Core Team  */}
 <motion.div className="flex flex-row items-center justify-center mt-10 w-full" initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>

        <span className="z-50 text-lg font-bold text-green-900 mr-5">Core Team:</span> <AnimatedTooltip items={coreTeam} onClick={handleCoreTeamClick} />
      </motion.div>
      <AnimatePresence>

        {selectedCoreTeam && (
          <motion.div
            key={selectedCoreTeam.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
            onClick={() => setSelectedCoreTeam(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-green-500"
                onClick={() => setSelectedCoreTeam(null)}
              >
                ✕
              </button>
              <img
                src={selectedCoreTeam.image}
                alt={selectedCoreTeam.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-green-300 shadow-lg mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-green-800 text-center">
                {selectedCoreTeam.name}
              </h3>
              <p className="text-emerald-600 font-semibold text-center">
                {selectedCoreTeam.designation}
              </p>
              <blockquote className="text-gray-700 text-lg italic text-center mt-4">
                {selectedCoreTeam.desc}
              </blockquote>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Founders */}
      <motion.div className="flex flex-row items-center justify-center mt-10 w-full" initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>

        <span className="z-50 text-lg font-bold text-green-900 mr-5">Mind Behind This:</span> <AnimatedTooltip items={founder} onClick={handleFounderClick} />
      </motion.div>
      <AnimatePresence>

        {selectedFounder && (
          <motion.div
            key={selectedFounder.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
            onClick={() => setSelectedFounder(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-green-500"
                onClick={() => setSelectedFounder(null)}
              >
                ✕
              </button>
              <img
                src={selectedFounder.image}
                alt={selectedFounder.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-green-300 shadow-lg mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-green-800 text-center">
                {selectedFounder.name}
              </h3>
              <p className="text-emerald-600 font-semibold text-center">
                {selectedFounder.designation}
              </p>
              <blockquote className="text-gray-700 text-lg italic text-center mt-4">
                {selectedFounder.desc}
              </blockquote>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Members;
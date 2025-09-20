import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion"

import { ChevronLeft } from "../../motion/ChevronLeft";
import { ChevronRight } from "../../motion/ChevronRight ";


const testimonials = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    desc: "Alice is skilled in building responsive and interactive web interfaces using React and modern CSS frameworks. She specializes in creating smooth user experiences with a strong eye for detail.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Backend Engineer",
    company: "StartupFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    desc: "Ravi has expertise in Node.js and database management, focusing on scalable and secure backend systems. He’s passionate about APIs, microservices, and optimizing server performance.",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    company: "DesignStudio",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    desc: "Sophia is a creative designer with strong skills in wireframing, prototyping, and user research. She excels at crafting visually appealing designs that balance aesthetics with usability.",
    rating: 5,
  },
];

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

  // Function to move carousel
  const swipeToTestimonial = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) =>
      newDirection === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 
             bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
             bg-clip-text text-transparent"
        >
          Core Team Members
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Discover how TechTribe has transformed careers and built lasting
          connections in our vibrant developer community
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
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-green-300 shadow-lg mx-auto mb-6"
              />
              <div className="text-center space-y-1">

                <h3 className="text-2xl font-bold text-green-800">
                  {testimonials[current].name}
                </h3>
                <p className="text-emerald-600 font-semibold">
                  {testimonials[current].role}
                </p>
                <p className="text-green-500 text-sm mb-4">
                  @{testimonials[current].company}
                </p>
                <blockquote className="text-gray-700 text-lg italic">
                  "{testimonials[current].desc}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-8 space-x-6">
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
      </div>
    </section>
  );
};

export default Members;

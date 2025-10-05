import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion"
import { Linkedin, Github, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { members } from "../context/members";
import { founder } from "../context/founder";
import { coreTeam } from "../context/coreTeam";
import { AnimatedTooltip } from "../../animation/AnimatedTooltips";

// Define types for our data structures
interface TeamMember {
  id: number;
  name: string;
  designation: string;
  role: string;
  image: string;
  desc: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

interface TooltipItem {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
};

const Members = () => {
  const [current, setCurrent] = useState(2);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedFounder, setSelectedFounder] = useState<TeamMember | null>(null);
  const [selectedCoreTeam, setSelectedCoreTeam] = useState<TeamMember | null>(null);
  
  const isMobile = useIsMobile(768);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [current, isAutoPlaying]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % members.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleCardClick = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  const getVisibleCards = () => {
    const visible: { index: number; position: number }[] = [];
    for (let i = -2; i <= 2; i++) {
      const index = (current + i + members.length) % members.length;
      visible.push({ index, position: i });
    }
    return visible;
  };

   const getCardStyle = (position: number) => {
    const xOffset = isMobile ? 120 : 280;
    const farOffset = isMobile ? 200 : 480;
    const styles: Record<number, { scale: number; x: number; z: number; opacity: number; rotateY: number }> = {
      0: { scale: 1.05, x: 0, z: 100, opacity: 1, rotateY: 0 },
      1: { scale: 0.85, x: xOffset, z: 0, opacity: 0.7, rotateY: -20 },
      [-1]: { scale: 0.85, x: -xOffset, z: 0, opacity: 0.7, rotateY: 20 },
      2: { scale: 0.7, x: farOffset, z: -50, opacity: 0.4, rotateY: -30 },
      [-2]: { scale: 0.7, x: -farOffset, z: -50, opacity: 0.4, rotateY: 30 }
    };
    return styles[position] || { scale: 0, x: 0, z: -100, opacity: 0, rotateY: 0 };
  };

  // Handle Founder click from AnimatedTooltip
  const handleFounderClick = (item: TooltipItem) => {
    const fullFounder = founder.find(f => f.id === item.id);
    if (fullFounder) {
      setSelectedFounder(fullFounder as TeamMember);
    }
  };

  // Handle Core Team click from AnimatedTooltip
  const handleCoreTeamClick = (item: TooltipItem) => {
    const fullCoreTeam = coreTeam.find(c => c.id === item.id);
    if (fullCoreTeam) {
      setSelectedCoreTeam(fullCoreTeam as TeamMember);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section
      id="members"
       style={{
  // background: "linear-gradient(145deg, #ffffff 0%, #e0f7eb 70%, #6ee7b7 100%)"
  background: "linear-gradient(145deg, #98f5cb  0%, #e0f7eb 30%, #ffffff 100%)"
}}
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
                   variants={fadeIn}
                   initial="hidden"
                   whileInView="show"
                   viewport={{ once: true }}
                   className="text-5xl md:text-7xl font-bold mb-6"
                 >
                   <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                     The Team Members
                   </span>
                 </motion.h2>
         <motion.div
                    className="flex justify-center gap-2 mb-8"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </motion.div>
        {/* <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8 rounded-full"></div> */}
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

      {/* Interactive 3D Carousel */}
      <div 
        className={`relative ${isMobile ? 'h-[580px]' : 'h-[600px]'} flex items-center justify-center mb-8 overflow-hidden px-4`}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {isMobile ? (
          // Mobile: Single card with slide animation
          <div className="relative w-full max-w-sm mx-auto h-full flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-6 border-4 border-green-400 mx-auto">
                  <div className="relative mb-6">
                    <img
                      src={members[current].image}
                      alt={members[current].name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-green-400"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
                      <img src="/TechTribe-BrightLOGO.png" alt="Logo" className="rounded-4xl"/>
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-green-800">
                      {members[current].name}
                    </h3>
                    <p className="text-emerald-600 font-semibold">
                      {members[current].designation}
                    </p>
                    {/* <p className="text-gray-500 text-sm">
                      {members[current].role}
                    </p> */}

                    <blockquote className="text-gray-800 italic text-sm mt-4 px-2">
                      "{members[current].desc}"
                    </blockquote>

                    <div className="flex justify-center space-x-4 mt-6">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={members[current].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Linkedin size={22} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={members[current].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Github size={22} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={members[current].instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Instagram size={22} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Dots Indicator */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 bg-green-500' 
                      : 'w-2 bg-green-300'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop: 3D Carousel
          <div className="absolute inset-0 flex items-center justify-center perspective-[2000px]">
            {getVisibleCards().map(({ index, position }) => {
              const member = members[index];
              const style = getCardStyle(position);
              const isCenter = position === 0;
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    scale: isHovered && !isCenter ? style.scale * 1.05 : style.scale,
                    x: style.x,
                    z: style.z,
                    opacity: style.opacity,
                    rotateY: style.rotateY
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`bg-white rounded-3xl shadow-2xl p-8 w-80 transition-all duration-300
                    ${isCenter ? 'border-4 border-green-400' : 'border-2 border-green-200'}
                    ${isHovered && !isCenter ? 'shadow-green-300/50' : ''}`}>

                    <div className="relative mb-6">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className={`w-32 h-32 rounded-full object-cover mx-auto border-4 
                          ${isCenter ? 'border-green-400' : 'border-green-200'}`}
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {isCenter && (
                        <motion.div
                          className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring" }}
                        >
                           <img src="/TechTribe-BrightLOGO.png" alt="Logo" className="rounded-4xl" />
                        </motion.div>
                      )}
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className="text-2xl font-bold text-green-800">
                        {member.name}
                      </h3>
                      <p className="text-emerald-600 font-semibold">
                        {member.designation}
                      </p>

                      <AnimatePresence mode="wait">
                        {(isCenter || isHovered) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <blockquote className="text-gray-800 italic text-sm mt-4">
                              "{member.desc}"
                            </blockquote>

                            <div className="flex justify-center space-x-4 mt-6">
                              <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 transition-colors"
                              >
                                <Linkedin size={22} />
                              </motion.a>
                              <motion.a
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 transition-colors"
                              >
                                <Github size={22} />
                              </motion.a>
                              <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={member.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 transition-colors"
                              >
                                <Instagram size={22} />
                              </motion.a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className={`absolute ${isMobile ? 'left-2' : 'left-4'} z-50 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-xl 
            border-2 border-green-300 text-green-700 hover:bg-green-50 transition-colors`}
        >
          <ChevronLeft size={isMobile ? 20 : 28} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className={`absolute ${isMobile ? 'right-2' : 'right-4'} z-50 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-xl 
            border-2 border-green-300 text-green-700 hover:bg-green-50 transition-colors`}
        >
          <ChevronRight size={isMobile ? 20 : 28} />
        </motion.button>
      </div>

      {/* Core Team  */}
      <motion.div
        className="flex flex-row items-center justify-center mt-10 w-full"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="z-50 text-lg font-bold text-green-900 mr-5">Core Team:</span>
        <AnimatedTooltip items={coreTeam as TooltipItem[]} onClick={handleCoreTeamClick} />
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
              <p className="text-emerald-600 font-semibold text-center">
                {selectedCoreTeam.role}
              </p>
              <blockquote className="text-gray-700 text-lg italic text-center mt-4">
                {selectedCoreTeam.desc}
              </blockquote>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href={selectedCoreTeam.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={selectedCoreTeam.github || "#"} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href={selectedCoreTeam.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Founders */}
      <motion.div
        className="flex flex-row items-center justify-center mt-10 w-full"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-lg font-bold text-green-900 mr-5">Mind Behind This:</span>
        <AnimatedTooltip items={founder as TooltipItem[]} onClick={handleFounderClick} />
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
              <p className="text-emerald-600 font-semibold text-center">
                {selectedFounder.role}
              </p>
              <blockquote className="text-gray-700 text-lg italic text-center mt-4">
                {selectedFounder.desc}
              </blockquote>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href={selectedFounder.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={selectedFounder.github || "#"} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href={selectedFounder.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Members;
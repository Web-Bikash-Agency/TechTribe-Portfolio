import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { members } from "../context/members";

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

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const isMobile = useIsMobile(768);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [current, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % members.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleCardClick = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return [{ index: current, position: 0 }];
    }

    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (current + i + members.length) % members.length;
      visible.push({ index, position: i });
    }
    return visible;
  };

  const getCardStyle = (position: number) => {
    if (isMobile) {
      return { scale: 1, x: 0, z: 0, opacity: 1, rotateY: 0 };
    }

    const xOffset = 280;
    const farOffset = 480;
    const styles: Record<number, { scale: number; x: number; z: number; opacity: number; rotateY: number }> = {
      0: { scale: 1.05, x: 0, z: 100, opacity: 1, rotateY: 0 },
      1: { scale: 0.85, x: xOffset, z: 0, opacity: 0.7, rotateY: -20 },
      [-1]: { scale: 0.85, x: -xOffset, z: 0, opacity: 0.7, rotateY: 20 },
      2: { scale: 0.7, x: farOffset, z: -50, opacity: 0.4, rotateY: -30 },
      [-2]: { scale: 0.7, x: -farOffset, z: -50, opacity: 0.4, rotateY: 30 }
    };
    return styles[position] || { scale: 0, x: 0, z: -100, opacity: 0, rotateY: 0 };
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

  const getBorderColor = (member: { gender: string }, isCenter: boolean) => {
    const base = isCenter ? "border-4" : "border-2";
    if (member.gender === "male") return `${base} border-cyan-400`;
    if (member.gender === "female") return `${base} border-pink-400`;
    return `${base} border-green-400`;
  };
  const getGenderColors = (member: { gender: string }) => {
    switch (member.gender) {
      case "male":
        return {
          name: "text-cyan-800",
          domain: "text-cyan-600",
          social: "text-cyan-600 hover:text-cyan-800",
          shadow: "shadow-cyan-300/50"
        };
      case "female":
        return {
          name: "text-pink-800",
          domain: "text-pink-600",
          social: "text-pink-600 hover:text-pink-800",
          shadow: "shadow-pink-300/50"
        };
      default:
        return {
          name: "text-green-800",
          domain: "text-emerald-600",
          social: "text-green-600 hover:text-green-800",
          shadow: "shadow-green-300/50"
        };
    }
  };

  const SocialIcon = ({ href, Icon, colorClass }: { href: string; Icon: React.ComponentType<{ size?: number }>; colorClass: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={colorClass}
      whileHover={{
        scale: 1.3,
        rotate: 10,
        y: -3,
        textShadow: '0px 4px 12px rgba(0,0,0,0.2)',
        transition: { type: 'spring', stiffness: 300, damping: 15 }
      }}
      whileTap={{ scale: 0.95, rotate: 0, y: 0, textShadow: 'none' }}
    >
      <Icon size={22} />
    </motion.a>
  );

  return (
    <
      >

      {/* Carousel Container */}
      <div
        className={`relative ${isMobile ? 'h-[580px]' : 'h-[600px]'} flex items-center justify-center mb-8 overflow-hidden px-4`}

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
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className={`bg-white rounded-3xl shadow-2xl p-6 mx-auto ${getBorderColor(members[current], true)}`}>
                  <div className="relative mb-6">
                    <img
                      src={members[current].image}
                      alt={members[current].name}
                      className={`w-32 h-32 rounded-full object-cover mx-auto ${getBorderColor(members[current], true)}`}
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold">
                      <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1759733373/TechTribe-BrightLOGO_1_oprubi.png" alt="Logo" className="rounded-4xl" />
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-green-800">
                      {members[current].name}
                    </h3>
                    <p className="text-emerald-600 font-semibold">
                      {members[current].domain}
                    </p>
                   
                    <p className="text-gray-800 italic text-sm mt-4 px-2">
                      "{members[current].desc}"
                    </p>

                    <div className="flex justify-center space-x-4 mt-6">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={members[current].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${getGenderColors(members[current]).social}`}
                      >
                        <Linkedin size={22} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={members[current].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${getGenderColors(members[current]).social}`}
                      >
                        <Github size={22} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={members[current].instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${getGenderColors(members[current]).social}`}
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
                  className={`h-2 rounded-full transition-all duration-300 ${index === current
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
              const genderColors = getGenderColors(member);

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
                     ${getBorderColor(member, isCenter)}
                    ${isHovered && !isCenter ? genderColors.shadow : ''}`}>

                    <div className="relative mb-6">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className={`w-32 h-32 rounded-full object-cover mx-auto ${getBorderColor(member, isCenter)}`}
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
                          <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1759733373/TechTribe-BrightLOGO_1_oprubi.png" alt="Logo" className="rounded-4xl" />
                        </motion.div>
                      )}
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className={`text-2xl font-bold ${genderColors.name}`}>
                        {member.name}
                      </h3>
                      <p className={`font-semibold ${genderColors.domain}`}>
                        {member.domain}
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
                              <SocialIcon href={member.linkedin} Icon={Linkedin} colorClass={genderColors.social} />
                              <SocialIcon href={member.github} Icon={Github} colorClass={genderColors.social} />
                              <SocialIcon href={member.instagram} Icon={Instagram} colorClass={genderColors.social} />
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
    </>
  );
};

export default Carousel;
import { useState, useEffect } from "react";
import { BackgroundBeams } from "../../animation/BackgroundBeams"
import { Users } from "lucide-react"
import { Rocket } from "lucide-react"
import { Button } from "../../animation/MovingBorder";
import { motion, AnimatePresence } from "framer-motion";


const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    // Smoother timing sequence
    const timer1 = setTimeout(() => setAnimationStage(1), 300);
    const timer2 = setTimeout(() => setAnimationStage(2), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideIndicator(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden border-b border-gray-200 bg-gray-50 h-screen flex flex-col items-center justify-center
 ">
      {/* Background Blurs - Smoother animations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Top Right Blob */}
        <motion.div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0, backgroundColor: "rgba(134,239,172,0.2)" }}
          animate={{
            scale: [0.8, 1, 1.1, 1.05, 1],
            opacity: [0, 0.4, 0.7, 0.6, 0.5],
            backgroundColor: [
              "rgba(134,239,172,0.2)",
              "rgba(104,219,152,0.3)",
              "rgba(74,199,132,0.4)",
              "rgba(104,219,152,0.3)",
              "rgba(134,239,172,0.25)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        />

        {/* Bottom Left Blob */}
        <motion.div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          initial={{ scale: 0.9, opacity: 0, backgroundColor: "rgba(34,197,94,0.15)" }}
          animate={{
            scale: [0.9, 1.05, 1.2, 1.1, 1],
            opacity: [0, 0.3, 0.6, 0.5, 0.4],
            backgroundColor: [
              "rgba(34,197,94,0.15)",
              "rgba(29,177,84,0.25)",
              "rgba(24,157,74,0.35)",
              "rgba(29,177,84,0.25)",
              "rgba(34,197,94,0.2)",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: 3,
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        />

        {/* Additional subtle elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5, backgroundColor: "rgba(74,222,128,0.08)" }}
          animate={{
            scale: [0.5, 0.8, 1, 0.9, 0.8],
            opacity: [0, 0.1, 0.2, 0.15, 0.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.6, backgroundColor: "rgba(163,230,53,0.04)" }}
          animate={{
            scale: [0.6, 0.9, 1.1, 0.95, 0.8],
            opacity: [0, 0.05, 0.12, 0.08, 0.06],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex flex-col items-center justify-center h-full">

          {/* Heading */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2
                }
              }
            }}
            initial="hidden"
            animate={animationStage >= 1 ? "show" : "hidden"}
          >
            <h1 className="mb-10 z-40 text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-gray-700 text-center">
              Welcome to <span className="text-green-600">TechTribe</span>
            </h1>
          </motion.div>

          {/* Tagline + Description */}
          <AnimatePresence>
            {animationStage >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center mt-8"
              >
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xs sm:text-sm md:text-base text-gray-600 font-medium tracking-wide mb-4"
                >
                  Connect, Collaborate and Code
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-2xl mx-auto mb-8 text-gray-600 text-lg md:text-xl leading-relaxed"
                >
                  TechTribe is a community of builders, mentors, and learners. We ship projects, run events, and grow together.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center justify-center gap-4 flex-wrap"
                >
                  <motion.a
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center z-20 rounded-xl px-8 py-3 font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/25"
                  >
                    <Users className="h-5 w-5 mr-3" /> Join Us
                  </motion.a>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      as="a"
                      href="#projects"
                      borderRadius="0.75rem"
                      duration={4000}
                      containerClassName="z-20"
                      borderClassName="border border-green-400/30"
                      className="px-6 py-3 bg-white text-gray-700 font-semibold hover:bg-green-50 hover:text-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <Rocket className="h-5 w-5 mr-3" /> Explore
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>



      {/* Enhanced Creative Scroll Indicator */}
      <AnimatePresence>
        {!hideIndicator && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: animationStage >= 2 ? 1 : 0,
              y: animationStage >= 2 ? 0 : 20
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: animationStage >= 2 ? 1.5 : 0,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Floating particles */}
              <motion.div
                className="absolute w-1 h-1 bg-green-400 rounded-full -top-3 -left-2"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0
                }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-green-400 rounded-full -top-4 -right-2"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-green-400 rounded-full -bottom-3 -left-3"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Pulse rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-green-400/60 rounded-full"
                animate={{
                  width: [30, 80],
                  height: [30, 80],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-green-400/60 rounded-full"
                animate={{
                  width: [30, 80],
                  height: [30, 80],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-green-400/60 rounded-full"
                animate={{
                  width: [30, 80],
                  height: [30, 80],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
              />

              {/* Main scroll body */}
              <div className="relative w-7 h-12 border-2 border-green-500 rounded-full bg-green-500/5 backdrop-blur-lg shadow-lg shadow-green-500/30 overflow-hidden">
                {/* Glowing trail effect */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-gradient-to-b from-green-400 to-transparent"
                  animate={{
                    opacity: [0, 1, 0],
                    top: [6, 30]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Scrolling dot */}
                <motion.div
                  className="absolute w-1 h-2 bg-gradient-to-br from-green-400 to-green-600 rounded-full left-1/2 transform -translate-x-1/2 shadow-lg shadow-green-400/80"
                  animate={{
                    top: [8, 32],
                    opacity: [1, 0.7, 0],
                    scale: [1, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Text label */}
              <motion.div
                className="absolute -top-9 left-1/2 transform -translate-x-1/2 text-green-500 text-xs font-bold tracking-[0.15em] text-shadow"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                SCROLL
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundBeams />
    </div>
  );
}

export default Hero;
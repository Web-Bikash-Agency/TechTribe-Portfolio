import { useState, useEffect } from "react";
import { BackgroundBeams } from "../../animation/BackgroundBeams"
import { TypewriterEffect } from "../../animation/TypewriterEffect"
import { TextGenerateEffect } from "../../animation/TextGenerateEffect"
import {Users} from "lucide-react"
import {Rocket} from "lucide-react"
import { Button } from "../../animation/MovingBorder";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  {
    text: "Welcome",
  },
  {
    text: "to",
  },
  {
    text: "TechTribe",
    className: "text-green-600 dark:text-green-600",
  },
];

const sentence = "TechTribe is a community of builders, mentors, and learners. We ship projects, run events, and grow together."

const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Smoother timing sequence
    const timer1 = setTimeout(() => setAnimationStage(1), 300);
    const timer2 = setTimeout(() => setAnimationStage(2), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative overflow-hidden border-b border-gray-200 bg-gray-50 min-h-screen flex items-center">
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

      {/* Content - Restructured for better positioning */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex flex-col items-center justify-center h-full">

          {/* Main heading container */}
          <motion.div
            className="relative z-10"
            initial={{ y: 0 }}
            animate={{
              y: animationStage >= 2 ? -60 : 0
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <AnimatePresence>
              {animationStage >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-gray-900 text-center">
                    <TypewriterEffect words={words} />
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Content that slides up smoothly */}
          <AnimatePresence>
            {animationStage >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative z-10 text-center mt-8"
              >
                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xs sm:text-sm md:text-base text-gray-600 font-medium tracking-wide mb-4"
                >
                  Connect, Collaborate and Code
                </motion.p>

                {/* Main description */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="max-w-2xl mx-auto mb-8"
                >
                  <TextGenerateEffect
                    delay={1}
                    words={sentence}
                    filter={true}
                    duration={0.6}
                    className="text-gray-600 text-lg md:text-xl leading-relaxed"
                  />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex items-center justify-center gap-4 flex-wrap"
                >
                  <motion.a
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center z-20 rounded-xl px-8 py-3 font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/25"
                  >
                    <Users className="h-5 w-5 mr-3"/> Join Us
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button
                      as="a"
                      href="#projects"
                      borderRadius="0.75rem"
                      duration={4000}
                      containerClassName="z-20"
                      borderClassName="border border-green-400/30"
                      className="px-6 py-3 bg-white text-gray-700 font-semibold hover:bg-green-50 hover:text-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                     <Rocket className="h-5 w-5 mr-3"/> Explore
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator - Moved outside AnimatePresence for better positioning */}
      <motion.div 
        className="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: animationStage >= 2 ? 1 : 0,
          y: animationStage >= 2 ? 0 : 20
        }}
        transition={{ 
          duration: 0.5,
          delay: animationStage >= 2 ? 1.5 : 0
        }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
            {/* Pulse effect when dot hits bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-green-400/30 opacity-0 animate-ping" 
                 style={{ animationDelay: '1.1s', animationDuration: '2s' }}></div>
          </div>
        </div>
      </motion.div>
      
      <BackgroundBeams />
    </div>
  );
}

export default Hero;
"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Code2, 
  Terminal, 
  Braces, 
  Cpu, 
  Database, 
  GitBranch,
  Sparkles,
  Zap
} from "lucide-react"

interface WelcomeSplashProps {
  onComplete: () => void
  duration?: number
}

export default function TechWelcomeScreen({ onComplete, duration = 4000 }: WelcomeSplashProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showIcons, setShowIcons] = useState(false)

const handleDismiss = useCallback(() => {
    setIsVisible(false)
    setTimeout(onComplete, 600)
  },[onComplete])

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 600)
    const iconsTimer = setTimeout(() => setShowIcons(true), 1000)
    const dismissTimer = setTimeout(() => handleDismiss(), duration)

    const handleKeyPress = () => handleDismiss()
    const handleClick = () => handleDismiss()

    document.addEventListener("keydown", handleKeyPress)
    document.addEventListener("click", handleClick)

    return () => {
      clearTimeout(subtitleTimer)
      clearTimeout(iconsTimer)
      clearTimeout(dismissTimer)
      document.removeEventListener("keydown", handleKeyPress)
      document.removeEventListener("click", handleClick)
    }
  }, [duration, handleDismiss])

  

  // Tech icons configuration with positions
  const techIcons = [
    { Icon: Code2, delay: 0, x: -200, y: -150, rotation: -15, color: "text-blue-400" },
    { Icon: Terminal, delay: 0.1, x: 200, y: -120, rotation: 15, color: "text-green-400" },
    { Icon: Braces, delay: 0.2, x: -180, y: 100, rotation: -20, color: "text-purple-400" },
    { Icon: Cpu, delay: 0.3, x: 220, y: 120, rotation: 20, color: "text-yellow-400" },
    { Icon: Database, delay: 0.4, x: -250, y: -30, rotation: -10, color: "text-pink-400" },
    { Icon: GitBranch, delay: 0.5, x: 250, y: -10, rotation: 12, color: "text-cyan-400" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={handleDismiss}
          style={{
            // background: " linear-gradient(135deg, #f8fafc 0%, #d1fae5 50%, #10b981 100%)"
            background: " linear-gradient(135deg, #10b981 0%, #d1fae5 50%, #f8fafc 100%)"
          }}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px"
              }}
              animate={{
                backgroundPosition: ["0px 0px", "50px 50px"]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-cyan-500 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-emerald-500 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Floating tech icons */}
          <AnimatePresence>
            {showIcons && techIcons.map((item, index) => {
              const Icon = item.Icon
              return (
                <motion.div
                  key={index}
                  className={`absolute ${item.color} opacity-20`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: 0,
                    y: 0,
                    rotate: 0
                  }}
                  animate={{ 
                    opacity: [0, 0.4, 0.2],
                    scale: [0, 1.2, 1],
                    x: item.x,
                    y: item.y,
                    rotate: [0, item.rotation, item.rotation + 5, item.rotation]
                  }}
                  transition={{
                    duration: 1.2,
                    delay: item.delay,
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <Icon size={80} strokeWidth={1.5} />
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Main content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Decorative top element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-50"
                />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-2xl border border-emerald-400/30">
                  <Sparkles className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
            </motion.div>

            {/* Main Title with typing effect */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2"
              >
                <span className="text-gray-600">Welcome to</span>
                <motion.span
                  className="inline-block bg-gradient-to-r from-emerald-400  to-emerald-700 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  TechTribe
                </motion.span>
              </motion.h1>

              {/* Code bracket decoration */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center items-center gap-2 text-emerald-400/60 text-2xl md:text-3xl font-mono"
              >
                <span>{"<"}</span>
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-lg md:text-xl"
                >
                  /
                </motion.span>
                <span>{">"}</span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <AnimatePresence>
              {showSubtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-12"
                >
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-bold tracking-wide mb-4">
                    Where Developers{" "}
                    <span className="text-emerald-400 font-medium">Connect</span>
                    {" • "}
                    <span className="text-cyan-400 font-medium">Create</span>
                    {" • "}
                    <span className="text-purple-400 font-medium">Collaborate</span>
                  </p>
                  
                  {/* Tech stack badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mt-6"
                  >
                    {["JavaScript", "Python", "React", "Node.js", "AI/ML"].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                        className="px-4 py-2 bg-green-100 border border-emerald-400 rounded-full text-sm text-emerald-400 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="flex justify-center items-center space-x-3 mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-5 h-5 text-emerald-400" fill="currentColor" />
              </motion.div>
              
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <Zap className="w-5 h-5 text-cyan-400" fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* Skip hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <motion.p
                animate={{
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-slate-400 text-sm font-light flex items-center gap-2"
              >
                <span className="hidden sm:inline">Click anywhere or press any key to continue</span>
                <span className="sm:hidden">Tap to continue</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.p>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-2xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
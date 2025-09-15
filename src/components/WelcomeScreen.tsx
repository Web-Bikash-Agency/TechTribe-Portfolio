"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WelcomeSplashProps {
  onComplete: () => void
  duration?: number
}

export default function WelcomeScreen({ onComplete, duration = 3000 }: WelcomeSplashProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [showSubtitle, setShowSubtitle] = useState(false)

  useEffect(() => {
    // Show subtitle after main title animation
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true)
    }, 800)

    // Auto-dismiss after duration
    const dismissTimer = setTimeout(() => {
      handleDismiss()
    }, duration)

    // Skip on keypress
    const handleKeyPress = () => {
      handleDismiss()
    }

    // Skip on click
    const handleClick = () => {
      handleDismiss()
    }

    document.addEventListener("keydown", handleKeyPress)
    document.addEventListener("click", handleClick)

    return () => {
      clearTimeout(subtitleTimer)
      clearTimeout(dismissTimer)
      document.removeEventListener("keydown", handleKeyPress)
      document.removeEventListener("click", handleClick)
    }
  }, [duration])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(onComplete, 500) // Wait for fade out animation
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center gradient-bg cursor-pointer"
          onClick={handleDismiss}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 glow-text text-balance"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                TechTribe
              </span>
            </motion.h1>

            {/* Subtitle */}
            <AnimatePresence>
              {showSubtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-lg md:text-xl lg:text-2xl text-emerald-100 mb-12 font-light tracking-wide"
                >
                  Innovate • Connect • Grow
                </motion.p>
              )}
            </AnimatePresence>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="flex justify-center items-center space-x-2"
            >
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-emerald-400 rounded-full bounce-dot"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full bounce-dot"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full bounce-dot"></div>
              </div>
            </motion.div>

            {/* Skip hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2, duration: 0.4 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-200 text-sm font-light"
            >
              Click anywhere or press any key to continue
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

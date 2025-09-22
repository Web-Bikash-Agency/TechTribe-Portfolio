import { motion } from "framer-motion";
import { Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Container animation for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Card animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
    },
  },
};

// Icon floating animation
const iconVariants = {
  float: {
    y: [-8, 8, -8],
    rotate: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const highlights = [
  {
    icon: "💻",
    title: "Hackathons",
    desc: "Get help, give feedback, and discuss the latest tech trends with developers worldwide.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    icon: "🌐",
    title: "Open Source",
    desc: "Find team members for your next big idea or join existing projects to gain experience.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
  },
  {
    icon: "📚",
    title: "Learning Resources",
    desc: "Access curated tutorials, roadmaps, and workshops to advance your skills.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
  },
  {
    icon: "🚀",
    title: "Career Growth",
    desc: "Connect with companies looking for talented developers and find your dream job.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
  },
  {
    icon: "🤝",
    title: "Networking",
    desc: "Build lasting connections with like-minded professionals and industry leaders",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    icon: "🧑‍🏫",
    title: "Mentorship",
    desc: "One-on-one guidance from experienced developers to accelerate your growth",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
  },
];

const Highlights = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 border-b border-gray-200"
      id="highlights"
    >
      {/* Header Grid  */}
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold pb-1 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent"
          >
            Community Highlights
          </motion.h2>

          <motion.p 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 mt-3"
          >
            Discover the many ways TechTribe empowers developers to learn, grow, and make a difference
          </motion.p>
        </div>

        {/* Animated highlights grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((highlight, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 ${highlight.bgColor} cursor-pointer group`}>

                {/* Animated gradient overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Animated background particles */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  initial={{ backgroundPosition: "0% 0%" }}
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <CardHeader className="relative flex flex-col items-center z-10 space-y-6 p-0">
                  <div className="relative">
                    {/* Animated glow effect */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-full blur-lg opacity-30`}
                      whileHover={{ 
                        opacity: 0.6,
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5, // Stagger the glow animations
                      }}
                    />
                    
                    {/* Floating icon */}
                    <motion.div 
                      className="relative text-6xl mb-2 filter drop-shadow-sm"
                      variants={iconVariants}
                      animate="float"
                      transition={{ delay: idx * 0.2 }}
                    >
                      {highlight.icon}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.2 + idx * 0.1 }
                    }}
                    viewport={{ once: true }}
                  >
                    <CardTitle className={`text-xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent text-center`}>
                      {highlight.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4 + idx * 0.1 }
                  }}
                  viewport={{ once: true }}
                >
                  <CardContent className="mt-6 text-gray-700 text-sm text-center relative z-10 leading-relaxed">
                    {highlight.desc}
                  </CardContent>
                </motion.div>

                {/* Animated bottom border */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                  style={{ originX: 0 }}
                />

                {/* Pulse effect on hover */}
                <motion.div
                  className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${highlight.color} rounded-2xl opacity-0`}
                  whileHover={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.05, 1],
                    transition: { duration: 0.6 }
                  }}
                  style={{ 
                    background: `linear-gradient(135deg, transparent, transparent)`,
                    backgroundClip: 'padding-box',
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA button */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.8, duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="group inline-flex items-center gap-3 rounded-full border border-green-300 text-green-500 bg-green-50 px-7 py-4"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Join any or all of these activities — there's something for everyone!</span>
            <motion.div
              className="w-5 h-5"
              animate={{ y: [-3, 3, -3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Rocket className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CountUp from "../../animation/CountUp";

type StatColor = "green" | "blue" | "purple" | "orange";

const colorClasses: Record<StatColor, { text: string; card: string }> = {
  green: {
    text: "bg-gradient-to-r from-green-600 to-green-500",
    card: "bg-gradient-to-br from-white/80 to-green-50/60"
  },
  blue: {
    text: "bg-gradient-to-r from-blue-600 to-blue-500",
    card: "bg-gradient-to-br from-white/80 to-blue-50/60"
  },
  purple: {
    text: "bg-gradient-to-r from-purple-600 to-purple-500",
    card: "bg-gradient-to-br from-white/80 to-purple-50/60"
  },
  orange: {
    text: "bg-gradient-to-r from-orange-600 to-orange-500",
    card: "bg-gradient-to-br from-white/80 to-orange-50/60"
  }
};

// Animation variants for better performance and smoother transitions
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    }
  }
};

const cardHoverVariants: Variants = {
  initial: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.05,
    y: -8,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  }
};

const TechSupportCard = () => {
  const color: StatColor = "purple";

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={`text-center p-6 ${colorClasses[color].card} 
        rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <motion.div
        variants={cardHoverVariants}
        className="flex items-baseline justify-center text-3xl font-bold mb-2"
      >
        <CountUp
          to={24}
          className={`${colorClasses[color].text} bg-clip-text text-transparent`}
        />
        <span className={`${colorClasses[color].text} bg-clip-text text-transparent`}>/7</span>
      </motion.div>
      <div className="text-sm font-medium text-gray-700">Tech Support</div>
    </motion.div>
  );
};

const About = () => {
  const statsData = [
    { value: 100, label: "Community Members", color: "green" },
    { value: 10, label: "Professional Speakers", color: "blue" },
    { value: 5, label: "Events Completed", color: "orange" }
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-50 via-green-50 to-green-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
              bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 100,
              duration: 0.8
            }}
            viewport={{ once: true }}
          >
            About Our Community
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A vibrant space where curiosity meets collaboration
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                staggerChildren: 0.15,
                duration: 0.7
              }}
              viewport={{ once: true }}
            >
              {[
                "Welcome to our community—a vibrant space where curiosity meets collaboration! Developers, learners, and tech enthusiasts from around the world come together to share knowledge, solve challenges, and inspire each other.",
                "We believe in growth through collaboration: whether you're a beginner exploring new ideas, a student honing your skills, or a professional looking to give back, there's a place for you here.",
                "From hackathons and coding discussions to open-source contributions and learning sessions, our community thrives on creativity, support, and innovation."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {statsData.map((stat, index) => {
              const color = stat.color as StatColor;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  custom={index}
                  whileHover="hover"
                  className={`text-center p-6 ${colorClasses[color].card} 
                    rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <motion.div
                    className="flex items-baseline justify-center text-3xl font-bold mb-2"
                    variants={cardHoverVariants}
                  >
                    <CountUp
                      to={stat.value}
                      className={`${colorClasses[color].text} bg-clip-text text-transparent`}
                    />
                    <span className={`${colorClasses[color].text} bg-clip-text text-transparent ml-1 text-4xl`}>+</span>
                  </motion.div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </motion.div>
              );
            })}
            <TechSupportCard />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join us, connect with like-minded individuals, and be part of a journey where
            learning is continuous, collaboration is meaningful, and every member's contribution matters.
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.6 }
            }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 
              rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CountUp from "../../animation/CountUp";
import { Rocket } from "../../animation/Rocket";
import { Globe } from "../../animation/Globe";
import { HeartHandshake } from "../../animation/HeartHandshake"
import type { ReactElement } from "react";
import SectionHeader from "../ui/SectionHeader";
import { FaDiscord } from "react-icons/fa";

type StatColor = "green" | "blue" | "purple" | "orange" | "cyan";

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
  },
  cyan: {
    text: "bg-gradient-to-r from-teal-500 to-cyan-500",
    card: "bg-gradient-to-br from-white/80 to-cyan-50/60"
  }
};

const shadowColors: Record<StatColor, string> = {
  green: "shadow-green-400/20 hover:shadow-green-400/40",
  blue: "shadow-blue-400/20 hover:shadow-blue-400/40",
  purple: "shadow-purple-400/20 hover:shadow-purple-400/40",
  orange: "shadow-orange-400/20 hover:shadow-orange-400/40",
  cyan: "shadow-cyan-400/20 hover:shadow-cyan-400/40",
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="col-span-2 relative"
    >
      <motion.div
        whileHover={{ scale: 1.04, y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="relative overflow-hidden bg-gradient-to-br from-white/80 to-purple-50/60 
          backdrop-blur-xl rounded-3xl p-8 shadow-lg shadow-purple-300/30 
          hover:shadow-purple-400/40 transition-all duration-300"
      >
        {/* Animated scan line */}
        <motion.div
          className="absolute left-0 w-full h-1 bg-gradient-to-r 
            from-transparent via-purple-400 to-transparent opacity-50"
          animate={{ top: ["-20%", "120%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* Pulsing Dot */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
            />

            {/* Count */}
            <div className="flex items-baseline">
              <CountUp
                to={24}
                className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-500 
                  bg-clip-text text-transparent"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 
                bg-clip-text text-transparent ml-1">
                /7
              </span>
            </div>
          </div>

          <div className="text-gray-500 font-semibold text-lg tracking-wide">
            Tech Support Available
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeatureCard = ({ title, description, icon, delay }: { title: string; description: string; icon: ReactElement; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ x: 10 }}
      className="flex gap-4 group"
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50"
      >
        {icon}
      </motion.div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-500 mb-2 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const statsData = [
    { value: 100, label: "Community Members", color: "green" },
    { value: 20, label: "Mentors", color: "blue" },
    { value: 10, label: "Events Completed", color: "orange" },
    { value: 5, label: "Collaboration", color: "cyan" }
  ];
  const features = [
    {
      icon: <Rocket />,
      title: "Growth Through Collaboration",
      description: "Whether you're a beginner or professional, collaborate with developers worldwide to accelerate your learning journey."
    },
    {
      icon: <Globe />,
      title: "Innovation Hub",
      description: "From hackathons to open-source contributions, we create spaces where creative ideas transform into reality."
    },
    {
      icon: <HeartHandshake />,
      title: "Meaningful Connections",
      description: "Build lasting relationships with like-minded tech enthusiasts who share your passion for continuous learning."
    }
  ];

  return (
    <section
      id="about"
      style={{
        // background: "linear-gradient(145deg, #ffffff 0%, #e0f7eb 70%, #6ee7b7 100%)"
        background: "linear-gradient(145deg, #98f5cb  0%, #e0f7eb 30%, #ffffff 100%)"
      }}
      className="bg-gradient-to-br from-slate-50 via-green-50 to-green-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <SectionHeader
          badgeText="✨ Our Community"
          headingText="About TechTribe"
          descriptionText="A vibrant ecosystem of developers, learners, and innovators — united by a shared passion for technology, collaboration, and growth"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Grid*/}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-xl rounded-3xl p-8 border border-emerald-700/20 shadow-lg"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Welcome to a space where <span className="text-emerald-400 font-semibold">curiosity drives innovation</span> and <span className="text-emerald-400 font-semibold">collaboration fuels growth</span>. Connect with developers and tech enthusiasts from around the globe who share your passion for learning and creating.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    {...feature}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Grid - Right Grid*/}
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
                    rounded-2xl backdrop-blur-md shadow-lg ${shadowColors[color]} transition-shadow duration-300`}
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
         <motion.a
            href="https://discord.gg/nrZa4dYv"
            target="_blank"
            rel="noopener noreferrer"
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
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 
      text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 mx-auto"
            aria-label="Join our Discord community"
          >
            <FaDiscord className="w-5 h-5" />
            <span>Join Discord</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
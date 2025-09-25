import { motion } from "framer-motion";
import CountUp from "@/animation/CountUp";

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

const TechSupportCard = () => {
  const color: StatColor = "purple";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`text-center p-6 ${colorClasses[color].card} 
        rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-baseline justify-center text-3xl font-bold mb-2">
        <CountUp
          to={24}
          className={`${colorClasses[color].text} bg-clip-text text-transparent`}
        />
        <span className={`${colorClasses[color].text} bg-clip-text text-transparent`}>/7</span>
      </div>
      <div className="text-sm font-medium text-gray-700">Tech Support</div>
    </motion.div>
  );
};


const About = () => {
  const statsData = [
    { value: 100, label: "Community Members", color: "green" },
    { value: 10, label: "Professional Speakers", color: "blue" },
    // { value: 24, label: "Tech Support", color: "purple" },
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
            bg-clip-text text-transparent mb-6">
            About Our Community
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A vibrant space where curiosity meets collaboration
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Welcome to our community—a vibrant space where curiosity meets
                collaboration! Developers, learners, and tech enthusiasts from
                around the world come together to share knowledge, solve challenges,
                and inspire each other.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We believe in growth through collaboration: whether you're a
                beginner exploring new ideas, a student honing your skills, or a
                professional looking to give back, there's a place for you here.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                From hackathons and coding discussions to open-source contributions
                and learning sessions, our community thrives on creativity, support,
                and innovation.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {statsData.map((stat, index) => {
              const color = stat.color as StatColor;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5,  transition: { duration: 0.3, ease: "easeOut" as const }}}
                  
                  className={`text-center p-6 ${colorClasses[color].card} 
                    rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-baseline justify-center text-3xl font-bold mb-2">
                    <CountUp
                      to={stat.value}
                      className={`${colorClasses[color].text} bg-clip-text text-transparent`}
                    />
                    <span className={`${colorClasses[color].text} bg-clip-text text-transparent ml-1 text-4xl`}>+</span>
                  </div>


                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </motion.div>
              );
            })}
            <TechSupportCard />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join us, connect with like-minded individuals, and be part of a journey where
            learning is continuous, collaboration is meaningful, and every member's contribution matters.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 
              rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 ">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Welcome to <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">TechTribe</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm md:text-sm text-gray-600 max-w-2xl mx-auto"
          >
            Connect, Collaborate and Code
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            TechTribe is a community of builders, mentors, and learners. We ship
            projects, run events, and grow together.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              className="rounded-xl px-6 py-3 font-medium bg-green-600 text-white hover:bg-white hover:text-green-600 hover:inset-ring-2
    hover:inset-ring-green-600  transition-colors duration-300 cursor-pointer shadow-green/50  hover:shadow-lg "
            >
              Join Us
            </a>
            <a
              href="#projects"
              className="rounded-xl px-6 py-3 font-medium border border-gray-300 hover:border-green-600 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              Explore
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

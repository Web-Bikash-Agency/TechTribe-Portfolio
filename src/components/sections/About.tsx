import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 via-green-50 to-green-100 py-20 px-6 md:px-20">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-10 relative">

        {/* Founder Section */}
        <motion.div
          className="md:w-1/3 flex flex-col items-center justify-center mr-20 md:mr-15 relative"
          animate={{ y: [-5, 5, -5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >

          {/* Image Container */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10"
          >
            <img
              src="/mikey.jpg"
              alt="Founder of the Community"
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white relative z-20"
            />
          </motion.div>

          {/* Founder Details */}
          <div className="mt-8 relative z-10 text-center">
            <h3 className="text-2xl font-bold text-gray-800">Mikey Johnson</h3>
            <p className="text-green-600 font-medium">Founder & Visionary</p>
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 
              bg-clip-text text-transparent mb-6 pb-1"
          >
            About Our Community
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Welcome to our community—a vibrant space where curiosity meets collaboration! 
            Developers, learners, and tech enthusiasts from around the world come together 
            to share knowledge, solve challenges, and inspire each other.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            We believe in growth through collaboration: whether you’re a beginner exploring new ideas, 
            a student honing your skills, or a professional looking to give back, there’s a place for you here.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 mb-10"
          >
            From hackathons and coding discussions to open-source contributions and learning sessions, 
            our community thrives on creativity, support, and innovation. Join us, connect with like-minded individuals, 
            and be part of a journey where learning is continuous, collaboration is meaningful, and every member’s contribution matters.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;

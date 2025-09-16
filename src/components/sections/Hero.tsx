
import { BackgroundBeams } from "../../animation/BackgroundBeams"
import { TypewriterEffect } from "../../animation/TypewriterEffect"
import { TextGenerateEffect } from "../../animation/TextGenerateEffect"
import { Button } from "../../animation/MovingBorder";
// import { BackgroundLines } from "../../animation/BackgroundLines"
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
  return (
    <div className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
      {/* Background Blurs */}
     <div className="absolute inset-0 pointer-events-none" aria-hidden>
  {/* Top Right Blob */}
  <motion.div
    className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
    initial={{ scale: 1, opacity: 0.6, backgroundColor: "rgba(134,239,172,0.3)" }}
    animate={{
      scale: [1, 1.15, 1.25, 1.15, 1],
      opacity: [0.6, 0.8, 1, 0.8, 0.6],
      backgroundColor: [
        "rgba(134,239,172,0.3)",
        "rgba(104,219,152,0.4)",
        "rgba(74,199,132,0.5)",
        "rgba(104,219,152,0.4)",
        "rgba(134,239,172,0.3)",
      ],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],
    }}
  />

  {/* Bottom Left Blob */}
  <motion.div
    className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
    initial={{ scale: 1, opacity: 0.4, backgroundColor: "rgba(34,197,94,0.2)" }}
    animate={{
      scale: [1, 1.18, 1.3, 1.18, 1],
      opacity: [0.4, 0.6, 0.9, 0.6, 0.4],
      backgroundColor: [
        "rgba(34,197,94,0.2)",
        "rgba(29,177,84,0.3)",
        "rgba(24,157,74,0.4)",
        "rgba(29,177,84,0.3)",
        "rgba(34,197,94,0.2)",
      ],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
      times: [0, 0.25, 0.5, 0.75, 1],
    }}
  />

  {/* Additional subtle elements for depth */}
  <motion.div
    className="absolute top-1/4 left-1/4 h-48 w-48 rounded-full blur-3xl"
    initial={{ opacity: 0.1, backgroundColor: "rgba(74,222,128,0.1)" }}
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.1, 0.2, 0.1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
  />

  <motion.div
    className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full blur-3xl"
    initial={{ opacity: 0.05, backgroundColor: "rgba(163,230,53,0.05)" }}
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.05, 0.15, 0.05],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 3,
    }}
  />
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
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
<TypewriterEffect words={words}/>
            {/* Welcome to <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">TechTribe</span> */}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm md:text-sm text-gray-600 max-w-2xl mx-auto"
          >
            Connect, Collaborate and Code
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >

            <TextGenerateEffect delay={3} words={sentence} filter={true} duration={0.8} className="text-gray-600 text-xl"/>
            {/* TechTribe is a community of builders, mentors, and learners. We ship
            projects, run events, and grow together. */}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              className="z-20 rounded-xl px-6 py-3 font-medium bg-green-600 text-white hover:bg-white hover:text-green-600 hover:inset-ring-2
    hover:inset-ring-green-600  transition-colors duration-300 cursor-pointer shadow-green/50  hover:shadow-lg "
            >
              Join Us
            </a>
            <Button
  as="a"
  href="#projects"
  borderRadius="0.75rem"
  duration={4000}
  containerClassName="z-20"
  borderClassName="border border-green-400/20" 
  here
  className="px-4 py-2 bg-white text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition-colors duration-100"
>
  Explore
</Button>
          </motion.div>
        </motion.div>
      </div>
      <BackgroundBeams/>
    </div>

  );
}

export default Hero;

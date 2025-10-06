"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.3 } },
};

interface SectionHeaderProps {
  badgeText: string;
  headingText: string;
  descriptionText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({badgeText, headingText, descriptionText}) => {
  return (
    <motion.div
      variants={{}}
      className="text-center mb-20"
    >
      {/* Badge / Tagline */}
      {badgeText && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block"
        >
          <motion.span
            className="inline-block text-sm font-semibold text-green-600 bg-green-100 px-4 py-2 rounded-full mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {badgeText}
          </motion.span>
        </motion.div>
      )}

      {/* Main Heading */}
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
          {headingText}
        </span>
      </motion.h2>

      {/* Divider */}
      <motion.div
        className="flex justify-center gap-2 mb-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.div>

      {/* Description / Paragraph */}
      {descriptionText && (
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {descriptionText}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

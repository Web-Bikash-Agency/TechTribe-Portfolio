import { motion } from "framer-motion";
import { founder } from "../context/founder";
import { coreTeam } from "../context/coreTeam";
import { AnimatedTooltip } from "../ui/AnimatedTooltips";
import SectionHeader from "../ui/SectionHeader";
import Carousel from "../ui/Carousel";

const Members = () => {
 
  return (
    <section
      id="members"
      style={{
        background: "linear-gradient(145deg, #98f5cb  0%, #e0f7eb 30%, #ffffff 100%)"
      }}
      className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-green-50 to-green-100 relative"
    >
      {/* Heading */}
      <SectionHeader
        badgeText="✨ Our Team Members"
        headingText="Faces of TechTribe"
        descriptionText="Meet the core team — the passionate individuals who dedicate their time, energy, and creativity to keep the community growing and thriving"
      />

      {/* Interactive 3D Carousel */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
        viewport={{ once: true }}>
      <Carousel />

      </motion.div>

      {/* Core Team  */}
      <motion.div
        className="flex flex-row items-center justify-center mt-10 w-full"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-lg font-bold text-green-900 mr-5">Core Team:</span>
        <AnimatedTooltip items={coreTeam} />
      </motion.div>

      {/* Founders */}
      <motion.div
        className="flex flex-row items-center justify-center mt-10 w-full"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-lg font-bold text-green-900 mr-5">Mind Behind This:</span>
        <AnimatedTooltip items={founder} />
      </motion.div>
    </section>
  );
};

export default Members;
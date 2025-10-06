import { motion } from "framer-motion";
import { Code2, Globe, BookOpen, TrendingUp, Users, GraduationCap, Sparkles } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from "../ui/SectionHeader";

interface Highlight {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  color: string;
  glowColor: string;
  details: string;
}

interface FlipCardProps {
  highlight: Highlight;
  index: number;
}


const highlights = [
  {
    icon: Code2,
    title: "Hackathons",
    desc: "Get help, give feedback, and discuss the latest tech trends with developers worldwide.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
    details: "Participate in exciting coding challenges, win prizes, and showcase your skills",
  },
  {
    icon: Globe,
    title: "Open Source",
    desc: "Find team members for your next big idea or join existing projects to gain experience.",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
    details: "Contribute to real-world projects and build an impressive portfolio",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    desc: "Access curated tutorials, roadmaps, and workshops to advance your skills.",
    color: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.5)",
    details: "From beginner to advanced, find resources tailored to your learning journey",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Connect with companies looking for talented developers and find your dream job.",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.5)",
    details: "Get interview prep, resume reviews, and direct connections to hiring managers",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Build lasting connections with like-minded professionals and industry leaders",
    color: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.5)",
    details: "Join virtual meetups, coffee chats, and collaborative coding sessions",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    desc: "One-on-one guidance from experienced developers to accelerate your growth",
    color: "from-teal-500 to-cyan-500",
    glowColor: "rgba(20, 184, 166, 0.5)",
    details: "Get personalized advice, code reviews, and career guidance from industry experts",
  },
];

const FlipCard: React.FC<FlipCardProps> = ({ highlight, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = highlight.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-80 perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Animated gradient background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-10`}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${highlight.color} rounded-full opacity-20`}
                  animate={{
                    x: [Math.random() * 300, Math.random() * 300],
                    y: [Math.random() * 300, Math.random() * 300],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              {/* Icon with glow */}
              <motion.div
                className="relative mb-6"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-full blur-2xl`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className={`relative bg-gradient-to-br ${highlight.color} p-6 rounded-2xl shadow-lg`}>
                  <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </motion.div>

              <h3 className={`text-2xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-4`}>
                {highlight.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed px-4">
                {highlight.desc}
              </p>

              {/* Flip indicator */}
              <motion.div
                className="mt-6 flex items-center gap-2 text-xs text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Hover to explore more</span>
              </motion.div>
            </div>

            {/* Bottom shine effect */}
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color}`}
              animate={{
                scaleX: [0.5, 1, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className={`relative w-full h-full bg-gradient-to-br ${highlight.color} rounded-3xl p-8 shadow-2xl`}>
            {/* Animated mesh gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                 radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "50px 50px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <Icon className="w-16 h-16 mb-6 opacity-90" strokeWidth={1.5} />

              <h3 className="text-2xl font-bold mb-4">
                {highlight.title}
              </h3>

              <p className="text-white/90 text-base leading-relaxed px-4">
                {highlight.details}
              </p>

              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Highlights = () => {
  return (
    <section
      style={{
        background: "linear-gradient(145deg, #ffffff  0%, #e0f7eb 70%, #98f5cb 100%)"
      }}
      className="min-h-screen py-20 relative overflow-hidden"
      id="highlights"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
          <SectionHeader
            badgeText="✨ Empower Your Tech Journey"
            headingText="Why Join TechTribe?"
            descriptionText="Explore how TechTribe empowers passionate developers and learners to grow, collaborate, and create real impact in the tech world"
          />
        

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <FlipCard key={index} highlight={highlight} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-full px-8 py-5 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="w-6 h-6 text-green-500" />
            </motion.div>
            <span className="text-lg font-medium text-gray-700">
              Join any or all of these activities — there's something for everyone!
            </span>
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-green-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Highlights;
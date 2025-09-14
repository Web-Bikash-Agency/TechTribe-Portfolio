import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Variants } from "framer-motion";

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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1] as any
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  show: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const features = [
  {
    icon: "👥",
    title: "Hackathons",
    desc: "Get help, give feedback, and discuss the latest tech trends with developers worldwide.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    icon: "🤝",
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
];

const About = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6"
          >
            Community Highlights
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the endless possibilities within TechTribe's vibrant ecosystem
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 ${feature.bgColor} group cursor-pointer`}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="flex flex-col items-center space-y-6 p-0 relative z-10">
                  <motion.div 
                    variants={iconVariants}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="relative text-6xl mb-2 filter drop-shadow-sm">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  <CardTitle className={`text-xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent text-center`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="mt-6 text-gray-700 text-sm leading-relaxed text-center relative z-10">
                  {feature.desc}
                </CardContent>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Community
            <span className="ml-2 text-lg">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
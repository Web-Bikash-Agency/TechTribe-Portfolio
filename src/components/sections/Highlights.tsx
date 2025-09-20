import { motion } from "framer-motion";
import { Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const highlights = [
  {
    icon: "💻",
    title: "Hackathons",
    desc: "Get help, give feedback, and discuss the latest tech trends with developers worldwide.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    icon: "🌐",
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
  {
    icon: "🤝",
    title: "Networking",
    desc: "Build lasting connections with like-minded professionals and industry leaders",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    icon: "🧑‍🏫",
    title: "Mentorship",
    desc: "One-on-one guidance from experienced developers to accelerate your growth",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
  },
];


const Highlights = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 border-b border-gray-200"
      id="highlights"
    >

      {/* Header Grid  */}
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 variants={fadeIn}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold pb-1 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent" >Community Highlights</motion.h2>

          <motion.p variants={fadeIn}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-gray-600 mt-3">Discover the many ways TechTribe empowers developers to learn, grow, and make a difference</motion.p>
        </div>

        {/* highlights  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlights, idx) => (
            <div key={idx}>
              <Card className={`relative overflow-hidden rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500  border-0 ${highlights.bgColor} cursor-pointer group`}>

                {/* Gradient Overlay on hover*/}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative flex flex-col items-center z-10 space-y-6 p-0">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${highlights.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 `} />
                    <div className="relative text-6xl mb-2 filter drop-shadow-sm">{highlights.icon}</div>
                  </div>

                  <CardTitle className={`text-xl font-bold bg-gradient-to-r ${highlights.color} bg-clip-text text-transparent text-center`}>
                    {highlights.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-6 text-gray-700 text-sm text-center relative z-10 leading-relaxed">
                  {highlights.desc}
                </CardContent>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlights.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
  <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-4 text-white font-semibold shadow-lg hover:shadow-emerald-400/40 transition-all duration-300 hover:scale-105">
    <span>Join any or all of these activities — there’s something for everyone!</span>
    <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
  </button>
</div>

      </div>
    </section>
  )
}

export default Highlights
import { Twitter, Linkedin, Instagram, Zap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null> (null);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white py-16 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + About */}
          <div className="transform transition-all duration-300">
            <div className="flex items-center text-2xl font-bold mb-4 group"
            
            >
              
              <motion.div
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
                <span className="text-green-400 mr-2 inline-block group-hover:rotate-12 transition-transform duration-300">
                  <Zap className="w-7 h-7 mr-4" />
                </span>

              </motion.div>
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                TechTribe
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Building a global ecosystem for developers to learn, collaborate, and grow together.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/techtribeicvp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/techtribeicvp?igsh=am9sb3VteWhxdnJj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/TechTribeIcvp?t=D2IeqA1ECD2Lw71l_W7Iww&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X (Twitter)"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 group">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover:w-20 transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#" },
                { name: "Highlight", href: "#" },
                { name: "Members", href: "#" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`quick-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className={`inline-block w-0 h-0.5 bg-green-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300 ${hoveredLink === `quick-${idx}` ? 'w-2 mr-2' : ''}`}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 group">
              <span className="relative z-10">Resources</span>
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover:w-20 transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Documentation", href: "#" },
                { name: "Tutorials", href: "#" },
                { name: "Roadmaps", href: "#" },
                { name: "Workshops", href: "#" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`resource-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className={`inline-block w-0 h-0.5 bg-green-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300 ${hoveredLink === `resource-${idx}` ? 'w-2 mr-2' : ''}`}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 group">
              <span className="relative z-10">Support</span>
              <span className="absolute left-0 bottom-0 w-10 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover:w-20 transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Help Center", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Contact Us", href: "#" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`support-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className={`inline-block w-0 h-0.5 bg-green-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300 ${hoveredLink === `support-${idx}` ? 'w-2 mr-2' : ''}`}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright with gradient border */}
        <div className="relative pt-8 text-center">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-green-400 font-semibold">TechTribe</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
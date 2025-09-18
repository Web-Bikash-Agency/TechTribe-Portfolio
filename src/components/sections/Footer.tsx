import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + About */}
          <div>
            <div className="flex items-center text-2xl font-bold mb-4">
              <span className="text-yellow-500 mr-2">⚡</span> TechTribe
            </div>
            <p className="text-gray-400 text-sm">
              Building a global ecosystem for developers to learn, collaborate, and grow
              together.
            </p>
            <div className="flex gap-3 mt-5">
              
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition transform hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-black transition transform hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-yellow-500 transition">About Us</a></li>
              <li><a href="#members" className="hover:text-yellow-500 transition">Members</a></li>
              <li><a href="#features" className="hover:text-yellow-500 transition">Features</a></li>
              <li><a href="#jobs" className="hover:text-yellow-500 transition">Jobs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-yellow-500">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Tutorials</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Roadmaps</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Workshops</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-yellow-500">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TechTribe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}



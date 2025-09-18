import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { motion } from "framer-motion"

const fadeInLeft = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
  ];

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`w-full border-b border-gray-200 bg-white sticky top-0 z-50 shadow-b shadow-green-300/30 ${
        isScrolled ? "shadow-md shadow-green-300/30" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="/"
          variants={fadeInLeft}
          initial="hidden"
          animate="show"
          className="text-3xl font-bold text-green-600">
          {`</>`} TechTribe
        </motion.a>

        {/* Desktop Nav */}
        <motion.div className="hidden md:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              variants={fadeInRight}
              initial="hidden"
              animate="show"
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            className="hidden md:flex"
          >
            <Button
              className=" bg-green-600
              rounded-2xl 
              px-6 py-2 
              text-white 
              transition-all 
              duration-300 
              hover:bg-white 
              hover:text-green-600 
              hover:scale-y-105
              hover:inset-ring-2
              hover:inset-ring-green-600 
              hover:shadow-green/50  hover:shadow-lg cursor-pointer"
            >
              Join Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav  */}
      {isOpen && (
        <div className="md:hidden bg-white border-t boder-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                variants={fadeInRight}
                initial="hidden"
                animate="show"
                href={link.href}
                key={link.name}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <Button variant="outline" className="w-full">
              Join Us
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

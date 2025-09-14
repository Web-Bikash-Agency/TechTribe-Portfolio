import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"

const Navbar = () => {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Members", href: "#members" },
    { name: "Testimonials", href: "#Testimonials" }
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full border-b border-gray-200 bg-white sticky top-0 z-50 shadow-b shadow-green-300/30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-green-600">
          {`</>`} TechTribe
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="hidden md:flex">
            <Button className=" bg-green-600
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
              hover:shadow-green/50  hover:shadow-lg cursor-pointer">Join Us</Button>
          </div>
        </div>

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
              <a href={link.href}
                key={link.name}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >{link.name}</a>
            ))}
            <Button variant="outline" className="w-full">Join Us</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
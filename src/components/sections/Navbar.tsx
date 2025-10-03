"use client";
import { useState, useEffect } from "react";
import {
  Navbar as BaseNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Highlights", link: "#highlights" },
    { name: "Members", link: "#members" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "/" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled
          ? ""
          : "bg-transparent"
        }`}
    >
      <BaseNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navLinks}
            onItemClick={(item) => scrollToSection(item.link)}
          />
          <a className="flex items-center gap-4 "
            href=" https://chat.whatsapp.com/Kv9PQO8HwQlAJnlU0W9pIP?mode=ems_wa_t"
            target="_blank"
            rel="noopener noreferrer">
            <NavbarButton variant="primary">Join Us</NavbarButton>
          </a>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navLinks.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.link);
                }}
                className="block w-full rounded-md px-4 py-2 text-lg text-neutral-600 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton variant="primary" className="w-full">
                Join Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </BaseNavbar>
    </div>
  );
};

export default Navbar;

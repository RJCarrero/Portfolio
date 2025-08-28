"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useNavigation } from "@/hooks/use-navigation"
import { SITE_CONFIG } from "@/lib/constants"
import { Mail, Linkedin, Download } from "lucide-react"

export function Header() {
  const { isMenuOpen, toggleMenu, closeMenu, isActiveRoute, navItems } = useNavigation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-orange-400/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-white hover:text-orange-400 transition-colors duration-300 font-medium",
                  isActiveRoute(item.href) && "text-orange-400 border-b-2 border-orange-400 pb-1",
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-orange-400/30">
              <Link
                href="/contact"
                className="text-white hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-400/10 rounded-full"
                aria-label="Go to contact page"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rafael-carrero-9749a0348"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-400/10 rounded-full"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </Link>
            {/* pdf button for resume */}
              <Link
                href="./Itresume.pdf"
                download
                className="text-white hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-400/10 rounded-full"
                aria-label="Download Resume PDF"
              >
              <Download size= {20} />
              </Link>
            {/* pdf button for resume */}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-orange-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1",
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-current transition-all duration-300",
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-orange-400/20 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-white hover:text-orange-400 transition-colors duration-300 font-medium py-2",
                    isActiveRoute(item.href) && "text-orange-400",
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-orange-400/20">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-white hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-400/10 rounded-full"
                  aria-label="Go to contact page"
                >
                  <Mail size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rafael-carrero-9749a0348"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-white hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-400/10 rounded-full"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </Link>
              {/* mobile pdf button */}
                <Link
                  href="/ITresume.pdf"
                  download
                  onClick={closeMenu}
                  className="text-white hover:text-orange-400 transition-colors duration-300 p-2 hover:bg-orange-400/10 rounded-full"
                  aria-label="Download Resume PDF"
                    >
                <Download size={20} />
                </Link>
              {/* mobile pdf button */}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

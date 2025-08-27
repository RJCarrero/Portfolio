import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-orange-400/20 py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-white font-bold mb-4">Rafael J Carrero</h3>
            <p className="text-gray-400 text-sm">Network IT Professional</p>
            <p className="text-gray-400 text-sm">Student, IT Technician, and Network Enthusiast</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                About Me
              </Link>
              <Link href="/skills" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Skills
              </Link>
              <Link href="/resume" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Resume
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                rafaeljcarrero@outlook.com
              </Link>
              <a
                href="https://www.linkedin.com/in/rafael-carrero-9749a0348"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="text-center">
            <p className="text-gray-300 text-sm">© 2025 Rafael J Carrero. Network IT Professional.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const SITE_CONFIG = {
  name: "Rafael J Carrero",
  title: "Rafael J Carrero - Network IT Portfolio",
  description: "Student, IT Technician, and Network Enthusiast specializing in network engineering and security",
  author: {
    name: "Rafael J Carrero",
    title: "Student, IT Technician, and Network Enthusiast",
    email: "rafaeljcarrero@outlook.com",
    phone: "(555) 123-4567",
    location: "Clarksville, TN",
  },
} as const

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const

export const THEME_COLORS = {
  primary: "orange-400",
  primaryHover: "orange-300",
  secondary: "gray-400",
  secondaryHover: "gray-300",
  background: "black",
  text: "white",
  textSecondary: "gray-200",
} as const

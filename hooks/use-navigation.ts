"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { NAVIGATION_ITEMS } from "@/lib/constants"

export function useNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const isActiveRoute = (href: string) => pathname === href

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    isActiveRoute,
    navItems: NAVIGATION_ITEMS,
  }
}

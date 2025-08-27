import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export function NavigationButton({ href, children, variant = "primary", className }: NavigationButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-8 py-3 text-lg font-medium transition-all duration-300 rounded-full border-2",
        variant === "primary" &&
          "border-orange-400 text-white hover:bg-orange-400/20 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-400/25",
        variant === "secondary" &&
          "border-gray-400 text-gray-200 hover:bg-gray-400/20 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-400/25",
        "backdrop-blur-sm bg-black/20",
        className,
      )}
    >
      {children}
    </Link>
  )
}

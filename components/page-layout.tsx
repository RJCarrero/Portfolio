import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className={`pt-20 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}

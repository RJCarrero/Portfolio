import { NavigationButton } from "@/components/navigation-button"
import { PageLayout } from "@/components/page-layout"
import Image from "next/image"

export default function HomePage() {
  return (
    <PageLayout>
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/server-room-bg.png" alt="Server room background" fill className="object-cover" priority />
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl shadow-orange-400/20 border-4 border-orange-400/30">
            <Image
              src="/profile-photo.jpeg"
              alt="Rafael J Carrero profile photo"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 text-balance drop-shadow-2xl">
            Rafael J Carrero
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium drop-shadow-lg">
            Student, IT Technician, and Network Enthusiast
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <NavigationButton href="/skills">Skills</NavigationButton>
            <NavigationButton href="/about">About Me</NavigationButton>
            <NavigationButton href="/resume">Resume</NavigationButton>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

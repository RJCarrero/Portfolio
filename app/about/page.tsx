import { PageLayout } from "@/components/page-layout"
import { NavigationButton } from "@/components/navigation-button"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">About Me</h1>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Personal Info */}
              <div className="space-y-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-4">Who I Am</h2>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Hi, I'm Rafael Carrero! I'm a full-time student with a strong passion for IT, focusing on network
                    engineering and security. Over the past year, I've gained hands-on experience configuring Cisco
                    switch VLANs, setting up router ACLs, troubleshooting connectivity, and exploring security hardening
                    techniques. I hold a CompTIA Network+ certification and love building labs where I can learn by
                    doing.
                  </p>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Before transitioning into tech, I spent five years as a manager in the food service industry, where
                    I developed leadership, problem-solving, and teamwork skills that I now bring into my IT journey. My
                    goal is to grow into a career in networking and security, combining my technical skills with
                    real-world leadership experience to make an impact in the field.
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    I'm always excited to connect with others who share a passion for IT, networking, and security. If
                    you're looking to collaborate, share knowledge, or just nerd out about tech, I'm all in. Let's
                    build, learn, and grow together!
                  </p>
                </div>

                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-4">My Passion</h2>
                  <p className="text-gray-200 leading-relaxed">
                    I'm fascinated by the intricate world of network infrastructure and how it enables seamless
                    communication across the globe. From configuring routers and switches to implementing security
                    protocols, I find joy in creating robust, efficient network solutions.
                  </p>
                </div>
              </div>

              {/* Right Column - Professional Focus */}
              <div className="space-y-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-4">Professional Focus</h2>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Network Infrastructure Design & Implementation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      System Administration & Troubleshooting
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Cybersecurity & Network Protection
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Hardware Configuration & Maintenance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Technical Documentation & Training
                    </li>
                  </ul>
                </div>

                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
                  <h2 className="text-2xl font-bold text-orange-400 mb-4">Goals & Vision</h2>
                  <p className="text-gray-200 leading-relaxed">
                    My goal is to become a leading network engineer who bridges the gap between cutting-edge technology
                    and practical business solutions. I'm committed to continuous learning and staying ahead of industry
                    trends to deliver innovative IT solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-gray-300 mb-8 text-lg">Ready to collaborate on your next IT project?</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <NavigationButton href="/contact">Get In Touch</NavigationButton>
                <NavigationButton href="/resume" variant="secondary">
                  View Resume
                </NavigationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

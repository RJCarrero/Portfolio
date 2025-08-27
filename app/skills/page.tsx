import { PageLayout } from "@/components/page-layout"
import { NavigationButton } from "@/components/navigation-button"

interface SkillProps {
  name: string
  level: number
  category: string
}

function SkillBar({ name, level, category }: SkillProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-orange-400 text-sm font-bold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3 backdrop-blur-sm">
        <div
          className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-orange-400/30"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: SkillProps[]
  icon: string
}

function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20">
      <div className="flex items-center mb-6">
        <div className="text-3xl mr-4">{icon}</div>
        <h2 className="text-2xl font-bold text-orange-400">{title}</h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  const networkingSkills = [
    { name: "Network Configuration", level: 70, category: "networking" },
    { name: "Router & Switch Management", level: 70, category: "networking" },
    { name: "TCP/IP & Subnetting", level: 65, category: "networking" },
    { name: "VLAN Configuration", level: 50, category: "networking" },
    { name: "Network Troubleshooting", level: 45, category: "networking" },
  ]

  const securitySkills = [
    { name: "Network Security Protocols", level: 50, category: "security" },
    { name: "Firewall Configuration", level: 20, category: "security" },
    { name: "Vulnerability Assessment", level: 15, category: "security" },
    { name: "Security Policy Implementation", level: 10, category: "security" },
    { name: "Incident Response", level: 20, category: "security" },
  ]

  const technicalSkills = [
    { name: "Hardware Troubleshooting", level: 40, category: "technical" },
    { name: "Cable Management & Installation", level: 40, category: "technical" },
    { name: "Network Documentation", level: 10, category: "technical" },
    { name: "Technical Support", level: 25, category: "technical" },
    { name: "Project Management", level: 60, category: "technical" },
  ]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Technical Skills</h1>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                A comprehensive overview of my technical expertise in networking, cybersecurity, and IT support.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              <SkillCategory title="Networking" icon="🌐" skills={networkingSkills} />
              <SkillCategory title="Cybersecurity" icon="🔒" skills={securitySkills} />
              <SkillCategory title="Technical Support" icon="🔧" skills={technicalSkills} />
            </div>

            {/* Certifications Section */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-16">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 text-center">Certifications & Learning</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">CompTIA Network+</h3>
                  <p className="text-green-400 text-sm font-medium">Certified</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">Cisco CCNA</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">CompTIA Security+</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">CompTIA Project+</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">CompTIA Cloud+</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">CompTIA A+</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">LPI Linux Essentials</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">ITIL Foundations</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">Cisco DevNet Associate</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-600/30">
                  <h3 className="text-white font-semibold mb-2">Cisco CCSA</h3>
                  <p className="text-orange-400 text-sm">Studying</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-300 mb-8 text-lg">Interested in my technical expertise?</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <NavigationButton href="/resume">View Full Resume</NavigationButton>
                <NavigationButton href="/contact" variant="secondary">
                  Discuss a Project
                </NavigationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

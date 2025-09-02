import { PageLayout } from "@/components/page-layout"
import { NavigationButton } from "@/components/navigation-button"
import { DownloadButton } from "@/components/DownloadButton"

interface ExperienceItemProps {
  title: string
  company: string
  location: string
  duration: string
  responsibilities: string[]
}

function ExperienceItem({ title, company, location, duration, responsibilities }: ExperienceItemProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-orange-400 font-medium">{duration}</span>
      </div>
      <div className="text-gray-300 mb-3">
        <span className="font-medium">{company}</span> • {location}
      </div>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-200 flex items-start">
            <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface EducationItemProps {
  degree: string
  institution: string
  location: string
  duration: string
  details?: string[]
}

function EducationItem({ degree, institution, location, duration, details }: EducationItemProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-bold text-white">{degree}</h3>
        <span className="text-orange-400 font-medium">{duration}</span>
      </div>
      <div className="text-gray-300 mb-3">
        <span className="font-medium">{institution}</span> • {location}
      </div>
      {details && (
        <ul className="space-y-1">
          {details.map((item, index) => (
            <li key={index} className="text-gray-200 flex items-start">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function ResumePage() {
  const experiences = [
    {
      title: "Project Manager",
      company: "Banyan Labs",
      location: "Clarksville, TN",
      duration: "Aug '25 - Present",
      responsibilities: [
        "Clearly establish the project's objectives, deliverables, and success criteria with stakeholders",
        "Break down work into tasks, assign responsibilities, and create timelines using Agile, Waterfall, or hybrid methods",
        "Allocate people, tools, and budget effectively while monitoring for risks of overallocation or overspending",
        "Track milestones, manage risks/issues, adjust plans as needed, and keep everything aligned with the project's goals",
        "Provide regular updates, manage expectations, and ensure alignment between team members, leadership, and clients",
      ],
    },
    {
      title: "Line Cook/Prep Cook",
      company: "Hardees",
      location: "Clarksville, TN",
      duration: "Apr '24 - Present",
      responsibilities: [
        "Efficiently prep and cook menu items in a high-volume, fast-paced environment",
        "Work assigned station following established recipes and portion control guidelines",
        "Maintain food safety procedures and speed of service requirements",
        "Complete daily assigned cleaning tasks and maintain cleanliness in work station",
        "Deliver consistent, quality items quickly under pressure",
      ],
    },
    {
      title: "Shift Lead",
      company: "Jack In The Box",
      location: "Clarksville, TN",
      duration: "Apr '20 - Mar '23",
      responsibilities: [
        "Led a team of 8-12 employees in a fast-paced environment, consistently achieving a 95%+ customer satisfaction rating",
        "Managed time effectively by prioritizing tasks, resulting in a 20% reduction in wait times during peak hours",
        "Handled cash and processed transactions accurately, managing up to $5,000 in daily revenue with 100% accuracy rate",
        "Trained and mentored new team members on operational processes, improving team efficiency and reducing training time by 15%",
        "Monitored inventory, ensured food safety compliance, and managed cash handling procedures",
      ],
    },
    {
      title: "Shift Lead",
      company: "Papa John's",
      location: "Clarksville, TN",
      duration: "Jun '17 - Dec '19",
      responsibilities: [
        "Led a team of 8-12 employees ensuring efficient operations and meeting daily service targets",
        "Managed and trained a team of 5-15 staff, delegated tasks, and handled customer inquiries",
        "Maintained efficient workflows and resolved operational challenges in real-time",
        "Trained and mentored new team members, improving team efficiency and reducing training time by 15%",
        "Ensured restaurant met performance goals while maintaining high customer satisfaction levels",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Network Engineering and Security",
      institution: "Western Governor's University",
      location: "Clarksville, TN",
      duration: "Sep '25 - Expected 2028",
      details: [
        "Currently in the enrollment process - 36 month degree program",
        "Included Certifications: CCNA, CCST, Cisco DevNet Associate, CompTIA A+, CompTIA Project+, CompTIA Cloud+, ITIL Foundation, and LPI Linux Essentials",
        "Focus on Network Engineering and Cybersecurity",
      ],
    },
  ]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            {/* <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Resume</h1>
              <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-300 text-lg">Network IT Professional & Student</p>
            </div> */}
            <div className="mb-16">
  <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center md:items-center md:gap-6">
    <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">Resume</h1>
    <DownloadButton file="/Network_IT.pdf" label="Download .pdf" className="mt-2 md:mt-0" />
  </div>
  <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mb-6 mt-6"></div>
  <p className="text-gray-300 text-lg text-center">Network IT Professional & Student</p>
</div>

            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-200 mb-2">
                    <span className="font-medium text-white">Email:</span> rafaeljcarrero@outlook.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-200 mb-2">
                    <span className="font-medium text-white">Location:</span> Clarksville, TN
                  </p>
                  <p className="text-gray-200 mb-2">
                    <span className="font-medium text-white">LinkedIn:</span> <a className="text-gray-200 hover:text-orange-400 transition-colors"
                    
                href="https://www.linkedin.com/in/rafael-carrero-9749a0348"
                target="_blank"
                rel="noopener noreferrer"
                >Linkedin.com/in/rafael-carrero-9749a0348</a>

  {/* added anchor tag with link for linkedin in <p> tag. Original was line 162 Linkedin:</span>linkedin.com/in/rafael-carrero-9749a0348 */}
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Professional Summary</h2>
              <p className="text-gray-200 leading-relaxed">
                Customer-focused and technically driven aspiring Network Technician transitioning from four years of
                fast-paced management in the food service industry. Experienced in troubleshooting POS systems, managing
                teams, and resolving issues quickly under pressure—skills that directly translate to IT support roles.
                CompTIA Network+ certified, with a growing foundation in networking, Linux systems, and cloud computing,
                and currently learning Python to strengthen problem-solving through automation. Known for strong
                communication, adaptability, and eagerness to learn, with a proven ability to stay calm under pressure
                and provide effective, people-centered solutions in dynamic environments.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-8">Professional Experience</h2>
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </div>

            {/* Education */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-8">Education</h2>
              {education.map((edu, index) => (
                <EducationItem key={index} {...edu} />
              ))}
            </div>

            {/* Skills */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Interpersonal Skills</h3>
                  <ul className="space-y-1 text-gray-200 text-sm">
                    <li>• Problem Solving</li>
                    <li>• Team Leadership</li>
                    <li>• Customer Service</li>
                    <li>• Time Management</li>
                    <li>• Adaptability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Technical Proficiency</h3>
                  <ul className="space-y-1 text-gray-200 text-sm">
                    <li>• Basic Troubleshooting</li>
                    <li>• System Monitoring and Maintenance</li>
                    <li>• Data Management</li>
                    <li>• Security Awareness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Volunteering</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Team Member - Screaming Eagles Tres Dias</h3>
                  <p className="text-gray-300 text-sm mb-2">Tennessee</p>
                  <p className="text-gray-200 text-sm">
                    Serve for three days every six months in an organized program centered on the followings and
                    teachings of Jesus Christ. Provide candidates with a life-changing weekend experience, ensuring they
                    are housed, fed, and treated with love and respect.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Team Member - Loaves and Fishes</h3>
                  <p className="text-gray-300 text-sm mb-2">Clarksville, TN</p>
                  <p className="text-gray-200 text-sm">Community volunteer feeding and sheltering people in need.</p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 mb-12">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">Core Competencies</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Networking</h3>
                  <ul className="space-y-1 text-gray-200 text-sm">
                    <li>• TCP/IP & Subnetting</li>
                    <li>• Router & Switch Config</li>
                    <li>• VLAN Management</li>
                    <li>• Network Troubleshooting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Systems</h3>
                  <ul className="space-y-1 text-gray-200 text-sm">
                    <li>• File Management</li>
                    <li>• Device Management</li>
                    <li>• Virtualization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Security</h3>
                  <ul className="space-y-1 text-gray-200 text-sm">
                    <li>• Network Security</li>
                    <li>• Firewall Configuration</li>
                    <li>• Vulnerability Assessment</li>
                    <li>• Security Protocols</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-300 mb-8 text-lg">Ready to discuss opportunities?</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <NavigationButton href="/contact">Contact Me</NavigationButton>
                <NavigationButton href="/skills" variant="secondary">
                  View Skills
                </NavigationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

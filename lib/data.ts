import type { SkillCategory, WorkExperience, Education, Certification } from "./types"

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Networking",
    skills: [
      { name: "Cisco Switch VLANs", level: 85, description: "Configuration and troubleshooting" },
      { name: "Router ACLs", level: 80, description: "Access control implementation" },
      { name: "Network Troubleshooting", level: 90, description: "Connectivity and performance issues" },
      { name: "TCP/IP", level: 85, description: "Protocol understanding and implementation" },
      { name: "Subnetting", level: 80, description: "Network segmentation and planning" },
    ],
  },
  {
    name: "Systems Administration",
    skills: [
      { name: "Windows Server", level: 75, description: "Server management and configuration" },
      { name: "Linux Administration", level: 70, description: "Command line and system management" },
      { name: "Active Directory", level: 65, description: "User and group management" },
      { name: "Virtualization", level: 70, description: "VMware and Hyper-V" },
    ],
  },
  {
    name: "Cybersecurity",
    skills: [
      { name: "Security Hardening", level: 75, description: "System and network security" },
      { name: "Vulnerability Assessment", level: 65, description: "Security testing and analysis" },
      { name: "Incident Response", level: 60, description: "Security incident handling" },
      { name: "Risk Assessment", level: 65, description: "Security risk evaluation" },
    ],
  },
  {
    name: "Technical Support",
    skills: [
      { name: "Hardware Troubleshooting", level: 85, description: "PC and server hardware" },
      { name: "Software Installation", level: 90, description: "Application deployment and configuration" },
      { name: "Customer Service", level: 95, description: "Technical support and communication" },
      { name: "Documentation", level: 80, description: "Technical writing and procedures" },
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Food Service Manager",
    company: "Restaurant Chain",
    period: "2018 - 2023",
    description: [
      "Led teams of 15+ employees in fast-paced environment",
      "Developed problem-solving skills through daily operational challenges",
      "Managed inventory systems and point-of-sale technology",
      "Trained staff on new systems and procedures",
      "Maintained high customer satisfaction through effective communication",
    ],
  },
]

export const EDUCATION: Education[] = [
  {
    degree: "Information Technology",
    institution: "Local Community College",
    period: "2023 - Present",
    details: [
      "Focus on Network Engineering and Cybersecurity",
      "Hands-on lab experience with Cisco equipment",
      "Coursework in network protocols, security, and system administration",
    ],
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    date: "2024",
    credentialId: "COMP001234567890",
  },
]

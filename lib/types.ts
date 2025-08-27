export interface NavigationItem {
  href: string
  label: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number
  description?: string
}

export interface WorkExperience {
  title: string
  company: string
  period: string
  description: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  details?: string[]
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
}

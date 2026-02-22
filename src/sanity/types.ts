export interface SiteSettings {
  ownerName: string
  ownerTitle: string
  githubUrl: string
  linkedinUrl: string
}

export interface HeroData {
  bio: string
}

export interface AboutData {
  paragraph1: string
  paragraph2: string
  skills: string[]
}

export interface Project {
  _id: string
  title: string
  description: string
  tags: string[]
  link: string
  order: number
}

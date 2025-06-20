export interface Link {
  href: string,
  name: string
}

export interface Project {
  title: string,
  desc: string,
  stack: Array<string>,
  link: string,
  urls: Array<URL>,
  github: string
}

export interface URL {
  title: string,
  link: string
}

export interface Data {
  languages: Languages,
  stack: Stack,
}

interface Languages {
  spanish: LanguageData,
  english: LanguageData
}

export interface Stack {
  db: Array<string>,
  languages: Array<string>,
  tech: Array<string>,
  frameworks: Array<string>
}

interface LanguageData {
  navbar: Navbar,
  homeDescription: Description,
  aboutDescription: Description,
  footerDescription: Description,
  projects: Array<Project>
}

export interface Description {
  desc: string,
  span?: string
}

interface Navbar {
  links: Array<Link>
}


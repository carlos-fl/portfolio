export interface Link {
  href: string,
  name: string
}

export interface Project {
  title: string,
  date: string
  desc: string,
  stack: Array<string>,
  image: string,
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
  highlights: Highlight
}

export interface Highlight {
  home: Array<string>,
  about: Array<string>,
}

interface Languages {
  spanish: LanguageData,
  english: LanguageData
}

export interface Stack {
  db: Array<Tech>,
  languages: Array<Tech>,
  tech: Array<Tech>,
  frameworks: Array<Tech>
}

export interface Tech {
  name: string,
  icon: string
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


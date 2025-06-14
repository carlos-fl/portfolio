import "../../styles/global.css"
import { ProjectCard } from "./ProjectCard"
import { Carousel } from "./Carousel"
import type { Project } from "../../interfaces/interfaces"

export function Projects({ projects }: { projects: Array<Project> }) {
  const windowWidth: number = window.innerWidth

  return (
      windowWidth > 700 ? <Carousel projects={ projects } /> : <ProjectCard projects={ projects } />
  )
}

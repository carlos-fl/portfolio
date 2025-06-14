import "../../styles/global.css"
import { ProjectCard } from "./ProjectCard"
import { Carousel } from "./Carousel"
import type { Project } from "../../interfaces/interfaces"

export function Projects({ projects }: { projects: Array<Project> }) {
  const windowWidth: number = window.innerWidth
  const MAX_WIDTH = 600

  return (
      windowWidth > MAX_WIDTH ? <Carousel projects={ projects } /> : <ProjectCard projects={ projects } />
  )
}

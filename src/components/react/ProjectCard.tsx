import type { Project, URL } from "../../interfaces/interfaces"
import "../../styles/global.css"
import { useState } from "react"

export function ProjectCard({ projects }: { projects: Array<Project> }) {
  const MAX_WIDTH = 1024
  const WINDOW_WIDTH: number = window.innerWidth
  const projectLinkNameDetail = window.location.pathname.includes('es') ? "Ver más" : "See more"

  const [isFocused, setFocused] = useState(0)
  const [clickedProject, setProject] = useState<Project | null>(null)

  const showDescription = (e: any, project: Project | null) => {
    setFocused(1)
    setProject(project)

    setTimeout(() => {
      const div = document.getElementById('projects')
      if (div)
        div.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }
  
  const hideDescription = () => {
    setFocused(0)
  }

  return (
    <>
      <div className={`flex flex-col max-w-7xl justify-between bg-[var(--bg-tag)] mb-2 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ${isFocused ? "block" : "hidden"}`}>

        <div className="relative">
          <div className="w-full bg-white rounded-t-lg">
            <img className="rounded-t-lg object-contain h-100 w-full" src={ clickedProject?.image } alt={ clickedProject?.title } />
          </div>
          <div onClick={ hideDescription } className="absolute right-5 top-2">
            <i className="fa-solid fa-circle-xmark text-[var(--title-color)] text-2xl"></i>
          </div>
        </div>

        

        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold font-text dark:text-white">{ clickedProject?.title }</h5>
            <h5 className="mb-2 text-2xl font-bold font-text dark:text-slate-300">{ clickedProject?.date }</h5>
          </div>
            <h6 className="mb-2 text-2xl font-bold font-text text-[var(--span-color)]">{ clickedProject?.desc }</h6>
            <div className="flex justify-start flex-wrap max-w-full">
              <h6 className="text-sm text-[var(--text-color)]">
                {
                  clickedProject?.stack.join(' ')
                }
              </h6>
            </div>
            <div className="flex justify-start">
              <div className="mr-2">
                <a href={ clickedProject?.github } target="_blank" title="github">
                  <i className="fa-brands fa-github text-[var(--bg-tag)] text-xl mt-2"></i>
                </a>
              </div>
              <div className="flex justify-between w-full">
                <div className="flex">
                  {
                    clickedProject?.urls.map((url: URL, i: number) => (
                      <div key={ i } className="mr-2">
                        <a href={ url.link } target="_blank" title={ url.title }>
                          <i className="fa-solid fa-arrow-up-right-from-square text-xl text-[var(--bg-tag)] mt-2"></i>
                        </a>
                      </div>
                    ))
                  }
                </div>
                <div>
                  {
                    clickedProject?.detailURL &&
                    <a href={clickedProject?.detailURL} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{ projectLinkNameDetail }</a>
                  }
                </div>
              </div>
            </div>  
        </div>
      </div>
    <div className={`sm:grid sm:grid-flow-row sm:grid-cols-2 sm:gap-4 sm:justify-items-center`}>
      
      {
        !isFocused &&
        projects.map((project: Project) => (
          <div onClick={ (event) => { WINDOW_WIDTH >= MAX_WIDTH && showDescription(event, project) } } className="flex flex-col justify-between sm:w-4/5 h-auto w-full cursor-zoom-in hover:scale-105 transition-transform duration-300 bg-[var(--card-color)] mb-2 rounded-lg shadow-sm">
            <div className="w-full h-3/5">
              <img className="rounded-t-lg w-full h-full object-fill" src={ project.image } alt={ project.title } />
            </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold font-text text-[var(--text-color)] dark:text-white">{ project.title }</h5>
                  <h5 className="mb-2 text-2xl font-bold font-text text-[var(--title-color)] dark:text-slate-300">{ project?.date }</h5>
                </div>
                  <div className="flex justify-start flex-wrap max-w-full">
                    <h6 className="text-sm text-[var(--span-color)]">
                      {
                        project.stack.join(' ')
                      }
                    </h6>
                  </div>
                  <div className="flex justify-start">
                    <div className="mr-2">
                      <a href={ project.github } target="_blank" title="github">
                        <i className="fa-brands fa-github text-[var(--bg-tag)] text-xl mt-2"></i>
                      </a>
                    </div>
                    {
                      project.urls.map((url: URL, i: number) => (
                        <div key={ i } className="mr-2">
                          <a href={ url.link } target="_blank" title={ url.title }>
                            <i className="fa-solid fa-arrow-up-right-from-square text-xl text-[var(--bg-tag)] mt-2"></i>
                          </a>
                        </div>
                      ))
                    }
                  </div>  
              </div>
          </div>
        ))
      }
    </div>
  </>
  )
}

import type { Project, URL } from "../../interfaces/interfaces"
import "../../styles/global.css"

export function ProjectCard({ projects }: { projects: Array<Project> }) {
  return (
    <div>
      {
        projects.map((project: Project) => (
          <div className="w-full bg-[var(--bg-tag)] mb-2 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={ project.link } alt={ project.title } />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold font-text text-[var(--text-color)] dark:text-white">{ project.title }</h5>
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
  )
}

import "../../styles/global.css"
import { Tag } from "./Tag"

export function Carousel({ projects }) {
  return (
    <div id="default-carousel" class="relative w-full" data-carousel="static">
        <div class="relative h-70  overflow-hidden rounded-lg md:h-96">
            { projects.map((project, index) => (
              <div class="duration-700 ease-in-out group" data-carousel-item key={ index }>
                <img src={ project.link} class="absolute hover:opacity-25 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={ project.title } />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-around p-5">
                  <div><h3 className="text-[var(--title-color)] font-title text-xl">{ project.title }</h3></div> 
                  <div><h5 className="text-[var(--span-color)] font-text">{ project.desc }</h5></div> 
                  <div className="grid grid-flow-col grid-rows-2 gap-4">
                    {
                      project.stack.map((tech, index) => (
                        <Tag tag={ tech } key={ index } />
                      )) 
                    }
                  </div> 
                  <div className="flex justify-center">
                    {
                      project.urls.map((url, index) => (
                        <a href={ url } target="_blank" key={ index }><i className="fa-brands fa-github text-[var(--bg-tag)] text-4xl mb-2"></i></a>
                      ))
                    } 
                  </div>
                </div>
              </div>
              ))
            }
        </div>
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          { projects.map((project, index) => (
            <button type="button" class="w-3 h-3 rounded-full bg-[var(--span-color)]" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={ index }></button>
            ))
          }
        </div>
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-[var(--span-color)]/100 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-[var(--span-color)]/100 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>

  )
}

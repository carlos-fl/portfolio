import type { Tech } from "../../interfaces/interfaces"
import "../../styles/global.css"

export function Tech({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center sm:m-5">
      <div>
        <img className="w-12" src={ tech.icon } alt={ tech.name } />
      </div>
      <div className="ms-2">
        <h3 className="text-[var(--text-color)] font-text sm:text-2xl text-base">{ tech.name }</h3>
      </div>
    </div>
  )
}


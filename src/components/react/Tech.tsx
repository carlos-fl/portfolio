import "../../styles/global.css"

export function Tech({ techName }: { techName: string }) {
  return (
    <div className="flex items-center sm:m-5">
      <div>
        <i className="fa-solid fa-caret-right text-[var(--title-color)] sm:text-5xl text-xl m-1"></i>
      </div>
      <div>
        <h3 className="text-[var(--text-color)] font-text sm:text-2xl text-base">{ techName }</h3>
      </div>
    </div>
  )
}


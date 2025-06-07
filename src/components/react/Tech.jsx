import "../../styles/global.css"

export function Tech({ techName }) {
  return (
    <div className="flex items-center m-5">
      <div>
        <i className="fa-solid fa-caret-right text-[var(--title-color)] text-5xl m-1"></i>
      </div>
      <div>
        <h3 className="text-[var(--text-color)] font-text text-2xl">{ techName }</h3>
      </div>
    </div>
  )
}


import { useState } from "react"
import "../../styles/global.css"
import { Tech } from "./Tech.jsx"
import { data } from "../../content/data"

export function TabSwitcher({ tabs }) {
  const [stack, setStack] = useState(data.stack.db)


  const handleClick = (tab) => {
    setStack(data.stack[tab]) 
  }

  return (
    <div className="flex flex-col">
      <div className={`flex justify-start text-sm font-medium font-text text-center text-[var(--text-color)] border-b border-[var(--bg-tag)] dark:text-gray-400 dark:border-gray-700`}>
      { tabs.map((tab) => (
        <button onClick={ () => handleClick(tab) } key={ tab } className="me-2 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 btn">
          { tab } 
        </button>
      ))
      }
      </div>
      <div className="grid grid-flow-col grid-rows-2 gap-4">
      {stack.map((tech) => (
        <Tech techName={ tech } key={ tech } />
      ))
       }
      </div>
    </div>
  )
}

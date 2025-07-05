import { useState } from "react"
import "../../styles/global.css"
import { Tech } from "./Tech"
import { data } from "../../content/data"
import type { Stack } from "../../interfaces/interfaces"

export function TabSwitcher({ tabs }: { tabs: Array<string> }) {
  const [stack, setStack] = useState(data.stack.db)
  const [key, setKey] = useState('db')

  const handleClick = (tab: keyof Stack) => {
    setStack(data.stack[tab]) 
    setKey(tab)
  }

  return (
    <div className="flex flex-col">
      <div className={`flex flex-wrap justify-start p-1 text-sm font-medium font-text text-center  dark:text-gray-400 dark:border-gray-700`}>
      { 
        tabs.map((tab) => (
          <button onClick={ () => handleClick(tab) } key={ tab } className={`me-2 inline-block mb-1 p-4 border-b-2 rounded-t-lg btn ${key === tab  ? 'text-[var(--span-color)] border-gray-300 dark:text-gray-300' : 'text-[var(--gb-tag)] border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>
              { tab } 
          </button>
      ))
      }
      </div>
      <div className="grid grid-flow-row sm:grid-rows-2 sm:grid-cols-4 grid-cols-2 mb-2 gap-4 items-center mt-5">
      {stack.map((tech, index) => (
        <Tech tech={ tech } key={ index } />
      ))
       }
      </div>
    </div>
  )
}

import "../../styles/global.css"


export function Tag({ tag }) {
  return (
    <div class="flex justify-between bg-[var(--bg-tag)] min-w-40 p-2 rounded-full m-2">
      <div class="rounded-full w-5 bg-[var(--bg-color)]"></div>
      <div>
        <h5 class="font-title text-[var(--title-color)]">{ tag }</h5>
      </div>
      <div></div>
    </div>
  )
}


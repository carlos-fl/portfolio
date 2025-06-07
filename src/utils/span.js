/*
  *
  * @param { Array } target
  * @param { string } description 
  *
*/
export function convertToSpan(targets, description) {
  const regex = new RegExp(`\\b(${targets.join('|')})\\b`, 'gi');
  const splittedText = description.split(regex)

  const structuredDescription = splittedText.map((word) => targets.some(w => w.toLowerCase() == word.toLowerCase()) ? `<span class="text-[var(--span-color))]">${word}</span>` : word
)

  return structuredDescription
}


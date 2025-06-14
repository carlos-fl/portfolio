const currentLang = window.localStorage.getItem('lang') ?? 'es'
const select = document.getElementById('language-select')
select.value = currentLang

document.addEventListener('DOMContentLoaded', () => {
  select.addEventListener('change', (e) => {
    const lang = e.target.value 
    window.localStorage.setItem('lang', lang)
    if (lang != '')
      window.location.href = `/${lang}/`
  })
})
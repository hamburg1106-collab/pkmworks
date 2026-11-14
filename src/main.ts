import './style.css'
import { links } from './links'

const list = document.querySelector<HTMLUListElement>('#links')
const section = document.querySelector<HTMLElement>('#contact')
const shown = links.filter((l) => l.url)

if (list && section) {
  if (shown.length === 0) {
    section.hidden = true
  } else {
    for (const l of shown) {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = l.url
      a.target = '_blank'
      a.rel = 'noopener'
      const name = document.createElement('strong')
      name.textContent = l.name
      const note = document.createElement('span')
      note.textContent = l.note
      a.append(name, note)
      li.append(a)
      list.append(li)
    }
  }
}

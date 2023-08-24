const { TRUE } = require('sass')

window.up.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
// setInterval(() => {
//   let position = scrollY
//   console.log(position)
//   if (position > innerHeight) {
//     window.up.style.display = 'inline'
//   } else {
//     window.up.style.display = 'none'
//   }
// }, 500)
let isDisplay = false
setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true
    window.up.style.display = 'inline'
    return null
  }

  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.up.style.display = 'none'
    return null
  }
}, 500)

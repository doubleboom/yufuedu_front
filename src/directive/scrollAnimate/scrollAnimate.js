import './scrollAnimate.css'
import { debounce } from '@/utils'
var __resizeHandler
export default {
  bind (el, binding) {
    __resizeHandler = debounce(e => {
      console.log(el)
      var clients = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      var divTop = el.getBoundingClientRect().top
      if (divTop <= clients) {
        el.classList.add('fadeInLeft')
      } else {
        // el.classList.remove('fadeInLeft')
      }
    }, 100)
    document.addEventListener('scroll', __resizeHandler, false)
  },
  unbind () {
    document.removeEventListener('scroll', __resizeHandler, false)
  }
}

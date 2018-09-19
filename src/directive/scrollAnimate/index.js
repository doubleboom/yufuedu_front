import scrollAnimate from './scrollAnimate'

const install = function (Vue) {
  Vue.directive('scrollAnimate', scrollAnimate)
}

if (window.Vue) {
  window.scrollAnimate = scrollAnimate
  Vue.use(install);
}

scrollAnimate.install = install
export default scrollAnimate

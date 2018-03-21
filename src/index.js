/**
 * Created by 331095 on 2018/3/20.
 */

import scoreToStar from './components/star.vue'
const star = {
  install (Vue, options){
    Vue.component(scoreToStar.name, scoreToStar)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(star)
}
export default star

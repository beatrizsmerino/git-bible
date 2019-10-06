import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Commands from './views/Commands.vue'
import GitFlow from './views/GitFlow.vue'
import Bibliografy from './views/Bibliografy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
      }
    },
    {
      path: '/commands',
      name: 'commands',
      component: Commands,
      meta: {
        title: 'Commands',
      }
    },
    {
      path: '/gitflow',
      name: 'gitflow',
      component: GitFlow,
      meta: {
        title: 'Git Flow',
      }
    },
    {
      path: '/bibliografy',
      name: 'bibliografy',
      component: Bibliografy,
      meta: {
        title: 'Bibliografy',
      }
    }
  ]
})

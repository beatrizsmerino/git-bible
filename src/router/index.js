import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Commands from '../views/Commands.vue'
import GitFlow from '../views/GitFlow.vue'
import Bibliografy from '../views/Bibliografy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
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
];

const router = new VueRouter({
  routes
});

export default router;

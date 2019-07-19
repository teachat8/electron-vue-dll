import Vue from 'vue'
import Router from 'vue-router'
import Test from '../views/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/test',
      name: '',
      component: Test
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

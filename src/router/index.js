import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import search from '@/components/ceshi/search'
import list from '@/components/ceshi/resourList'
import detail from '@/components/ceshi/detail'
import video from '@/components/videoPage/videoPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail/:crid',
      name: 'detail',
      component: detail
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },

  ]
})

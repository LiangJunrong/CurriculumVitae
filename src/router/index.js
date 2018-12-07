import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import PartOne from '@/components/PartOne'
// import PartTwo from '@/components/PartTwo'
// import PartThree from '@/components/PartThree'
// import PartFour from '@/components/PartFour'
// import PartFive from '@/components/PartFive'
// import PartSix from '@/components/PartSix'
// import PartSeven from '@/components/PartSeven'

// 路由懒加载
const PartOne = () => import('@/components/PartOne');
const PartTwo = () => import('@/components/PartTwo');
const PartThree = () => import('@/components/PartThree');
const PartFour = () => import('@/components/PartFour');
const PartFive = () => import('@/components/PartFive');
const PartSix = () => import('@/components/PartSix');
const PartSeven = () => import('@/components/PartSeven');

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        PartOne: PartOne,
        PartTwo: PartTwo,
        PartThree: PartThree,
        PartFour: PartFour,
        PartFive: PartFive,
        PartSix: PartSix,
        PartSeven: PartSeven
      }
    },
    {
      path: '/PartOne',
      name: 'PartOne',
      component: PartOne
    },
    {
      path: '/PartTwo',
      name: 'PartTwo',
      component: PartTwo
    },
    {
      path: '/PartThree',
      name: 'PartThree',
      component: PartThree
    },
    {
      path: '/PartFour',
      name: 'PartFour',
      component: PartFour
    },
    {
      path: '/PartFive',
      name: 'PartFive',
      component: PartFive
    },
    {
      path: '/PartSix',
      name: 'PartSix',
      component: PartSix
    },
    {
      path: '/PartSeven',
      name: 'PartSeven',
      component: PartSeven
    },
  ]
})
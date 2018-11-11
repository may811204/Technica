import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import FurtherReading from '@/components/FurtherReading'
import FurtherResource from '@/components/FurtherResource'
import FinancialPlanningTool from '@/components/FinancialPlanningTool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/furtherreading',
      name: 'FurtherReading',
      component: FurtherReading
    },
    {
      path: '/financialplanningtool',
      name: 'FinancialPlanningTool',
      component: FinancialPlanningTool
    },
    {
      path: '/furtherresource',
      name: 'FurtherResource',
      component: FurtherResource
    }
  ]
})

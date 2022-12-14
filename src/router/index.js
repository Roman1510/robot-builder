import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotHeads from '../parts/RobotHeads.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'
import SidebarStandard from '../sidebars/SideBarStandard.vue'
import SidebarBuild from '../sidebars/SidebarBuild.vue'
import ShopingCart from '../cart/ShopingCart.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/parts/browse/',
      name: 'Browse',
      component: BrowseParts,
      props: true,
      children: [
        { path: 'heads', name: 'BrowseHeads', component: RobotHeads },
        { path: 'arms', name: 'BrowseArms', component: RobotArms },
        { path: 'torsos', name: 'BrowseTorsos', component: RobotTorsos },
        { path: 'bases', name: 'BrowseBases', component: RobotBases },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter: (to) => {
        return Number.isInteger(Number(to.params.id))
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShopingCart,
    },
  ],
})

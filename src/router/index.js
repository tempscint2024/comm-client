import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserSignUp from '@/components/User/SignUp'
import SellersSignUp from '@/components/Sellers/SignUp'
import SharedSignIn from '@/components/Shared/SignIn'
import Item from '@/components/Products/Item'
import Items from '@/components/Products/Items'
import SignUp from '@/components/User/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/User/SignUp',
      name: 'UserSignUp',
      component: UserSignUp
    },
    {
      path: '/Sellers/SignUp',
      name: 'SellersSignUp',
      component: SellersSignUp
    },
    {
      path: '/Shared/SignIn',
      name: 'SharedSignIn',
      component: SharedSignIn
    },
    {
      path: '/Products/Item',
      name: 'Item',
      component: Item
    },
    {
      path: '/Products/Items',
      name: 'Items',
      component: Items
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

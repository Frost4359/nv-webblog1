import Vue from 'vue'
import Router from 'vue-router'

// Users
import UserIndex from '@/components/index'
import UserCreate from '@/components/CreateUser'
import UserEdit from '@/components/EditUser'
import UserShow from '@/components/ShowUser'

// Authen
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
 routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
       path: '/user/edit/:userId',
       name: 'user-edit',
       component: UserEdit
    },
    {
       path: '/user/:userId',
       name: 'user',
       component: UserShow
    }, 

    // authen 
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

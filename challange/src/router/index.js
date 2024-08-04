import Vue from 'vue'
import Router from 'vue-router'
import RegisterPet from '@/view/RegisterPet.vue'
import HomePet from '@/view/HomePet.vue'
import LoginPet from '@/view/LoginPet.vue'
import ForgotPassword from '@/view/ForgotPassword.vue'
import RecoverPassword from '@/view/RecoverPassword.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: LoginPet,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePet,
    },
    {
      path: '/registro',
      name: 'Registro',
      component: RegisterPet,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPet,
    },
    {
      path: '/forgot-password',
      name: 'Login',
      component: ForgotPassword,
    },
    {
      path: '/recover-password',
      name: 'Login',
      component: RecoverPassword,
    },
  ],
})

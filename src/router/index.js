import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import axios from 'axios'

Vue.use(VueRouter)

// const auth = (to, from, next) => {

// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = false
  axios.get('/auth/verify').then((res) => {
    // if verification is succesfull
    if (res.data.verified) {
      isAuthenticated = res.data.verified
    } else {
      isAuthenticated = false
    }

    if (!isAuthenticated && to.name !== 'Login' && to.name !== 'Signup') {
      next({ name: 'Login' });
    } else if (isAuthenticated && (to.name == 'Login' || to.name == 'Signup')) {
      next({ name: 'Home' })
    }
    else {
      next();
    }
  }).catch((err) => {
    // if verification is not successfull
    console.log(err)
    isAuthenticated = false
    if (!isAuthenticated && to.name !== 'Login' && to.name !== 'Signup') {
      next({ name: 'Login' });
    } else if (isAuthenticated && (to.name == 'Login' || to.name == 'Signup')) {
      next({ name: 'Home' })
    }
    else {
      next();
    }
  })
});
export default router

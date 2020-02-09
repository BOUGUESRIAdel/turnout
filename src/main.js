import Vue from 'vue'
import VueRouter from 'vue-router'
import  {firebaseApp} from './firebaseApp'
import store from './store'

import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : [
    {path: '/dashboard', component:Dashboard},
    {path: '/signin', component:Signin},
    {path: '/signup', component:Signup}
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',  
  render: h => h(App),
  components:{
    Dashboard,
    Signin
  },
  router,
  store
})

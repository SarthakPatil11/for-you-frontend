import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import routes from './components/router'


// import { createApp } from 'vue';
// // import App from './App.vue';
// import 'vue-toastification/dist/index.css';
// import { createToast} from 'vue-toastification';
// import ForYou from './components/ForYou.vue'
// import ClkLevel1 from './components/ClkLevel1.vue'
// import ClkLevel2 from './components/ClkLevel2.vue'
// import TempletImgTxt from './components/TempletImgTxt.vue'
// // import CourseCard from './components/CourseCard.vue'
// // import AssignmentCard from './components/AssignmentCard.vue'
// import ChapterPage from './components/ChapterPage.vue'
// import AssignmentPage from './components/AssignmentPage.vue'
// import StepProgress from './components/StepProgress.vue'
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', 
  routes
})

// const toastOptions = {
//   position: 'bottom-right',
//   timeout: 3000,
//   closeOnClick: true,
//   pauseOnFocusLoss: true,
//   pauseOnHover: true,
// };


// const toast = createToast(toastOptions);

// const app = createApp(App);

// app.config.globalProperties.$toast = toast;
// app.mount('#app');
// const Router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'StepProgress',
//       component: StepProgress
//     },
//     {
//       path: '/ClkLevel1',
//       name: 'ClkLevel1',
//       component: ClkLevel1
//     },
//     {
//       path: '/ClkLevel2',
//       name: 'ClkLevel2',
//       component: ClkLevel2,
//     },
//     {
//       path: '/TempletImgTxt/:data',
//       name: 'TempletImgTxt',
//       component: TempletImgTxt,
//     },
//     {
//       path: '/ChapterPage/:data',
//       name: 'ChapterPage',
//       component: ChapterPage,
//     },
//     {
//       path: '/AssignmentPage',
//       name: 'AssignmentPage',
//       component: AssignmentPage,
//     },
//   ],
// });
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("access_token")
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isLoggedIn) {
    // Redirect to login page if accessing private route without authentication
    next('/login');
  } else {
    next();
  }
});

// Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

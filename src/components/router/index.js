import Assignment from '../ForYou/assignment.vue'
import home from '../ForYou/home.vue'
import chapter from '../ForYou/chapter.vue'
import login from '../ForYou/login.vue'
import signup from '../ForYou/signup.vue'
import TemplateOne from '../ForYou/templateOne.vue'
import TemplateTwo from '../ForYou/templateTwo.vue'
import TemplateThree from '../ForYou/templateThree.vue'


// import Contact from './components/Contact.vue'addquestion
import addquestionOne from '../ForYou/addquestionOne.vue'
import addquestionTwo from '../ForYou/addquestionTwo.vue'
import addquestionThree from '../ForYou/addquestionThree.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/chapter',
    name: 'chapter',
    component: chapter,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:id',
    name: 'assignment',
    component: Assignment,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:chapterId/templateOne/:id',
    name: 'template',
    component: TemplateOne,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:chapterId/templateTwo/:id',
    name: 'template',
    component: TemplateTwo,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:chapterId/templateThree/:id',
    name: 'template',
    component: TemplateThree,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:chapterId/templateOne/:id/addquestion',
    name: 'addquestion',
    component: addquestionOne,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:chapterId/templateTwo/:id/addquestion',
    name: 'addquestion',
    component: addquestionTwo,
    meta: { requiresAuth: true }
  },
  {
    path: '/assignment/:chapterId/templateThree/:id/addquestion',
    name: 'addquestion',
    component: addquestionThree,
    meta: { requiresAuth: true }
  },
]

export default routes
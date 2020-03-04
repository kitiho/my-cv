import Vue from "vue";
import VueRouter from "vue-router";
import Work from '../components/Work.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/work', component: Work }
];

const router = new VueRouter({
  routes
});

export default router;

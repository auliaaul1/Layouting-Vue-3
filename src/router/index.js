import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Dashboard from "../views/dashboard.vue";
import Profile from "../views/profile.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

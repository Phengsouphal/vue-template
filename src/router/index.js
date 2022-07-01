import Skill from "../views/Skill.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Experience from "../views/Experience.vue";
import Education from "../views/Education.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "/",
    component: About,
  },
  {
    path: "/skill",
    name: "Skill",
    component: Skill,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "menu-active",
});

export default router;

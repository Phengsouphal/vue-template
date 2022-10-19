// import Skill from "../views/Skill.vue";
// import About from "../views/About.vue";
// import Contact from "../views/Contact.vue";
import Experience from "../views/Experience.vue";
// import Education from "../views/Education.vue";

import { createRouter } from "vue-router";

const routes = [
  {
    path: "",
    name: "/",
    component: Experience,
  },
  // {
  //   path: "/skill",
  //   name: "Skill",
  //   component: Skill,
  // },
  // {
  //   path: "/experience",
  //   name: "Experience",
  //   component: Experience,
  // },
  // {
  //   path: "/education",
  //   name: "Education",
  //   component: Education,
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact,
  // },
];

const router = createRouter({
  routes,
  linkActiveClass: "menu-active",
});

export default router;

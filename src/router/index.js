import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AccessView from "../views/AccessView.vue";
import UserView from "../views/UserView.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  // {
  //   path: "/access",
  //   name: "access",
  //   component: AccessView,
  //   children: [
  //     {
  //       path: "/user",
  //       name: "user",
  //       component: UserView,
  //     },
  //     {
  //       path: "/admin",
  //       name: "admin",
  //       component: AdminView,
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import AdminView from "../views/AdminView.vue";
import EventsView from "../views/EventsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/events",
    name: "events",
    component: EventsView,
    children: [
      {
        path: "event/:id",
        name: "event",
        component: EventsView,
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    children: [
      {
        path: "events",
        name: "user-events",
        component: EventsView,
        children: [
          {
            path: "event/:id",
            name: "user-event",
            component: EventsView,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    children: [
      {
        path: "events",
        name: "admin-events",
        component: EventsView,
        children: [
          {
            path: "event/:id",
            name: "admin-event",
            component: EventsView,
          },
        ],
      },
    ],
  },
  {
    path: "/events",
    name: "events",
    component: EventsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

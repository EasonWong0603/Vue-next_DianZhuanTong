import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pointsdetails",
  },
  {
    path: "/pointsdetails",
    component: () => import("../views/index/PointsDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

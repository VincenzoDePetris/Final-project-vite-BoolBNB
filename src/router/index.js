import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import SearchPage from "../pages/SearchPage.vue";
import HouseDetail from "../components/houses/HouseDetail.vue";
import NotFound from "../pages/NotFound.vue";
import Team from "../pages/Team.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/search",
      name: "search",
      component: SearchPage,
    },
    {
      path: "/team",
      name: "team",
      component: Team,
    },
    {
      path: "/house/:id",
      name: "house-detail",
      component: HouseDetail,
    },

    // 404
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };

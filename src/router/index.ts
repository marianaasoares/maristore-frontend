import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    document.title = to.name || import.meta.env.VITE_APP_TITLE
    next()
})
export default router
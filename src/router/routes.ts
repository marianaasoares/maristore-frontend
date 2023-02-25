import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        name: "Home",
        path: "/",
        component: () => import("../views/home/Home.vue")
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("../views/login/SignIn.vue")
    }
]
export default routes

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ordersPage from "../views/ordersPageView.vue"
import faq from "../views/faqView.vue"
import message from "../views/messageMeView.vue"

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/orders",
      name: "ordersPage",
      component: ordersPage,
    },
    {
      path: "/faq",
      name: "faq",
      component: faq,
    },
    {
      path: "/message",
      name: "message",
      component: message,
    }
  ],
})

export default router

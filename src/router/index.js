import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ordersPage from "../views/ordersPageView.vue"
import faq from "../views/faqView.vue"
import message from "../views/messageMeView.vue"
import hw from "../views/hardwareWalletView.vue"


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
    },
    {
      path: "/hw",
      name: "hw",
      component: hw,
    }
  ],
})

export default router

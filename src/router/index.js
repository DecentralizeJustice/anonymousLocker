import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ordersPage from "../views/ordersPageView.vue"
import faq from "../views/faqView.vue"
import message from "../views/messageMeView.vue"
import about from "../views/aboutMeView.vue"
import privacyPolicy from "../views/privacyPolicy.vue"
import termsOfService from "../views/termsOfService.vue"
import orderAdmin from "../views/orderAdmin.vue"
import twitterGiveAway from "../views/giveAwayTerms.vue"
import verifyTwitterGiveaway from "../views/verifyGiveaway.vue"
import login from "../views/loginPage.vue"
import placeConciergeOrder from "../views/placeConciergeOrder.vue"
import placeLockerOrder from "../views/placeLockerOrder.vue"
import shopperLanding from "../views/shopperLanding.vue"
import earnerLanding from "../views/earnerLanding.vue"
import registerEarner from "../views/registerAsEarner.vue"
/* const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
} */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/:catchAll(.*)", component: HomeView },
    {
      path: "/registerEarner",
      name: "registerEarner",
      component: registerEarner
    },
    {
      path: "/shop",
      name: "shopperLanding",
      component: shopperLanding
    },
    {
      path: "/earn",
      name: "earnerLanding",
      component: earnerLanding
    },
    {
      path: "/placeLockerOrder",
      name: "placeLockerOrder",
      component: placeLockerOrder
    },
    {
      path: "/placeConciergeOrder",
      name: "placeConciergeOrder",
      component: placeConciergeOrder
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/",
      name: "home",
      component: shopperLanding //HomeView //lockerlanding
    },
    {
      path: "/twitterGiveAwayTerms",
      name: "twitterGiveAway",
      component: twitterGiveAway
    },
    {
      path: "/verifyTwitterGiveaway",
      name: "verifyTwitterGiveaway",
      component: verifyTwitterGiveaway
    },
    {
      path: "/orders",
      name: "ordersPage",
      component: ordersPage
    },
    {
      path: "/faq",
      name: "faq",
      component: faq
    },
    {
      path: "/message",
      name: "message",
      component: message
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/privacypolicy",
      name: "privacypolicy",
      component: privacyPolicy
    },
    {
      path: "/termsofservice",
      name: "termsofservice",
      component: termsOfService
    },
    {
      path: "/admin",
      name: "admin",
      component: orderAdmin
    }
  ],
})

export default router

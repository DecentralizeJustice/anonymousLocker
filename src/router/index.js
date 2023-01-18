import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ordersPage from "../views/ordersPageView.vue"
import faq from "../views/faqView.vue"
import message from "../views/messageMeView.vue"
import about from "../views/aboutMeView.vue"
import privacyPolicy from "../views/privacyPolicy.vue"
import termsOfService from "../views/termsOfService.vue"
import blog from "../views/blogView.vue"
import loyalty from "../views/loyaltyView.vue"
import orderAdmin from "../views/orderAdmin.vue"
import novReview2022 from "../components/blogPost/monthInReview/nov2022Blog.vue"
import empty from "../views/emptyRoute.vue"
import twitterGiveAway from "../views/giveAwayTerms.vue"
import verifyTwitterGiveaway from "../views/verifyGiveaway.vue"
import quiz from "../views/quizPage.vue"
import checkOnOrder from "../views/checkOnOrder.vue"
import concierge from "../views/conciergeLandingpage.vue"
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
      path: "/service",
      name: "concierge",
      component: concierge
    },
    {
      path: "/checkOnOrder",
      name: "checkOnOrder",
      component: checkOnOrder
    },
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/quiz",
      name: "quiz",
      component: quiz
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
      path: "/blog",
      component: empty,
      children: [
        { 
          path: '', 
          name: 'blog',
          component: blog
        },
        {
          path:'nov22',
          component: novReview2022
        }
      ],
    },
    {
      path: "/loyalty",
      name: "loyalty",
      component: loyalty
    },
    {
      path: "/admin",
      name: "admin",
      component: orderAdmin
    }
  ],
})

export default router

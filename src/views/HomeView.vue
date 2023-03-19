<template>
  <q-page style="width: 100%; background-color:#D4CCC4;"
  >
    <!-- page content -->

    <div class="row justify-evenly q-pb-xl col-12 " >
      <div class="row col col-10 col-md-6">
        <q-card class="q-mt-xl text-center bg-primary text-white col col-12"  >
          <q-card-section class="desktop-only">
            <div
              class="text-h3  my-font "
              style=""
            >
              {{heroText}}
            </div>
            <div
              class="text-h6 text-weight-regular q-mt-md"
              style="line-height: 120%"
            >
              {{heroSubtext}}
            </div>
          </q-card-section>
          <q-card-section class="mobile-only">
            <div
              class="text-h4 text-weight-regular"
              style="line-height: 120%; font-weight: 400"
            >
              {{heroText}}
            </div>
            <div
              class="text-body1 text-weight-regular q-mt-md"
              style="line-height: 120%"
            >
              {{heroSubtext}}
            </div>
          </q-card-section>
          <div class="col col-12 justify-center items-center align-center row">
        <div class="col-6 col-md-4 justify-center items-center align-center row q-mb-md" style="">
          <q-img
          class="rounded-borders"
          :src="trade"
          />
              </div>
      </div>
        </q-card>
      </div>
    </div>

    <div class="row justify-evenly q-pb-xl col-12 bg-primary" >
      <div class="row col col-10 col-md-6">
        <q-card class="q-mt-xl text-center text-primary col col-12" style="width: 100%; background-color:#D4CCC4;">
          <q-card-section class="desktop-only">
            <div
              class="text-h3  my-font "
              style=""
            >
            Spend Monero Anonymously or Anywhere
            </div>
          </q-card-section>
          <q-card-section class="mobile-only">
            <div
              class="text-h4 text-weight-regular"
              style="line-height: 120%; font-weight: 400"
            >
            Spend Monero Anonymously or Anywhere
            </div>
          </q-card-section>
        </q-card>
        <q-card class="text-center col col-12 q-my-xl text-primary" style="background-color:white;">
          <q-card-section>
            <div class="text-h4 my-font">How It Works:</div>
            <div class="q-mt-md">
              <div class="">
                <div class="row justify-around">
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 1.</p>
                    <img :src="computer" class="q-mb-sm" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      You place your order and deposit your order amount and 10 USD Bond in XMR.
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="ecom" class="" :class="{'desktopIconsPayment': $q.screen.gt.sm, 'mobileIconsPayment': $q.screen.lt.md}" />

                    <p class="text-subtitle1 text-weight-medium">
                      An Earner Selects your order and Completes It.
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 3.</p>
                    <img :src="happyCustomer" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      You Confirm That Your Order was Completed Correctly and your deposit is released to you. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <router-link to="/shop" style="text-decoration:none !important;">
                <q-btn
                  color="primary"
                  label="Learn More"
                  size="lg"
                  padding="sm"
                />
              </router-link>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-10 col-md-4 desktop-only justify-center items-center align-center row">
        <div class="col-12 justify-center items-center align-center row q-pa-xl" style="width: 100%;">
          <q-img
          class="rounded-borders"
            :src="shop"
          />
              </div>
      </div>
    </div>
<!--     <div class="row justify-evenly q-pb-xl col-12 " >
      <div class="col col-10 col-md-4 desktop-only justify-center items-center align-center row">
        <div class="col-12 justify-center items-center align-center row q-pa-xl" style="width: 100%;">
          <q-img
          class="rounded-borders"
            :src="order"
          />
              </div>
      </div>
      <div class="row col col-10 col-md-6">
        <q-card class="q-mt-xl text-center bg-primary text-white col col-12">
          <q-card-section class="desktop-only">
            <div
              class="text-h3  my-font "
              style=""
            >
            Get Monero with Credit Card and No KYC
            </div>
          </q-card-section>
          <q-card-section class="mobile-only">
            <div
              class="text-h4 text-weight-regular"
              style="line-height: 120%; font-weight: 400"
            >
            Get Monero with Credit Card and No KYC
            </div>
          </q-card-section>
        </q-card>
        <q-card class="text-center col col-12 q-my-xl text-black" style="">
          <q-card-section>
            <div class="text-h4 my-font">How It Works:</div>
            <div class="q-mt-md">
              <div class="">
                <div class="row justify-around">
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 1.</p>
                    <img :src="computer" class="q-mb-sm" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      You register as an earner and deposit 5 USD of XMR as a bond.
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="happyCustomer" class="" :class="{'desktopIconsPayment': $q.screen.gt.sm, 'mobileIconsPayment': $q.screen.lt.md}" />

                    <p class="text-subtitle1 text-weight-medium">
                      You select and fullfill an Amazon order.
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 3.</p>
                    <img :src="monero" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      Once the order is completed you receive the order XMR and your deposit back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <router-link to="/earn" style="text-decoration:none !important;">
                <q-btn
                  color="primary"
                  label="Learn More"
                  size="lg"
                  padding="sm"
                />
              </router-link>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div> -->
    
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import footerGlobal from "@/components/footerGlobal.vue"
import { onMounted } from "vue"
import computer from "@/assets/svgs/monitor.svg"
import ecom from "@/assets/svgs/ecommerce.svg"
import trade from "@/assets/svgs/trade.svg"
import happyCustomer from "@/assets/svgs/deliveryman.svg"
// import monero from "@/assets/svgs/rand.svg"
import shop from "@/assets/svgs/undrawShop.svg"
// import order from "@/assets/svgs/undrawOrder.svg"
require("@lottiefiles/lottie-player")
const heroText = 'Peer To Peer Anonymous Monero Shopping'
const heroSubtext = ``// `How Crypto Is Mean To Be`

onMounted(() => {

    })
</script>
<style lang="sass" scoped>
@font-face
  font-family: customfont
  src: url(../styles/ArchivoBlack-Regular.ttf)
.my-font 
  font-family: 'customfont'

.desktopIcons
  width:  60%
.mobileIcons
  width:  30%
.desktopIconsPayment
  width: 62%
  margin: 1% 1% 1% 1%
.mobileIconsPayment
  width: 30%
</style>
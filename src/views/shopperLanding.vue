<template>
  <q-page style="width: 100%; background-color:#D4CCC4;"
  >
    <!-- page content -->

    <div class="row justify-evenly q-pb-xl col-12 " >
      <div class="row col col-10 col-md-6">
        <q-card class="q-mt-xl text-center bg-primary text-white col col-12">
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
              <router-link :to="{ name: 'ordersPage' }" style="text-decoration:none !important;">
                <q-btn
                  color="primary"
                  label="Place An Order!"
                  size="lg"
                  padding="sm"
                />
              </router-link>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-10 col-md-3 desktop-only">
        <lottie-player
        autoplay
        loop
        mode="normal"
        speed=".75"
        src="https://res.cloudinary.com/dylevfpbl/raw/upload/v1668561142/lf30_editor_a2wu4b2s.json"
></lottie-player>
      </div>
    </div>
<div class="row justify-evenly q-pt-xl col-12 ">
        <div class="col-12 text-center text-primary text-h3 q-pb-lg my-font">
          Your Two Delivery Options
        </div>
    <div class="row justify-evenly q-py-xl col-12">
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-white q-pa-lg bg-primary" style="border-radius: 10px;">
            <div class="text-h4 my-font text-center" style="">
              1. Amazon Locker Delivery
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span v-html="step1"></span>
    
            </div>
          </div>
        </div>
      </div>
      <div class="col col-10 col-md-5 desktop-only row">
      <q-img class=""
      loading="lazy"
      src="https://res.cloudinary.com/dbdfbvzyl/image/upload/v1671332163/smallLocker_c03a46.gif" />
  </div>
    </div>

</div>
    <div class="row justify-evenly q-py-xl col-12 bg-primary">
        <div class="col col-10 col-md-5 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1675368716/landingpage/dgoon21_package_with_monero_logo_on_it_laying_at_front_door_of__d5aadebf-4d2e-4dd4-8c8f-516faee60d71.png" />
        </div>
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-primary q-pa-sm" style="border-radius: 10px;background-color:#D4CCC4;">
            <div class="text-h4 my-font text-center" style="">
              2. Home Address Delivery
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span
                v-html="step2"></span>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-evenly q-py-xl col-12 ">
      <div class="text-h4 my-font col-12 col-md-7 q-mt-md text-center">Shoppper FAQ:</div>
      <q-card class="col-12 col-md-7 q-mt-md" v-for="(catagory, key) in correctFaq" :key="key" >
      <q-card-section class=" text-white bg-grey-7 ">
        <div class="text-h6">{{ key }}</div>
      </q-card-section>

      <q-separator />
      <q-list bordered class="rounded-borders col-8">
      <q-expansion-item
        expand-separator
        :label=question[0]
        header-class="text-h5"
        v-for="(question, index) in catagory" :key="index"
      >
        <q-card>
          <q-card-section class="text-left  text-body1">
            <span v-html="question[1]"></span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      
    </q-list>

    </q-card>
</div>
    <footerGlobal/>
  </q-page>
</template>

<script setup>

import computer from "@/assets/svgs/monitor.svg"
import ecom from "@/assets/svgs/ecommerce.svg"
import happyCustomer from "@/assets/svgs/deliveryman.svg"
import footerGlobal from "@/components/footerGlobal.vue"
import { onMounted } from "vue"
import faq from "@/assets/faq.js"
require("@lottiefiles/lottie-player")
const correctFaq = faq.faq
const heroText = 'Spend Monero Anonymously or Anywhere'
const heroSubtext = `The Best Way To Use Monero`
const step1 = `Your order is made to an Amazon Locker near you. This method requires not address, email, or other kyc. 
This method can only be used to purchase items shipped by Amazon and also has size restrictions.`
const step2 = `Your order is shipped directly to your house. This method requires an delivery address but can be used for any major retailer and is more 
convenient.`
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
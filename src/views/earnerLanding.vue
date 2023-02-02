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
                      You register as an earner and deposit 5 USD of XMR as a bond.
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="happyCustomer" class="" :class="{'desktopIconsPayment': $q.screen.gt.sm, 'mobileIconsPayment': $q.screen.lt.md}" />

                    <p class="text-subtitle1 text-weight-medium">
                      You select and fullfill a shoppers order.
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
              <router-link :to="{ name: 'ordersPage' }" style="text-decoration:none !important;">
                <q-btn
                  color="primary"
                  label="Register as Earner"
                  size="lg"
                  padding="sm"
                />
              </router-link>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-10 col-md-3 desktop-only justify-center items-center align-center row">
        <div class="col-10 justify-center items-center align-center row q-my-xl" style="">
          <q-img
          class="rounded-borders"
            src="https://res.cloudinary.com/dylevfpbl/image/upload/v1673999438/landingpage/dgoon21_smiling_delivery_person_holding_package_in_front_of_gre_2a5a55b1-7fd4-4bf0-9cc6-a8df34c6ad4a.png"
          />
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
import monero from "@/assets/svgs/rand.svg"
import happyCustomer from "@/assets/svgs/deliveryman.svg"
import footerGlobal from "@/components/footerGlobal.vue"
import { onMounted } from "vue"
import faq from "@/assets/faq.js"
require("@lottiefiles/lottie-player")
const correctFaq = faq.earnerfaq
const heroText = 'Get Monero with Credit Card and No KYC'
const heroSubtext = `The Best Way To Get Monero`
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
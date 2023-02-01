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
      </div>
    </div>
    <div class="row justify-evenly q-pt-xl col-12 ">
        <div class="col-12 text-center text-primary text-h3 q-pb-lg my-font">
          How Shopping Works
        </div>
    <div class="row justify-evenly q-py-xl col-12">
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-white q-pa-lg bg-primary" style="border-radius: 10px;">
            <div class="text-h4 my-font text-center" style="">
              Step 1
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span >You place your order and pay for your order. You also deposit a ~10 USD bond in XMR.</span>
    
            </div>
          </div>
        </div>
      </div>
        <div class="col col-3 col-md-3 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1674010155/landingpage/dgoon21_person_sitting_at_computer_shopping_online_23e2fe8a-43f1-4ffb-85a7-9ccf47e5f883.png" />
        </div>
    </div>

</div>
<div class="row justify-evenly q-py-xl col-12 bg-primary">
        <div class="col col-3 col-md-3 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1675113218/landingpage/dgoon21_smilling_delivery_person_holding_package_in_front_of_gr_74ca7bee-9f4e-417a-9163-5a170ff2bd8e.png" />
        </div>
      <div class="row col col-10 col-md-3 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-primary q-pa-sm" style="border-radius: 10px;background-color:#D4CCC4;">
            <div class="text-h4 my-font text-center" style="">
              Step 2
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span
                >A Monero Earner accepts your order and completes it. </span>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-evenly q-pt-xl col-12 ">
    <div class="row justify-evenly q-py-xl col-12">
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-white q-pa-lg bg-primary" style="border-radius: 10px;">
            <div class="text-h4 my-font text-center" style="">
              Step 3
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span >You confirm that you received your item correctly, and your ~10 USD XMR deposit is refunded to you.</span>
    
            </div>
          </div>
        </div>
      </div>
        <div class="col col-3 col-md-3 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1674010309/landingpage/dgoon21_package_with_monero_logo_on_it_laying_at_front_door_of__221281d4-d484-4567-93e7-34df5a227d4a.png" />
        </div>
    </div>
</div>
<div class="row justify-evenly q-pt-xl col-12 ">
        <div class="col-12 text-center text-primary text-h3 q-pb-lg my-font">
          How Earning Works
        </div>
    <div class="row justify-evenly q-py-xl col-12">
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-white q-pa-lg bg-primary" style="border-radius: 10px;">
            <div class="text-h4 my-font text-center" style="">
              Step 1
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span >You register as a earner and deposit a ~5 USD bond in XMR.</span>
    
            </div>
          </div>
        </div>
      </div>
        <div class="col col-3 col-md-3 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1674010155/landingpage/dgoon21_person_sitting_at_computer_shopping_online_23e2fe8a-43f1-4ffb-85a7-9ccf47e5f883.png" />
        </div>
    </div>

</div>
<div class="row justify-evenly q-py-xl col-12 bg-primary">
        <div class="col col-3 col-md-3 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1675113218/landingpage/dgoon21_smilling_delivery_person_holding_package_in_front_of_gr_74ca7bee-9f4e-417a-9163-5a170ff2bd8e.png" />
        </div>
      <div class="row col col-10 col-md-3 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-primary q-pa-sm" style="border-radius: 10px;background-color:#D4CCC4;">
            <div class="text-h4 my-font text-center" style="">
              Step 2
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span
                >You pick an order and complete it.</span>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-evenly q-pt-xl col-12 ">
    <div class="row justify-evenly q-py-xl col-12">
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-white q-pa-lg bg-primary" style="border-radius: 10px;">
            <div class="text-h4 my-font text-center" style="">
              Step 3
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span >Once the order is confirmed to be complete, the Monero from the order and your deposit is released to you.</span>
    
            </div>
          </div>
        </div>
      </div>
        <div class="col col-3 col-md-3 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1674010309/landingpage/dgoon21_package_with_monero_logo_on_it_laying_at_front_door_of__221281d4-d484-4567-93e7-34df5a227d4a.png" />
        </div>
    </div>
</div>
    
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import footerGlobal from "@/components/footerGlobal.vue"
import { onMounted } from "vue"
require("@lottiefiles/lottie-player")
const heroText = 'Peer To Peer Monero Shopping & Trading'
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
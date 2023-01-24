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
    <div class="row justify-around col-12 items-center  q-py-xl bg-primary" style="width: 100%;">
      <div class="col-12 col-md-6 text-center row justify-center q-px-md items-center desktop-only">
        <div class="col-12 text-center text-white text-h5 q-pb-lg my-font">      
        Recently Purchased Items
      </div>  
        <div class="row justify-around q-gutter-lg">   
        <div class="col-md-3 col-6" v-for="item in recentlyBought" :key="item.id">
          <q-card class="" style="width: 100%;">
            <q-card-section>
              <img class='q-pa-md' :src=item.img style="height: 20vh;">
            </q-card-section>

            <q-card-section>
              <div class="text-h6">{{item.name}}</div>
              <div class="text-subtitle1">${{item.price}}</div>
            </q-card-section>
          </q-card>

        </div>
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
const heroText = 'The Best Way To Spend Monero'
const heroSubtext = `The Most Private Way To Shop Online`
const recentlyBought =[
  { 
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1671338257/recentlyBought/81lJyLrRVeL._AC_SL1500__1_-min.jpg`,
    name: 'Crucial MX500 4TB 3D NAND Internal SSD',
    price: '237.99'
  },
  {
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1669750092/recentlyBought/41vjOH-hRIL._AC_SL1000_.jpg`,
    name: `Ledger Nano S Plus Crypto Hardware Wallet`,
    price: '79.00'
  },
  {
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1671338148/recentlyBought/drilldown-min.jpg`,
    name: `SAMSUNG 980 SSD 500GB PCle 3.0x4, NVMe M.2`,
    price: '56.99'
  }
]

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
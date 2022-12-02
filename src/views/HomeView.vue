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
                      Choose Amazon Product and <br />Place Order With Me
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="monero" class="" :class="{'desktopIconsPayment': $q.screen.gt.sm, 'mobileIconsPayment': $q.screen.lt.md}" />

                    <p class="text-subtitle1 text-weight-medium">
                      Pay For Order With Monero
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 3.</p>
                    <img :src="lockerBig" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      Pick Up Order At Amazon Locker Near You
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
      <div class="col-11 col-md-4 text-center row justify-center items-center row">      
        <q-card class=" text-center bg-white text-black col-12">
          <q-card-section class="text-center text-h4  text-weight-regular text-primary " style="background-color:#D4CCC4;">
            Service Fee:
          </q-card-section>
          <q-card-section class="text-center text-h4  text-weight-regular">
            $10 USD + 5% of Amazon Total
          </q-card-section>
        </q-card>
        <q-card class=" text-left bg-white text-black col-12 q-mt-md row justify-around">
          <q-card-section class="text-center text-h4 text-primary col-12" style="background-color:#D4CCC4;">
            Example Order
          </q-card-section>
          <q-card-section class="text-center text-h4 col-6 row justify-center">
            <div class="col-12">Item Cost</div>
            <div class="col-10 col-md-6 text-h2 text-center q-mb-md"><q-input v-model="exampleItemCost"  filled  style="" /></div>
          </q-card-section>
          <q-card-section class="text-center text-h4 col-6">
            <div>Amazon Total</div>
            <div class="text-subtitle1">(Includes Sale Tax)</div>
            <div class="q-mt-sm">${{amazonTotalCost.toFixed(2)}}</div>
          </q-card-section>
          <q-card-section class="text-center text-h4 col-12" style="">
            <div>Total You Pay For Delivery</div> 
            <div class="q-mt-sm">${{(baseServiceFee+amazonTotalCost+(percentageServiceFee*amazonTotalCost)).toFixed(2)}}</div>
          </q-card-section>
          <q-card-section class="text-h4 text-weight-regular text-center col-12">
              <router-link :to="{ name: 'ordersPage' }" style="text-decoration:none !important;">
                <q-btn
                  color="primary"
                  label="Place An Order"
                  size="lg"
                  style="color: white"
                  padding="sm"
                  text-color="white"
                ></q-btn>
              </router-link>
          </q-card-section>
        </q-card>
      </div>
    
    </div> 
    <div class="row justify-around items-end no-margin col-12 text-left q-pb-xl q-pt-xl" style="width: 100%; background-color:#D4CCC4;">
      <div class="col-12 text-center text-primary text-h4 q-pb-lg my-font">      
        Demonstration Video
      </div>
      <div class="col-12 col-md-8 text-center text-white text-h4 q-pb-lg">      
        <div class="q-pa-md">
    <q-video
      :ratio="16/9"
      src="https://res.cloudinary.com/dylevfpbl/video/upload/v1669001384/Untitled.mp4"
    />
  </div>
      </div>
    </div>
    <div class="row justify-around items-end no-margin col-12 text-left q-pb-xl q-pt-xl bg-primary" style="width: 100%;">
      <div class="col-12 text-center text-white text-h4 q-pb-lg my-font">      
        Testimonials
      </div>
      <div class="col-11 col-md-3">      
        <q-chat-message
        name="<span class='text-subtitle1 text-white'>u/Sapook</span>"
        text-html
        name-html
        bg-color="white"
        :avatar=shopperAvatar1
        :text="[``]"
        ><div class="text-h5 q-pa-md">
          I really like this idea, not eligible to try but I hope to see some feedbacks soon :) Good luck with your project !
        </div>
        
      </q-chat-message>
      </div>
      <div class="col-11 col-md-3">      
        <q-chat-message
        text-html
        bg-color="white"
        name-html
        name="<span class='text-subtitle1 text-white'>u/ksilverstein</span>"
        :avatar=shopperAvatar2
        :text="[``]"
        ><div class="text-h5 q-pa-md">
          Wow, that's very, very good. Wish I could give you more than one upvote. ... Thank you for doing this.
        </div></q-chat-message>
      </div>
      <div class="col-11 col-md-3">      
        <q-chat-message
        text-html
        name-html
        bg-color="white"
        name="<span class='text-subtitle1 text-white'>First Customer</span>"
        :avatar=shopperAvatar
        :text="[`<span class=''></span>`]"
        ><div class="text-h5 q-pa-md">
          This is really great man! What a great idea!
        </div></q-chat-message>
      </div>
    </div>
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import shopperAvatar from "@/assets/detective.svg"
import shopperAvatar1 from "@/assets/svgs/firstPageIcon.svg"
import shopperAvatar2 from "@/assets/svgs/incognito.svg"
import computer from "@/assets/svgs/monitor.svg"
import monero from "@/assets/svgs/rand.svg"
/* import bitcoin from "@/assets/svgs/bitcoin.svg"
import ethereum from "@/assets/svgs/ethereum.svg"
import litecoin from "@/assets/svgs/litecoin.svg" */
import lockerBig from "@/assets/svgs/amazonLocker.svg"
import footerGlobal from "@/components/footerGlobal.vue"
import { onMounted, ref, computed } from "vue"
require("@lottiefiles/lottie-player")
const exampleItemCost = ref(80)
const estimatedTax = Number(.08)
const baseServiceFee = Number(10)
const percentageServiceFee = Number(.05)
const heroText = 'Anonymous Deliveries With Amazon Lockers'
const heroSubtext = `The Most Private Way To shop Online`
const recentlyBought =[
  { 
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1669749679/recentlyBought/615zM9zW5iL._AC_SL1000_.jpg`,
    name: 'Rock Pi 4C RK3399 Single Board Computer',
    price: '149.98'
  },
  {
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1669750092/recentlyBought/41vjOH-hRIL._AC_SL1000_.jpg`,
    name: `Ledger Nano S Plus Crypto Hardware Wallet`,
    price: '79.00'
  },
  {
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1669750805/recentlyBought/81_zeeqZmbL._AC_SL1500_.jpg`,
    name: `SAMSUNG 980 SSD 500GB PCle 3.0x4, NVMe M.2`,
    price: '56.99'
  }
]
const amazonTotalCost = computed(() => {
  return ((Number(estimatedTax)*Number(exampleItemCost.value))+Number(exampleItemCost.value))
})
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
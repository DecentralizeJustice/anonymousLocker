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
              <router-link :to="{ name: 'placeLockerOrder' }" style="text-decoration:none !important;">
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
            <!-- ${{baseServiceFee}} USD +  -->
            ${{baseServiceFee}} USD + {{100*percentageServiceFee}}% of Amazon Total
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
            <div class="text-subtitle1" v-if="!giftcardOnlyOrder">(Includes Estimated 8% Sale Tax)</div>
            <div class="text-subtitle1" v-if="giftcardOnlyOrder">(No Sales Tax on Giftcards)</div>
            <div class="q-mt-sm">${{amazonTotalCost.toFixed(2)}}</div>
          </q-card-section>
          <q-card-section class="text-center text-h4 col-12" style="">
            <div>Total You Pay For Delivery</div> 
            <div class="q-mt-sm">${{(baseServiceFee+amazonTotalCost+(percentageServiceFee*amazonTotalCost)).toFixed(2)}}</div>
          </q-card-section>
          <q-card-section class="text-center text-h5 col-12" style="">
            <q-toggle
              v-model="giftcardOnlyOrder"
              color="green"
              label="Order Only Has Giftcards"
            />
          </q-card-section>
          <q-card-section class="text-h4 text-weight-regular text-center col-12">
              <router-link :to="{ name: 'placeLockerOrder' }" style="text-decoration:none !important;">
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
<div class="row justify-evenly q-pt-xl col-12 ">
        <div class="col-12 text-center text-primary text-h3 q-pb-lg my-font">
          How It Works
        </div>
    <div class="row justify-evenly q-py-xl col-12">
      <div class="row col col-10 col-md-4 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-white q-pa-lg bg-primary" style="border-radius: 10px;">
            <div class="text-h4 my-font text-center" style="">
              Step 1
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span v-html="step1"></span>
    
            </div>
          </div>
        </div>
      </div>
        <div class="col col-10 col-md-7 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dbdfbvzyl/image/upload/v1671337165/2022-12-17_22-44-25_online-video-cutter.com_bsmg4d.gif" />
        </div>
    </div>

</div>
    <div class="row justify-evenly q-py-xl col-12 bg-primary">
        <div class="col col-10 col-md-8 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dbdfbvzyl/image/upload/v1671420916/trimmedFinal_bgi9gu.gif" />
        </div>
      <div class="row col col-10 col-md-3 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-primary q-pa-sm" style="border-radius: 10px;background-color:#D4CCC4;">
            <div class="text-h4 my-font text-center" style="">
              Step 2
            </div>
            <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%"><span
                v-html="step2"></span>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-evenly q-py-xl col-12 ">
  <div class="row col col-10 col-md-5 items-center align-center row">
    <div class=" col col-12 items-center align-center row">
      <div class="text-left text-center bg-primary text-white q-pa-lg" style="border-radius: 10px;">
        <div class="text-h4 my-font text-center" style="">
          Step 3
        </div>
        <div class="text-h5 text-weight-regular q-mt-md q-pa-sm" style="line-height: 130%;"><span
            v-html="step3"></span>

        </div>
      </div>
    </div>
  </div>
  <div class="col col-10 col-md-5 desktop-only row">
      <q-img class=""
      loading="lazy"
      src="https://res.cloudinary.com/dbdfbvzyl/image/upload/v1671332163/smallLocker_c03a46.gif" />
  </div>
  <div class="col-12 text-center text-white text-h3 q-pt-lg my-font">
    <a  style="color:  #FFFFFF" href="https://youtu.be/ivf5EfCAGgo" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
        </div>
</div>
    <div class="row justify-around items-end no-margin col-12 text-left q-pb-xl q-pt-xl bg-primary" style="width: 100%;">
      <div class="col-12 text-center text-white text-h4 q-pb-lg my-font">      
        Testimonials
      </div>
      <div class="col-11 col-md-3">      
        <q-chat-message
        name="<span class='text-subtitle1 text-white'>u/Customer</span>"
        text-html
        name-html
        bg-color="white"
        :avatar=shopperAvatar1
        :text="[``]"
        ><div class="text-h5 q-pa-md">
          Wow this is a great project... This process was great.
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
const exampleItemCost = ref('80')
const estimatedTaxRateOnPhysicalItems = Number(.08)
const baseServiceFee = Number(5)
const percentageServiceFee = Number(.03)
const giftcardOnlyOrder = ref(false)
const heroText = 'Anonymous Deliveries With Amazon Lockers'
const heroSubtext = `The Most Private Way To Shop Online`
const step1 = `You place an order with me anonymously. The only information I need is a link to your item
 and the zipcode that you want the order delivered to.`
const step2 = `I place your order and update you throughout the process. If you have any questions or concerns you can
message me using the platform.`
const step3 = `I message you the code to the locker when your order arrives. You then pick up your order. You have 3 days to 
to pick up your order.`
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
const amazonTotalCost = computed(() => {
  const itemCost = exampleItemCost.value.replaceAll(',', '')
  return ((estimatedTax.value*Number(itemCost))+Number(itemCost))
})
const estimatedTax = computed(() => {
  if (giftcardOnlyOrder.value) {
    return Number(0)
  }
  return estimatedTaxRateOnPhysicalItems
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
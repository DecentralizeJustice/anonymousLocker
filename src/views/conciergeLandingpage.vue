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
                      Create Your Shopping List and <br />Place Order With Us
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="monero" class="" :class="{'desktopIconsPayment': $q.screen.gt.sm, 'mobileIconsPayment': $q.screen.lt.md}" />

                    <p class="text-subtitle1 text-weight-medium">
                      Pay For Your Order With Monero
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 3.</p>
                    <img :src="lockerBig" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      We Process and Send Your Order to You
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <router-link :to="{ name: 'placeConciergeOrder' }" style="text-decoration:none !important;">
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
      <div class="col col-10 col-md-3 desktop-only justify-center items-center align-center row">
        <div class="col-10 justify-center items-center align-center row q-my-xl" style="">
          <q-img
          class="rounded-borders"
            src="https://res.cloudinary.com/dylevfpbl/image/upload/v1673999438/landingpage/dgoon21_smiling_delivery_person_holding_package_in_front_of_gre_2a5a55b1-7fd4-4bf0-9cc6-a8df34c6ad4a.png"
          />
              </div>
      </div>
    </div>
    <div class="row justify-around col-12 items-center  q-py-xl bg-primary" style="width: 100%;">
      <div class="col-12 col-md-6 text-center row justify-center q-px-md items-center desktop-only">
        <div class="col-12 text-center text-white text-h4 q-pb-lg my-font">      
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
              <div class="text-subtitle1">From: ${{item.from}}</div>
            </q-card-section>
          </q-card>

        </div>
      </div> 
      </div>
      <div class="col-11 col-md-4 text-center row justify-center items-center row">      
        <!-- <q-card class=" text-center bg-white text-black col-12">
          <q-card-section class="text-center text-h4  text-weight-regular text-primary " style="background-color:#D4CCC4;">
            Service Fee:
          </q-card-section>
          <q-card-section class="text-center text-h4  text-weight-regular">
             ${{baseServiceFee}} USD +
            ${{baseServiceFee}} USD + {{100*percentageServiceFee}}% of Amazon Total
          </q-card-section>
        </q-card> -->
        <q-card class=" text-left bg-white text-black col-12 q-mt-md row justify-around">
          <q-card-section class="text-center text-h4 text-primary col-12" style="background-color:#D4CCC4;">
            Example Order
          </q-card-section>
          <q-card-section class="text-center text-h4 col-6 row justify-center">
            <div class="col-12">Item Cost (USD)</div>
            <div class="col-10 col-md-6 text-h2 text-center q-mb-md"><q-input v-model="exampleItemCost"  filled  style="" /></div>
          </q-card-section>
          <q-card-section class="text-center text-h4 col-6 row justify-center">
            <div class="col-12">Sales Tax (%)</div>
            <div class="col-10 col-md-6 text-h2 text-center q-mb-md"><q-input v-model="salesTax"  filled  style="" /></div>
          </q-card-section>
          <q-card-section class="text-center text-h4 col-6 row justify-center">
            <div class="col-12">Extra (USD)</div>
            <div class="col-10 col-md-6 text-h2 text-center q-mb-md"><q-input v-model="tip"  filled  style="" /></div>
          </q-card-section>
          <q-card-section class="text-center text-h4 col-6">
            <div>Order Total</div>
            <div class="text-subtitle1" v-if="!giftcardOnlyOrder">(Includes {{salesTax}}% Sale Tax)</div>
            <div class="q-mt-sm">${{amazonTotalCost.toFixed(2)}}</div>
          </q-card-section>
          <!-- <q-card-section class="text-center text-h4 col-12" style="">
            <div>Total You Pay For Delivery</div> 
            <div class="q-mt-sm">${{(baseServiceFee+amazonTotalCost+(percentageServiceFee*amazonTotalCost)).toFixed(2)}}</div>
          </q-card-section> -->
          <!-- <q-card-section class="text-center text-h5 col-12" style="">
            <q-toggle
              v-model="giftcardOnlyOrder"
              color="green"
              label="Order Only Has Giftcards"
            />
          </q-card-section> -->
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
        <div class="col col-10 col-md-4 desktop-only row">
          <q-img class="" loading="lazy"
          src="https://res.cloudinary.com/dylevfpbl/image/upload/v1674010155/landingpage/dgoon21_person_sitting_at_computer_shopping_online_23e2fe8a-43f1-4ffb-85a7-9ccf47e5f883.png" />
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
  <div class="col col-10 col-md-4 desktop-only row">
      <q-img class=""
      loading="lazy"
      src="https://res.cloudinary.com/dylevfpbl/image/upload/v1674010309/landingpage/dgoon21_package_with_monero_logo_on_it_laying_at_front_door_of__221281d4-d484-4567-93e7-34df5a227d4a.png" />
  </div>
<!--   <div class="col-12 text-center text-white text-h3 q-pt-lg my-font">
    <a  style="color:  #FFFFFF" href="https://youtu.be/ivf5EfCAGgo" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
        </div> -->
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
          Not the fastest service, but its reliable. I hope you have success.
        </div>
        
      </q-chat-message>
      </div>
      <div class="col-11 col-md-3">      
        <q-chat-message
        text-html
        bg-color="white"
        name-html
        name="<span class='text-subtitle1 text-white'>Customer</span>"
        :avatar=shopperAvatar2
        :text="[``]"
        ><div class="text-h5 q-pa-md">
          This service has potential!
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
          This is cool.
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
import lockerBig from "@/assets/svgs/home.svg"
import footerGlobal from "@/components/footerGlobal.vue"
import { onMounted, ref, computed } from "vue"
require("@lottiefiles/lottie-player")
const exampleItemCost = ref('80')
const salesTax = ref(8)
const tip = ref(0)
/* const baseServiceFee = Number(0)
const percentageServiceFee = Number(.00) */
const giftcardOnlyOrder = ref(false)
const heroText = 'Free Monero Concierge Service'
const heroSubtext = `Spend Monero At Any Online Retailer!`
const step1 = `You place an order at our website. You can choose any online retailer. We encrypt all of your sensitive information.`
const step2 = `We place your order and update you throughout the process. If you have any questions or concerns you can
message me using the platform.`
const step3 = `Your order ships to you. Once your order arrives and you confirm that your order is correct, we delete your sensative info from our system and close you order out.`
const recentlyBought =[
  { 
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1671338257/recentlyBought/81lJyLrRVeL._AC_SL1500__1_-min.jpg`,
    name: 'Crucial MX500 4TB 3D NAND Internal SSD',
    price: '237.99',
    from: 'Amazon'
  },
  {
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1674008562/recentlyBought/PS5-GOWR-console-bundle-front.png`,
    name: `Sony PlayStation 5, Digital Edition Console`,
    price: '549.60',
    from: 'Walmart'
  },
  {
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1674008957/recentlyBought/s-l1600.jpg`,
    name: `Google Pixel 6 - 6 Pro - 128/256 GB Phone Black`,
    price: '230',
    from: 'Ebay'
  }
]
const amazonTotalCost = computed(() => {
  const itemCost = exampleItemCost.value.replaceAll(',', '')
  return ((estimatedTax.value*Number(itemCost))+Number(itemCost)+Number(tip.value))
})
const estimatedTax = computed(() => {
  if (giftcardOnlyOrder.value) {
    return Number(0)
  }
  return estimatedTaxRateOnPhysicalItems.value
})
const estimatedTaxRateOnPhysicalItems = computed(() => {
  return Number(salesTax.value*.01)
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
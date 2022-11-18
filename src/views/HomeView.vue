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
                    <img :src="monero" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" /><br />
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
      <div class="col-12 col-md-6 text-center row justify-center q-px-md items-center">      
        <div class="col-12 q-my-lg">
            <div
              class="text-h4 text-weight-regular text-left text-white"
              style="line-height: 120%; font-weight: 400; font-style: italic;"
            >
            "
              F**k sake! 

              This is my actual home address in the email.

              I don't even know what to say."
            </div>
            <div
              class="text-h6 text-weight-regular text-center no-padding text-white q-mt-sm"
            >- @SalehAhmedd_, Ledger Databse Leak Victim
            </div>

        </div>
        <div class="col-12 q-my-lg">
            <div
              class="text-h4 text-weight-regular text-left text-white"
              style="line-height: 120%; font-weight: 400; font-style: italic;"
            >
            "They had my home address. I was told bad things would happen if I didn't pay them $50,000 in bitcoin."
            </div>
            <div
              class="text-h6 text-weight-regular text-center no-padding q-mt-sm text-white"
            >- Jameson Lopp, Extortion Victim
            </div>

        </div>
      </div>
      <div class="col-11 col-md-4 text-center row justify-center items-center q-pt-md">      
        <q-card class=" text-left bg-blue-grey-11 text-black col col-12">
          <q-card-section>
            <div
              class="text-h4 text-weight-regular text-center"
              style="line-height: 120%; font-weight: 300"
            >
            <span style="text-decoration: underline;">All</span> other methods fail at protecting your privacy and safety when you shop online.
            </div>
            <div
              class="text-h4 text-weight-regular text-center q-mt-sm"
              style="line-height: 120%;"
            >
            <!-- <span style="text-decoration: underline;">Don't take that risk!</span> -->
            <div class="text-center q-mt-sm">
              <img
                  src="@/assets/svgs/homeLock.svg"
                  style="max-width: 7vw;"
                  class="q-my-sm"
                /><br/>
              <router-link :to="{ name: 'ordersPage' }" style="text-decoration:none !important;">
                <q-btn
                  color="primary"
                  label="Protect Your Home Address"
                  size="lg"
                  style="color: white"
                  padding="sm"
                  text-color="white"
                ></q-btn>
              </router-link>
            </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    
    </div> 
    <div class="row justify-around items-end no-margin col-12 text-left q-pb-xl q-pt-xl" style="width: 100%; background-color:#D4CCC4;">
      <div class="col-12 col-md-8 text-center text-white text-h4 q-pb-lg">      
        <div class="q-pa-md">
    <q-video
      :ratio="16/9"
      src="https://www.youtube.com/embed/ivf5EfCAGgo"
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
  </q-page>
</template>

<script setup>
import shopperAvatar from "@/assets/detective.svg"
import shopperAvatar1 from "@/assets/svgs/firstPageIcon.svg"
import shopperAvatar2 from "@/assets/svgs/incognito.svg"
import computer from "@/assets/svgs/monitor.svg"
import monero from "@/assets/svgs/rand.svg"
import lockerBig from "@/assets/svgs/end.svg"
import { onMounted } from "vue"
require("@lottiefiles/lottie-player")
const heroText = 'Anonymous Deliveries With Amazon Lockers'
const heroSubtext = `Extended Your Digital Privacy To The Physical World`
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
.walletImage
  border-radius: 25px 
  width: 100%
  height: auto
.mobileIcons
  width:  30%
</style>
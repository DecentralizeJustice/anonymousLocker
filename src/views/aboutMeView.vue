<template>
  <q-page style="width: 100%; background-color:#D4CCC4;"
  >
    <!-- page content -->

    <div class="row justify-evenly q-py-xl col-12 " >
      <div class="row col col-10 col-md-6 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center bg-primary text-white q-pa-lg" style="border-radius: 10px;">
            <div
              class="text-h4 my-font text-center"
              style=""
            >
              {{heroText}}
            </div>
            <div
              class="text-h5 text-weight-regular q-mt-md q-pa-sm"
              style="line-height: 120%"
            ><span v-html="heroSubtext"></span>

            </div>
          </div>
        </div>
      </div>
      <div class="col col-10 col-md-3 desktop-only row">
        <div class="col-12 justify-center items-center align-center row " style="min-height:40vh;">
          <q-img
            class="frame"
            src="https://res.cloudinary.com/dylevfpbl/image/upload/v1607632279/test.jpg"
            style="max-width: 100%;"
          />
              </div>
      </div>
    </div>
    <div class="row justify-evenly q-py-xl col-12 bg-primary">
      <div class="row col col-10 col-md-6 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center text-primary q-pa-lg" style="border-radius: 10px;background-color:#D4CCC4;">
            <div
              class="text-h4 my-font text-center"
              style=""
            >
              {{heroText1}}
            </div>
            <div
              class="text-h5 text-weight-regular q-mt-md q-pa-sm"
              style="line-height: 120%"
            ><span v-html="heroSubtext1"></span>

            </div>
          </div>
        </div>
      </div>
      <div class="col col-10 col-md-3 desktop-only row">
        <div class="col-12 justify-center items-center align-center row " style="min-height:40vh;">
          <q-img
            class=""
            src="https://res.cloudinary.com/dylevfpbl/image/upload/v1669906133/david-pisnoy-0nZwyizy7I4-unsplash.jpg"
            style="max-width: 100%;"
          />
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
const heroText = `Who Created Anonymous Locker?`
const heroSubtext = 
`I have been making projects in the crypto space since 2016. Since my first project,
Incognito Deals, I have been obsessed with the potential for cryptocurrencies to make a better and more private e-commerce experience. 
In the past I have built an educational multisig bitcoin wallet, an anonymous crypto trivia show, and 
contributed to several open source projects in the space.
These past experiences have set me up perfectly to create Anonymous Locker.<br/>
- Donely Gunn 😎`
const heroText1 = `Why Does Anonymous Locker Exist?`
const heroSubtext1 = 
`The only way to protect information is to never give it in the first place so I decided to build a service that required the 
least information needed legally from customers. I did some research and I made a amazon locker specific version of one of my earliest projects, 
Incognito Deals. Once I combined
the anonymity of Incognito deals with the accessibility of thousands of amazon lockers, I knew I was on to something. The monero community loved the idea, 
and a week later Anonymous Locker was born. I hope to add things like anonymous loyalty programs and maybe expand to other retailers in the future.`
onMounted(() => {

    })
</script>
<style lang="sass" scoped>
@font-face
  font-family: customfont
  src: url(../styles/ArchivoBlack-Regular.ttf)
.my-font 
  font-family: 'customfont'

.frame 

  border: 3px solid #ccc

.desktopIconsHouse
  width: 25%
.mobileIconsHouse
  width: 40%
</style>
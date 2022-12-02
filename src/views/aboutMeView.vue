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
              style="line-height: 130%;"
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
      <div class="col col-10 col-md-3 desktop-only row">
        <div class="col-12 justify-center items-center align-center row " style="min-height:40vh;">
          <q-img
            class=""
            src="https://res.cloudinary.com/dylevfpbl/image/upload/v1669906133/david-pisnoy-0nZwyizy7I4-unsplash.jpg"
            style="max-width: 100%;"
          />
              </div>
      </div>
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
              style="line-height: 130%"
            ><span v-html="heroSubtext1"></span>

            </div>
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
const heroText = `Who Created Anonymous Locker?`
const heroSubtext = 
`I have been making projects in the crypto space since 2017. Since my first crypto business,
<a href="https://www.reddit.com/r/IncognitoDeals/" style='color: inherit; text-decoration: underline;'>Incognito Deals</a>
, I have been obsessed with the potential for cryptocurrencies to make a better and more private e-commerce experience. 
In the past, I have built a 
<a href="https://guidingwallet.app/" style='color: inherit; text-decoration: underline;'>educational multisig bitcoin wallet</a>, 
an <a href="https://www.giftmonero.app/" style='color: inherit; text-decoration: underline;'>gifting monero app</a>, 
a <a href="https://guidingwallet.app/triviashow" style='color: inherit; text-decoration: underline;'>anonymous crypto trivia show</a>, and
contributed to several 
<a href="https://github.com/spesmilo/electrum/issues/6157" style='color: inherit; text-decoration: underline;'>open source projects</a> 
in the space.
These past experiences have set me up perfectly to create Anonymous Locker.<br/>
- Donely Gunn 😎`
const heroText1 = `Why Does Anonymous Locker Exist?`
const heroSubtext1 = 
`I believe that the only way to protect information is to never give it in the first place.  Based on this motto I decided to build a service that required the 
least information needed legally from customers. I did some research and I made an amazon locker specific version of one of my earliest projects, 
<a href="https://www.reddit.com/r/IncognitoDeals/" style='color: inherit; text-decoration: underline;'>Incognito Deals</a>
. Once I combined
the anonymity of Incognito deals with the accessibility of thousands of amazon lockers, so I knew I was on to something. The monero community loved the idea, 
and a week later Anonymous Locker was born. I hope to add things like anonymous loyalty programs and maybe expand to other retailers in the future.`
onMounted(() => {

    })
</script>
<style lang="sass" scoped>
$link-color: #FFFFFF
@font-face
  font-family: customfont
  src: url(../styles/ArchivoBlack-Regular.ttf)
.my-font 
  font-family: 'customfont'

.frame 
  border: 3px solid #ccc
a:visited
  color:$link-color
  text-decoration: none
a:hover
  color:#004E64
  text-decoration: underline
a:active
  color:$link-color
  text-decoration: none

</style>
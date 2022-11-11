<template>
  <q-page
    style="width: 100%; background-image: linear-gradient(to right top, #3d80d1, #576caa, #5a5b84, #514c61, #414042);"
    class="q-pa-md row items-stretch text-center align-center justify-center"
  >
  <div class="row justify-center col col-12 col-md-11 align-center items-center" >
    <div class="row items-center justify-center col-12 q-gutter-y-xl" >
      <q-card class="col-12 col-md-7">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Message Me</div>
      </q-card-section>

      <q-separator />
      <q-card-section class="">
        <div class="text-body1">      
          If you have not placed an order, and want to message me about something shoot me a message below. 
      If you have placed an order and the chat is working, you should communicate with me using that chat instead.</div>
      </q-card-section>
      <q-card-section class="">
        <div class="row justify-around q-gutter-y-md">
      <div class="col-12 col-md-6 ">
        <span class="text-h6">{{successMessage}}</span>
        <div class="q-pa-md" style="">
    <q-input
      v-model="text"
      filled
      type="textarea"
    />
  </div>
      </div>
    </div>
    <div class="row justify-around q-gutter-y-md">
      <div class="col-12 col-md-6 ">
        <q-btn @click="sendMessage"  color="positive" icon="send"> Send Message</q-btn>
      </div>
    </div>
      </q-card-section>  


    </q-card>
    <q-card class="col-12 col-md-7">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Past Public Messages</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="text-left  q-pa-md">
        <div class="text-body1 bg-grey-10 q-pa-md text-white">      
          Question 3: I found you through the Monero subreddit on Reddit. It is interesting that you can pay for Amazon products with Monero and receive them in your Amazon locker. Do you have plans to support Amazon.co.jp for that? I would like to use this service in Japan!</div>
          <div class="text-body1 q-pa-md">      
          Answer: Thanks for the support! I would love to expand globally eventually but now I only support US Amazon. Given that I am based in the usa, I would have to do more research into ordering to amazon lockers in other countries. My app has chat built in once you pay for an item, I do not support session at this time.</div>
      </q-card-section>
      <q-card-section class="text-left  q-pa-md">
        <div class="text-body1 bg-grey-10 q-pa-md text-white">      
          Question 2: Ok so you have your own app for this service? Download from Google store?</div>
          <div class="text-body1 q-pa-md">      
          Answer: Hi. I only have a web app for my srvices. If you want to place an order you can place an order in the orders tab. Here is a demo video of how it works:
          https://www.youtube.com/watch?v=Al7NJsf_fAU </div>
      </q-card-section>
      <q-card-section class="text-left  q-pa-md">
        <div class="text-body1 bg-grey-10 q-pa-md text-white">      
          Question 1: Hello buddy! I placed an order but couldnt send the xmr in time
          When i put the 4 words nothings comes up, should i just redo the order?</div>
          <div class="text-body1 q-pa-md">      
          Answer: Hi. You should not refresh the page. It will take you to the correct page once you pay. There is a button at the bottom that says something like "Refresh Amount Sent", you can hit this button to check and once your payment is received the page will automatically take you to the correct page. You should not refresh the payment page.
        The app does not store your shopping cart, till you pay for privacy reasons. So you must place the order again. Sorry for the inconvenience. If you have any questions, feel free to shoot me another message.</div>
      </q-card-section>
      

      <q-separator />
    </q-card>
    </div>
  </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue"
const axios = require('axios')
const text = ref('')
const successMessage = ref('')
async function sendMessage() {
  if (text.value.length < 1) {
    return
  }
  const results = await axios.post('/.netlify/functions/sendMeMessage', { message: text.value })
  console.log(results)
  text.value = ''
  successMessage.value = 'Messge Sent!'
}
</script>

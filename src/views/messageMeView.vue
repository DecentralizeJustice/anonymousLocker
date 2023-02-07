<template>
  <q-page
    style=""
    class="row items-stretch text-center align-center justify-center bg-primary"
  >
  <div class="row justify-center col col-12 col-md-11 align-center items-center q-py-xl" >
    <div class="row items-center justify-center col-12 q-gutter-y-xl" >
      <q-card class="col-11 col-md-7">
      <q-card-section class="text-white bg-grey-7">
        <div class="text-h6">Ask Me A Question</div>
      </q-card-section>

      <q-separator />
      <q-card-section class="">
        <div class="text-body1 text-left">      
          If you have not placed an order and have a question for me, shoot me a message here. 
      If you have placed an order and the chat is working, you should communicate with me using that chat instead. 
      I will answer your question publicly below, so don't mention any private information. I always respond within 12 hours, so check back soon!</div>
      </q-card-section>
      <q-card-section class="">
        <div class="row justify-around q-gutter-y-md">
      <div class="col-11 col-md-6 ">
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
        <q-btn @click="sendMessage"  color="positive" icon="send" :disable="buttonDisabled"> Send Message</q-btn>
      </div>
    </div>
      </q-card-section>  


    </q-card>
    <q-card class="col-12 col-md-7">
      <q-card-section class="text-white bg-grey-7">
        <div class="text-h6">Past Public Messages</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="text-left  q-pa-md" v-for="(item, index) in questions" :key="item.q">
        <div class="text-body1 bg-grey-10 q-pa-md text-white">
          Question {{getCorrectIndex(index)}}:    <br/> {{item.q}}   
          </div>
          <div class="text-body1 q-pt-sm">
            Answer: <p v-html="item.a"></p>  
          </div>
      </q-card-section>
      
      <q-separator />
    </q-card>
    </div>
  </div>
  <footerGlobal/>
  </q-page>
</template>

<script setup>
import { ref } from "vue"
import footerGlobal from "@/components/footerGlobal.vue"
const axios = require('axios')
const text = ref('')
const successMessage = ref('')
const buttonDisabled = ref(false)
const questions = [
  { q: 
    `Hello, just so it’s clear for me, people want to buy stuff off Amazon but are spending with XMR, since XMR is not a payment method on their site the “earner” buys the 
    item which will include shipping info I suppose, with fiat (credit card) once the purchase is complete the “earner” receives the XMR? The earner has to deposit 5 XMR worth 
    in USD regardless of the purchase amount? How does one make the deposit/ where do the funds sit? And after order is purchased how long until deposit is received back and XMR credited? 
    It says if a dispute you will need login info …. As in user ID and password to the earners AMZ acct, is that right? And what about shipping issues or returns, how is that handled?  
    Sorry for the lengthy questions, just want to make sure ai understood the FAQ’s and any nuances`,
    a: `Wow this is a great question!
    <ol>
      <li>Deposits are made on our site at the earner tab. 
      Yes the deposit system works as you have said. We hold the funds until both sides are happy and we release the funds. The earner deposits 5 USD.</li>
      <li>We push the receiver to respond within a day of them receiving the item so that we can release the funds to the earner.</li>
      <li>Yes we handle disputes that way. The earner does not support refunds. The shopper has to handle that on their end since the order should be marked as a gift.
        All issues will be handled according to who is in the wrong. If the earner completed their end as they were instructed they will not be punished.
        If there is a shipping issue out of control of the shopper or earner we will consult and see what both parties would like. That could result in
        a new order being made, or a refund to both parties.  We have not had any issues yet, but if we do we will write a post- mortem of the situation to 
        document how edge cases were handled.</li>
    </ol>
    Thanks for the great questions, hopefully I did a good job at answering them!
    `
  },
{
    q: `If you were an earner placing a deposit at 4pm on Sunday and your order is not showing up, please shoot me a message here. `,
    a: `There was a mistake in your order and I need you to message me here. Thanks again!`
  },
{
    q: `Do you allow multiple items in one order? The FAQ uses singular "item" so it's not clear. The $5 fee is a lot for cheap items and some of mine don't meet the purchase minimum.`,
    a: `Hi Friend, we allow multiple items to be bought and delivered to the same locker. Most of our orders involve multiple items. I will make the faq more clear about that!`
  },
  {
    q: `Hi, I'm in Japan but I want to order from Amazon.com USA, is it possible to deliver to Japan amazon locker?`,
    a: `Shoot me another message here with the item you want and I will look into it for you!`
  },
{
    q: `Definitely interested for you service in europe, and particularly France.
I  hope that your service will at least survive in the US, cheers.`,
    a: `Thanks for the support. I can deliver to amazon lockers in France. Just place an order and I will work it out for you!`
  },
{
    q: `Hello, I live in Australia. AFAIK ProxyStore <https://dys2p.com/en/index.html> only forwards parcels to German addresses, your service only delivers to amazon lockers in the US and <https://purse.io/> does not support amazon lockers. 
    Do you have any recommendations on similar services or privacy-respecting parcel forwarders that ship to Australia?`,
    a: `I focused just on the United States at launch to start small, but I will consider expanding to Australia if you would like to be my first
    international customer. If you wish to try out my services just submit an order. If I can't provide you with a good service, I will simply refund you. If you have a problem filling out the form, just place in fake info, and that we can have a private chat where we can work on your order. `
  },
  {
    q: `I found you through the Monero subreddit on Reddit. It is interesting that you can pay for Amazon products with Monero and receive them in your Amazon locker. Do you have plans to support Amazon.co.jp for that? I would like to use this service in Japan!`,
    a: `Thanks for the support! I would love to expand globally eventually but now I only support US Amazon. Given that I am based in the usa, I would have to do more research into ordering amazon lockers in other countries. My app has chat built in once you pay for an item, I do not support sessions at this time.`
  },
  {
    q: `Ok so you have your own app for this service? Download from Google store?`,
    a: `Hi. I only have a web app for my services. If you want to place an order you can place an order in the orders tab. Here is a demo video of how it works:
          https://www.youtube.com/watch?v=Al7NJsf_fAU`
  },
  {
    q: `Hello buddy! I placed an order but couldnt send the xmr in time
          When i put the 4 words nothings comes up, should i just redo the order?`,
    a:`Hi. You should not refresh the page. It will take you to the correct page once you pay. There is a button at the bottom that says something like "Refresh Amount Sent", you can hit this button to check and once your payment is received the page will automatically take you to the correct page. You should not refresh the payment page.
        The app does not store your shopping cart, till you pay for privacy reasons. So you must place the order again. Sorry for the inconvenience. If you have any questions, feel free to shoot me another message.`
  }
]
function getCorrectIndex(plainIndex){
  return questions.length - plainIndex
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sendMessage() {
  if (text.value.length < 1) {
    return
  }
  buttonDisabled.value = true
  await sleep(3000)
  buttonDisabled.value = false
  const results = await axios.post('/.netlify/functions/sendMeMessage', { message: text.value })
  console.log(results)
  text.value = ''
  successMessage.value = 'Messge Sent!'
}
</script>

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
          You can check out our <a href="/faq">faq here</a> or our past questions below for a quicker response. 
          If you have not placed an order and have a question for me, shoot me a message here.
      I will answer your question publicly below. I always respond within 1 day, so check back soon!</div>
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
{
    q: `Hi, I love your venture! Despite not a customer, I routinely check your update and I hope you have great success.

There's one term I hope you can clarify though: when you mention you have 5,500 USD revenue, are you actually talking about Gross Merchandise Volume (GMV_?

Revenue and Gross Merchandise Volume, (GMV) are two distinct financial metrics that businesses use to measure different aspects of their performance.

1. **Revenue**: This refers to the income that a business earns from its normal business operations, typically from the sale of goods and services to customers. Revenue is the top line or gross income figure from which costs are subtracted to determine net income. In the case of a company that sells goods or services directly to customers, the revenue is simply the total amount of money received from those sales.

2. **Gross Merchandise Volume (GMV)**: This refers to the total value of all transactions of goods or services sold through a particular marketplace over a specific time period. This metric is often used by online marketplaces, such as e-commerce platforms, where the platform itself does not sell its own goods or services but facilitates transactions between sellers and buyers.

The key difference between the two lies in what they measure and include. Total Transaction Volume includes the total value of all transactions, regardless of who ultimately receives the money. Revenue, on the other hand, only includes the money that the company itself earns, which could be a fraction of the total transaction volume if the company operates a marketplace model and earns revenue through fees or commissions.

Further reading: https://medium.com/@algovc/10-marketplace-kpis-that-matter-22e0fd2d2779
`,
    a: `Hi.From your question, the correct term I should use is GMV of ~5,500 USD. I will read over the material you sent me and try to be more clear in my future post.
    Thanks for reaching out and correcting me, I studied computer science not accounting so my vocab def needs refinement! Thanks again.`
  },
{
    q: `I accidentally placed two orders for what is effective the same item (different product ID). I did this because I mistakenly lost the last word of my phrase the first attempt. Will I be refunded to the specified refund address?
`,
    a: `Hi. I will refund you. Check your order chat (either one, I sent a message in both chats).`
  },
  {
    q: `I wanted to do a concierge order. On Question 13, it says I don't provide my address until after I checkout. You said, "Doing things this way ensures that we only collect your sensitive information( such as your address) when we know for 100% certainty we can complete your order...`,
    a: `Thanks for the great question! You can place dummy informtion in the address info if you would like. I will then simply ask for your real information when I confirm that we can process your order. Sorry for any confusion.`
  },
{
  q: `I'm looking to order a fairly expensive item as a Canadian. Do you place orders within Canada for Canadian orders? (do I need to worry about import charges?).?`,
  a: `There would be aroudn a 5% import tax on our mail forwarding service only. If you want to order something for delivery via an amazon locker or something from Canada there is no import fee..`
},
{
  q: `When ordering customizable items such as stamps, do I just put the customizable test in the notes followed by the box where it needs to be put?`,
  a: `Yes. That should work. If I have any questions, I can also message you in chat after you place an order.`
},
{
  q: `Hello, would it be possible to forward a package to InPost paczkomaty (polish parcel lockers company)? For example order something on aliexpress and forward it to InPost parcel locker.`,
  a: `Hi. We do not support this type of service currently.`
},
{
  q: `Why I can't access my order?`,
  a: `Hi. Your order should be working now. Sorry for the issue!`
},
{
  q: `One question though, does Netherlands have a
Amazon collection points or is delivery at an appointed address possible?`,
  a: `In your case, it would be delivery to an address.  `
},
{
  q: `regarding question 36;
I can not find the Netherlands in country options..`,
  a: `Sorry. I just added it. It should be there now. We dont support email at this time, unfortunately. You can also fill in dummy data for now, and I can collect more data in the order chat. `
},
{
  q: `Hello-this is question regarding buying.
Can you buy stuff from ebay USA and that be
delivered to the Netherlands(EUROPE)`,
  a: `Yes. You should place an address order. If your order is not possible, we will simply refund you 100%.`
},
{
  q: `can i buy only from amazon?`,
  a: `No, you can buy anything online that isnt a subscription. For those we can only do giftcards.`
},
{
  q: `if we have a specific question about something that is more private, and dont have an order yet, how do we contact you? For example I want to ask about a specific item to see if it is okay to be purchased.`,
  a: `You can send me a message here,I will keep all sensitive info private.`
},
{
  q: `Does your Concierge service only allow Amazon? Or are other websites allowed??`,
  a: `Yes. We support most online retailers.`
},
{
  q: `Would the locker service be available for Canadian users?`,
  a: `Yes. We have a drop-down at checkout that lets you select Canada.`
},
{
  q: `Does your Concierge service only allow Amazon? Or are other websites allowed??`,
  a: `Yes. We support most online retailers.`
},
{
  q: `I got this error when I tried to submit an order "Order Sub-total Minimum is minOrderamount (USD)"
`,
  a: `The min order amount is 25 dollars since thats amazon's min order amount for free shipping.
  The error should be more descriptive now. Thanks for pointing that out!`
},
{
  q: `Hey there! Is this service also available for Belgium?`,
  a: `Yes. If there is an amazon locker near you we can deliver to it. Our other delivery options also work!`
},
{
q: `is it possible to buy steam deck from you and give you the address to my shipment forwarder?`,
  a: `Yes. We do things like this often. We charge 5% of the item price, and shipping to the forwarder. 
  You can place an address order, and we will chat more in the web app.`
},
{
q: `I tried viewing my order after I submitted and it said the account doesn't exist.`,
  a: `Hi. I can see your order info, so your order was placed successfully. You can try logging in again and if that does not work, you can message me your 8 words here.`
},
{
    q: `Earner account bond refund.  Look forward to using this as a buyer too.`,
      a: `Sent! Thanks for trying out our earning feature. Hopefully we will build up more demand and bring the program back.`
    },
{
    q: `I had an earner account before, and paid the bond. Can I get that refunded?

My 6 words aren't working to get into the account to message you directly, since the upgrade.

Don't want to post the words here unless instructed to, since these are public questions, but can if you just automatically redact them.`,
      a: `Of course! Just send me your 6 words here and your xmr refund address.`
    },
{
    q: `Re: Question 23`,
      a: `Sent!`
    },
{
    q: `Hi. I recently picked up an order, but I never saw the XMR refund from the deposit come through. I would have just asked in the chat, but my seed words no longer work (using "ability" for the 7th and 8th word)`,
    a: `Just message me your 6 words here and I will get you your refund. Thanks for reaching out.`
},
{
    q: `hey bud,[redacted] here, tried to login to the chat again to get [redacted] but "account not found" (used "ability" for the last 2).`,
      a: `I just finished the migration, try to login again. Sorry for the delay!`
    },
{
    q: `it seems as though orders from Amazon would be shipped directly to my address from Amazon as a gift? if I can't do Amazon locker and I don't want my address linked with Amazon can I have the item shipped to earner first or somewhere else and then re-shipped to me from them?`,
      a: `Yes. This will cost extra though. Just place and order and I will chat with you using the order chat.`
    },
{
    q: `Hi. If your order passphrase started with master or Ivory, please check on your order again. Your chat should work now. If you are neither of these people, and you do not have a 
    chat to message me in; You should message me(using the ask me a question) here with: 1. the first word in your passphrase 2. The exact amount of XMR paid(not including transaction fees) and the address you sent payment to.`,
      a: `See above.`
    },
{
    q: `hey it's been over a full day, please respond to my order`,
      a: `You might need to refresh your page since I have responded to all orders at this time. If my message is not there, please send me the first word of your passphrase, since there might be an issue with your chat functionality.`
    },
{
    q: `How can I find the Amazon Locker nearest to me?

The official website (amazon.com/findalocker) appears to be authwalled, requiring login to access Therefore, if I search for a locker with my account, and then place the order through you, I've deanonymized myself.

How can I search for Amazon Lockers in my area anonymously, without authenticating with an Amazon account?
`,
      a: `At checkout you can enter your zipcode. I will find some lockers near you and give you options
      when we chat about your order. If none of these locker options work for you, we generally issue you a full refund.`
    },
{
    q: `I need to buy something very expensive. What assurance do I have that the "Earner" won't take my funds and not place the order?`,
      a: `We hold the funds until both parties are satisfied. That means that the earner can't take your funds. You must tell us that the order
      went fine, before we release the funds to the earner.`
    },
  {
    q: `How do you handle items that aren't eligible for Amazon lockers? I've used lockers before and sometimes it wouldn't let me order certain items to lockers. Unfortunately there doesn't seem to be a good of way of knowing this without logging into an account to check beforehand.
    `,
      a: `If an item ships from Amazon it can fit into a locker. There are some size restrictions lockers also. You can look up
      an item and ensure that it says, "Ships from Amazon.com" without logging in. If your item can not ship to a locker, you must use the home delivery option.`
    },
    {
    q: `Can I order from websites such as, AliExpress, AliBaba or Shein??
          Or is this exclusive to Amazon?
      + Can I order to an address in a third world country (middle east) or is it exclusive to the US? and if not when are you planning to expand this service to support more countries?
      `,
    a: `If a website ships to you, we can order it for you. Returns might not be possible though.`
    },  
    {
    q: `Can you check if this page is working properly ?
  https ://anonshop.app/registerEarner
  I use an ad blocker and have enabled anonshop and plausable.i cant proceed ?`,
      a: `We are only accepting shoppers at this time.`
    },
  { q: `I tried to do concierge service/ship to an address but it asked for payment before I'd given an address. How do I submit an address to ship to?`,
    a: `You pay and then we check your order and get it ready for our earners. 
    After we check over it, we message you again in chat to get your address.
    Doing things this way ensures that we only collect your sensitive information( such as your address) when we know for 100% certainty we can complete your order.
    We would hate for you to give us sensitive info for an order that we can not process. Thanks for the good question. I will add an entry into our FAQ`
  },
  { q: `Hello I have an issue with order payment, (I had a double issue with the payment.)`,
    a: `Hi Friend. we have created a new order for you. Please login using the 6 word passphrase that you had for your first payment. The first word 
    should start with a h.`
  },
  { q: `Hey sorry to bother you. i had an issue with an order not completed then for a mistakes sent twice payment.I don't have a. chat in  order payment page`,
  a: `Hi Friend. We will process your order and refund you the correct amount. 
  Give us some time and we will make a chat and order number for you.`
  },
  { q: "Mastodon is mentioned as a social media contact point but it is not listed at the bottom of the website...just an observation.",
  a: "Hi. Thanks for the info. Where do you see a post about Mastadon? We have not gotten around to setting it up and need to remove the reference. Thanks for reaching out!"

  },
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

<template>
  <div class="col-11 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="">
          <q-card-section class="bg-grey-7 text-white">
            <div class="text-h6">Chat About Your Order</div>
          </q-card-section>
          <q-separator />
                  <q-card-section
                      class="text-center col-12 text-center row  justify-center col"
                      style="border-radius: 10px;"
                    >
                    <div class="row justify-center text-left overflow-auto" style="">
                      <div style="width: 100%; height: 50vh;" class="overflow-auto scroll">
                        <q-chat-message
                          v-for="(message, index) in messageArray"
                          :key="index"
                          :text="[sanatizeHTMLString(message.message)]"
                          :name="message.from"
                          :sent="message.from === 'shopper'"
                          :stamp="epochToLocalTime(message.sent)"
                          :avatar="getAvatar(message.from)"
                          text-html
                          :bg-color="getTextColor(message.from)"
                        />
                      </div>
                    </div>
          </q-card-section>
          <q-separator />

        <q-card-actions vertical>
          <span class="text-subtitle1 text-weight-medium">Type Your Message:</span>
          <div class="q-pa-md overflow-auto" style="">
            <q-input
              v-model="text"
              filled
              autogrow
              class="overflow-auto scroll"
              style="width: 100%;"
            />
          </div>
          <div class="row justify-around q-gutter-y-md">
      <div class="col-12 col-md-6 ">
        <q-btn @click="sendMessage" :disable="disableButtons" color="positive" icon="send">Send Message</q-btn>
      </div>
      <div class="col-12 col-md-6">
        <q-btn @click="checkForMessages" :disable="disableButtons" color="positive" icon="sync">Check For New Messages</q-btn>
      </div>
    </div>
        </q-card-actions>
        </q-card>
      </div>
    </div>
  </template>
    
<script setup>
import anaonAvatar from "@/assets/chatAvatar.svg"
import shopperAvatar from "@/assets/detective.svg"
import sanitizeHtml from 'sanitize-html'
import { defineProps, toRef, ref, toRaw } from "vue"
const axios = require('axios')
const sender = 'shopper'
const props = defineProps({
  passphrase: { type: String, required: true },
  messageArray: { type: Object, required: true }
})
const text = ref('')
const disableButtons = ref(false)
const messageArrayHolder = toRef(props, 'messageArray')
const messageArray = ref(toRaw(messageArrayHolder.value))
const passphrase = toRef(props, 'passphrase')
function epochToLocalTime(epochTime){
  const timeString = formatAMPM(new Date(epochTime)) + ' '
  return timeString + new Date(epochTime).toLocaleString('en-us', { weekday:"long", month:"short", day:"numeric"})
}
function sanatizeHTMLString (dirty) {
  const clean = sanitizeHtml(dirty, {
  allowedTags: [ 'br', 'a' ],
  allowedAttributes: {
    'a': [ 'href' ]
  }
});
  return clean
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getAvatar(sender) {
  if (sender === 'dgoon') {
    return anaonAvatar
  }
  if (sender === 'shopper') {
    return shopperAvatar
  }
}
function getTextColor(sender) {
  if (sender === 'dgoon') {
    return 'blue-5'
  }
  if (sender === 'shopper') {
    return 'light-blue-11'
  }
}
async function sendMessage() {
  disableButtons.value = true
  await sleep(1000)
  disableButtons.value = false
  const data = { bucket: passphrase.value, message: text.value, sender }
  await axios.post('/.netlify/functions/sendMessage', data)
  text.value = ''
  await checkForMessages()
}
async function checkForMessages() {
  disableButtons.value = true
  await sleep(1000)
  disableButtons.value = false
  const data = { bucketID: passphrase.value }
  const results = await axios.post('/.netlify/functions/getOrder', data)
  messageArray.value = results.data.messageArray
}
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
</script>

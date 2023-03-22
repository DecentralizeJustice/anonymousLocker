<template>
<!--   <div class="col-11 col-md-6 col justify-center column">
    <div class="column justify-center" style=""> -->
        <q-card class="col-6 col q-my-lg text-center" style="">
          <q-card-section class="bg-grey-9 text-white">
            <div class="text-h6">Your Order Chat</div>
          </q-card-section>
          <q-separator />
                  <q-card-section
                      class="text-center col-12 text-center row  justify-center col"
                      style="border-radius: 10px;"
                    >
                    <div class="row justify-center text-left overflow-auto" style="">
                      <div style="width: 100%; height: 40vh;" class="overflow-auto scroll"
                      ref="customChatDiv">
                        <q-chat-message
                          v-for="(message, index) in messageArray"
                          :key="index"
                          :text="[sanatizeHTMLString(message.message)]"
                          :name="message.from"
                          :sent="message.from === 'shopper'"
                          :stamp="epochToLocalTime(message.sent)"
                          :avatar="getAvatar(message.from)"
                          text-html
                          :text-color="getTextColor(message.from)"
                          :bg-color="getBackgroundColor(message.from)"
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
<!--       <div class="col-12 col-md-6">
        <q-btn @click="dialogOpen = true" :disable="disableButtons" color="primary" icon="lock">Encrypt Address</q-btn>
      </div> -->
    </div>
        </q-card-actions>
        </q-card>
<!--       </div>
    </div> -->
  </template>
    
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import anaonAvatar from "@/assets/chatAvatar.svg"
import shopperAvatar from "@/assets/detective.svg"
import sanitizeHtml from 'sanitize-html'
import { defineProps, toRef, ref, computed, nextTick } from "vue"
const router = useRouter()
const axios = require('axios')
const customChatDiv = ref(null);
const props = defineProps({
  chatID: { type: String, required: true }
})
const text = ref('')
// const dialogOpen = ref(false)
const disableButtons = ref(false)
const chatID = toRef(props, 'chatID')
const messageArray = ref([])
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
    return 'black'
  }
  if (sender === 'shopper') {
    return 'white'
  }
}
function getBackgroundColor(sender) {
  if (sender === 'dgoon') {
    return 'info'
  }
  if (sender === 'shopper') {
    return 'grey-7'
  }
}
async function sendMessage() {
  if (text.value.length < 1) {
    return
  }
  disableButtons.value = true
  await sleep(1000)
  disableButtons.value = false
  const data = { chatID: chatID.value, message: text.value, sender: sender.value }
  await axios.post('/.netlify/functions/sendMessage', data)
  text.value = ''
  await checkForMessages()
}
async function checkForMessages() {
  disableButtons.value = true
  await sleep(1000)
  disableButtons.value = false
  const results = await axios.post('/.netlify/functions/getMessageArray', { chatID: chatID.value })
  messageArray.value =  results.data.messageArray
  await nextTick()
  const div = customChatDiv.value
  console.log(div)
  div.scrollTo({top: div.offsetHeight, behavior: "smooth"})
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
const sender = computed(() => {
  const routeInfo = router.currentRoute.value
  if (routeInfo.name === 'admin') {
    return 'dgoon'
  } else {
    return 'shopper'
  }
})
onMounted(async () => {
  const results = await axios.post('/.netlify/functions/getMessageArray', { chatID: chatID.value })
  messageArray.value =  results.data.messageArray
  await nextTick()
  const div = customChatDiv.value
  div.scrollTo({top: div.offsetHeight, behavior: "smooth"})
})
</script>

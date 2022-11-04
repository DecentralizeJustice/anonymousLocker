<template>
  <div class="col-6 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="">
          <q-card-section class="bg-secondary text-white">
            <div class="text-h6">Chat About Your Order</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="">
              <div class="row justify-around" style="">
                <div class="col-12 text-center row  justify-center col">
                  <q-card-section
                      class="col-11 text-center"
                      style="border-radius: 10px;"
                    >
                    <div class="q-pa-md row justify-center text-left">
                      <div style="width: 100%; max-width: 400px">
                        <q-chat-message
                          v-for="(message, index) in messageArray"
                          :key="index"
                          :text="[message.message]"
                          name="dgoon"
                          :stamp="epochToLocalTime(message.sent)"
                          :avatar=" anaonAvatar"
                          text-html
                        />
<!--                         <q-chat-message
                          :text="['doing fine, how r you?']"
                          sent
                          name="me"
                          :avatar="shopperAvatar"
                        /> -->
                      </div>
                    </div>
                    </q-card-section>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
    
<script setup>
import anaonAvatar from "@/assets/chatAvatar.svg"
// import shopperAvatar from "@/assets/detective.svg"
import { defineProps, toRef } from "vue"
const props = defineProps({
  passphrase: { type: String, required: true },
  messageArray: { type: Object, required: true }
})
const messageArray = toRef(props, 'messageArray')
const passphrase = toRef(props, 'passphrase')
console.log(messageArray.value, passphrase.value)
function epochToLocalTime(epochTime){
  const timeString = formatAMPM(new Date(epochTime)) + ' '
  return timeString + new Date(epochTime).toLocaleString('en-us', { weekday:"long", month:"short", day:"numeric"})
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

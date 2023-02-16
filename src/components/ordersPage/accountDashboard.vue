<template>
  <div class="col-11 col-md-6 col justify-center column">
    <!-- <div class="column justify-center" style="">
        <q-card class="col-12 col" style="">
          <q-card-section class="bg-grey-9 text-white">
            <div class="text-h6">Chat About Your Order</div>
          </q-card-section>
          <q-separator />
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
      </div> -->
<!--       <div class="col-12 col-md-6">
        <q-btn @click="dialogOpen = true" :disable="disableButtons" color="primary" icon="lock">Encrypt Address</q-btn>
      </div> -->
    <!-- </div>
        </q-card-actions>
        </q-card>
      </div>
      <q-dialog v-model="dialogOpen">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>-->
    </div> 
  </template>
    
<script setup>
import { defineProps, toRef  } from "vue"
const props = defineProps({
  passphrase: { type: String, required: true },
  accountInfo: { type: Object, required: true }
})
/* const text = ref('')
const dialogOpen = ref(false)
const disableButtons = ref(false) */
// const accountInfo = ref(accountInfo)
const passphrase = toRef(props, 'passphrase')
console.log(passphrase.value)

</script>

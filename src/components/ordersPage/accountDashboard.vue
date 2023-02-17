<template>
  <div class="col-11 col-md-11 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="min-height: 70vh;">
          <q-card-section class="bg-grey-9 text-white col-3">
            <div class="text-h6">Your Account Overview</div>
          </q-card-section>
          <q-separator />
          <div class="col-11 col-md-11 col justify-around row q-py-lg" style="">

          <q-card class="bg-primary text-white col-3 col">
            <q-card-section>
              <div class="text-h5 q-mb-lg" >Account Summary</div>
              <div class="text-subtitle1">Bond Amount: {{ accountInfo.metaData.bondAmount }}</div>
              <div class="text-subtitle1">XMR Refund Address: {{ accountInfo.metaData.refundAddress }}</div>
            </q-card-section>
          </q-card>

          <q-card class="bg-primary text-white col-5 col">
            <q-card-section>
              <div class="text-h5 q-mb-lg">Current Orders</div>
              <div class="column" style="">
                <div class="col col-6" v-for="item in accountInfo.orders" :key="item.nickname">
                  <div class="text-subtitle1 bg-black q-pa-md rounded-borders">
                    <div>{{capitalizeWords(item.nickName)}} for {{ item.totalSentUSD }} USD</div>
                    <div>Status: {{ item.statusHistory.slice(-1)[0].status  }}</div>
                    <div><q-btn color="secondary" label="More Info" class="q-my-sm" @click="openDialog()"/></div>
                  </div>
                </div>
              </div>
              
            </q-card-section>
          </q-card>

        </div>
        </q-card>
      </div>
      <q-dialog v-model="dialogOpen">
      <q-card>
        <q-card-section class=" bg-grey-9">
          <div class="text-h6 text-center text-white">Order: {{ capitalizeWords(accountInfo.orders[0].nickName) }}</div>
        </q-card-section>
        <q-separator />

        <q-card-section class="q-pt-none">
          {{ accountInfo.orders }}
          <div class="text-subtitle1 q-pa-md rounded-borders">
                    <div>Total USD Sent: {{ accountInfo.orders[0].totalSentUSD }} USD</div>
                    <div>Status: {{ accountInfo.orders[0].statusHistory.slice(-1)[0].status  }}</div>
                  </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div> 
  </template>
    
<script setup>
import { defineProps, toRef, ref  } from "vue"
const props = defineProps({
  passphrase: { type: String, required: true },
  accountInfo: { type: Object, required: true }
})
/* const text = ref('')
const disableButtons = ref(false) */
const dialogOpen = ref(false)
const accountInfo = toRef(props, 'accountInfo')
const passphrase = toRef(props, 'passphrase')
function openDialog() {
  dialogOpen.value = true
  console.log('ran')
}
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(passphrase.value, accountInfo.value)

</script>

{
  ;
}
<style lang="sass" scoped>
.q-dialog
  backdrop
    backdrop-filter: blur(70px) !important

</style>

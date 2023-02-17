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
              <div class="text-subtitle2">Bond Amount: {{ accountInfo.metaData.bondAmount }}</div>
              <div class="text-subtitle2">XMR Refund Address: {{ accountInfo.metaData.refundAddress }}</div>
            </q-card-section>
          </q-card>

          <q-card class="bg-primary text-white col-5 col">
            <q-card-section>
              <div class="text-h5 q-mb-lg">Current Orders</div>
              <div class="column" style="height: 150px">
                <div class="col col-6" v-for="item in accountInfo.orders" :key="item.nickname">
                  <div class="text-subtitle1 bg-black q-pa-md rounded-borders">
                    <div>{{item.nickName}} for {{ item.totalSentUSD }} USD</div>
                    <div>Status: {{ item.statusHistory.slice(-1)[0].status  }}</div>
                    <div><q-btn color="secondary" label="More Info" class="q-my-sm" /></div></div>
                </div>
              </div>
              
            </q-card-section>
          </q-card>

        </div>
        </q-card>
      </div>
      <q-dialog :v-model="false">
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
    </q-dialog>
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
const accountInfo = toRef(props, 'accountInfo')
const passphrase = toRef(props, 'passphrase')
console.log(passphrase.value, accountInfo.value)

</script>

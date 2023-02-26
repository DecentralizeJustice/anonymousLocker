<template>
  <div class="col-11 col-md-11 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="min-height: 70vh;">
          <q-card-section class="bg-grey-9 text-white col-3">
            <div class="text-h6">Your Account Overview</div>
          </q-card-section>
          <q-separator />
          <div class="col-11 col-md-11 justify-around row" style="">

          <q-card class="bg-primary text-white col-3 col q-py-xl q-my-xl">
            <q-card-section>
              <div class="text-h5 q-mb-lg" >Account Summary</div>
              <div class="text-subtitle1">
                Bond Amount: {{ accountInfo.metaData.bondAmount }}
              </div>
              <div class="text-subtitle1">
                XMR Refund Address: {{ accountInfo.metaData.refundAddress }}
              </div>
            </q-card-section>
            <q-card class="bg-primary text-white col-5 col">
            <q-card-section>
              <div class="text-h5 q-mb-lg">Order Info</div>
              <div class="column" style="">
                <div class="col col-6" v-for="item in accountInfo.orders" :key="item.nickname">
                  <div class="text-subtitle1 bg-black q-pa-md rounded-borders">
                    <div>{{capitalizeWords(item.nickName)}} for {{ item.totalSentUSD }} USD</div>
                    <div>Status: {{ item.statusHistory.slice(-1)[0].status  }}</div>
                    <div>
                      <q-btn color="secondary" label="More Info" class="q-my-sm" 
                      @click="openDialog()"/></div>
                  </div>
                </div>
              </div>  
            </q-card-section>
            
          </q-card>
          
          </q-card>
          <main-chat class=""></main-chat>



        </div>
        </q-card>
      </div>

      <q-dialog v-model="dialogOpen">
      <q-card>
        <q-card-section class=" bg-grey-9">
          <div class="text-h6 text-center text-white">
            Order: {{ capitalizeWords(accountInfo.orders[0].nickName) }}</div>
        </q-card-section>
        <q-separator />

        <q-card-section class="q-pt-none">
<!--           {{ accountInfo.orders[0].chatID }} -->
          <div class="text-subtitle1 q-pa-md rounded-borders">
            <div>Total USD Sent: {{ accountInfo.orders[0].totalSentUSD }} USD</div>
            <div>Status: {{ accountInfo.orders[0].statusHistory.slice(-1)[0].status  }}</div>
            <div>Items:</div>
            <div v-for="value in accountInfo.orders[0]['itemList']" :key="value.link">
              <li >Description: {{value.description}}</li>
              <li>Cost: {{value.cost}}</li>
              <li>Quantity: {{ value.quantity }}</li>
              <li>Notes: Need to Impliment</li>
              <li>Link: <a :href="value.link">Link</a></li>
            </div>
            <div>Locker Zipcode:{{accountInfo.orders[0].lockerZipcode }}</div>
            <div>Locker Name:{{accountInfo.orders[0].lockerName }}</div>
            <div>Order Notes:{{accountInfo.orders[0].extraNotes }}</div>
            <div>Total USD Sent:{{accountInfo.orders[0].totalSentUSD}}</div>
            <div>Taxes Paid:{{accountInfo.orders[0].taxAmountUSD}}</div>
            <div>Items Subtotal:{{accountInfo.orders[0].itemsSubtotal}}</div>
            <div>Bond Paid:{{accountInfo.orders[0].bondUSD}}</div>
            <div>Order Fee:{{accountInfo.orders[0].orderFeeUSD}}</div>
            <div>Extra Amount:{{accountInfo.orders[0].extraAmountUSD}}</div>
            <div>Status:{{accountInfo.orders[0].statusHistory.slice(-1)[0].status}}</div>
            <div>Payment Info(need to loop over):</div>
            <div> 
              <div>XMR Sent: {{accountInfo.orders[0].paymentInfo[0].payments[0].value }}</div>
              <div style="overflow-wrap: break-word;">Payment ID: <br/>
                {{accountInfo.orders[0].paymentInfo[0].payments[0].id.substring(0, 64) }}</div>
            </div>
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
import mainChat from '@/components/ordersPage/mainChat.vue'
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
<style lang="sass" scoped>
.q-dialog
  backdrop
    backdrop-filter: blur(70px) !important

</style>

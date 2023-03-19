<template>
  <div class="col-12 col-md-11 col justify-center row">
        <q-card class="col-12 col-md-10  justify-around" style="min-height: 70vh;">
          <q-card-section class="bg-grey-9 text-white col-12 ">
            <div class="text-h6">Your Account Overview</div>
          </q-card-section>

          <div class="col-12 col-md-10 justify-around row" style="">
            <main-chat class="col-11 col-md-6" :chatID='accountInfo.orders[0].chatID' ></main-chat>
           <q-card class="bg-primary text-white col-11 col-md-5 col q-py-xl q-my-xl">
            <q-card-section>
              <div class="text-h5 q-mb-lg" >Account Summary</div>
              <div class="text-subtitle1">
                Bond Amount: {{ accountInfo.metaData.bondAmount }} XMR
              </div>
               <div class="text-subtitle1" style="overflow-wrap: break-word;">
                XMR Refund Address: <br/>
                {{ accountInfo.metaData.refundAddress.slice(0, 8) }}...
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 q-mb-lg">Order Info</div>
              <div class="column" style="">
                <div class="col col-6" v-for="item in accountInfo.orders" :key="item.nickname">
                  <div class="text-subtitle1 bg-black q-pa-md rounded-borders">
                    <div>{{capitalizeWords(item.nickName)}} for {{ item.totalUSD }} USD</div>
                    <div>Status: {{ item.statusHistory.slice(-1)[0].status  }}</div>
                    <div>
                      <q-btn color="secondary" label="More Info" class="q-my-sm" 
                      @click="openDialog()"/></div>
                  </div>
                </div>
              </div>  
            </q-card-section>
          </q-card> 
          
        </div>
        </q-card>


      <q-dialog v-model="dialogOpen">
      <q-card>
        <q-card-section class=" bg-grey-9">
          <div class="text-h6 text-center text-white">
            Order: {{ accountInfo.orders[0].nickName }}</div>
        </q-card-section>
        <q-separator />

        <q-card-section class="q-pt-none">
<!--           {{ accountInfo.orders[0].chatID }} -->
          <div class="text-subtitle1 q-pa-md rounded-borders">
          <div>Total USD Sent: {{ accountInfo.orders[0].totalUSD }} USD</div>
           <div>Status: {{ accountInfo.orders[0].statusHistory.slice(-1)[0].status  }}</div>
            <div>Items:</div>
            <div v-for="value in accountInfo.orders[0]['itemList']" :key="value.link">
              <li>Cost: {{value.cost}}</li>
              <li>Quantity: {{ value.quantity }}</li>
              <li>Notes: {{ value.description }}</li>
              <li>Link: <a :href="value.link">Link</a></li>
            </div>
          <div v-if="accountInfo.orders[0].lockerZipcode !== undefined">Locker Zipcode:{{accountInfo.orders[0].lockerZipcode }}</div>
          <div v-if="accountInfo.orders[0].country !== undefined">Locker Country:{{accountInfo.orders[0].country }}</div>
            <div v-if="accountInfo.orders[0].lockerNam !== undefined">Locker Name:{{accountInfo.orders[0].lockerName }}</div>
            <div v-if="accountInfo.orders[0].addressInfo !== undefined">
              Address Info: <br/>
              <li>Name: {{ accountInfo.orders[0].addressInfo.fullname }}</li>
              <li>Street: {{ accountInfo.orders[0].addressInfo.streetAddress }}</li>
              <li>City: {{ accountInfo.orders[0].addressInfo.city }}</li>
              <li>Zipcode: {{ accountInfo.orders[0].addressInfo.zipcode }}</li>
              <li>Country: {{ accountInfo.orders[0].addressInfo.country }}</li>
              <li>Apt or Suite #: {{ accountInfo.orders[0].addressInfo.aptNumber }}</li>
            </div>
            <div>Order Notes:{{accountInfo.orders[0].extraNotes }}</div>
            <div>Total USD Sent:{{accountInfo.orders[0].totalUSD}}</div>
            <div>Taxes Paid:{{accountInfo.orders[0].taxAmountUSD}}</div>
            <div>Items Subtotal:{{accountInfo.orders[0].itemsSubtotal}}</div>
            <div>Bond Paid:{{accountInfo.orders[0].bondUSD}}</div>
            <div>Order Fee:{{accountInfo.orders[0].orderFeeUSD}}</div>
            <div>Extra Amount:{{accountInfo.orders[0].extraAmountUSD}}</div>
            <div>Status:{{accountInfo.orders[0].statusHistory.slice(-1)[0].status}}</div>
            <div>Payment Rate:  {{accountInfo.orders[0].paymentInfo[0].rate}} XMR/USD</div>
            <div>XMR Sent: {{accountInfo.orders[0].paymentInfo[0].paymentMethodPaid}} XMR</div>
            <div>Payment Info:</div>
               <div> 
                <div v-for="value in accountInfo.orders[0].paymentInfo[0].payments" :key="value.id">
              <li style="overflow-wrap: break-word;">Transaction ID: {{value.id}}</li>
              <li >XMR Amount Recieved: {{value.value}}</li>
            </div>
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
// const passphrase = toRef(props, 'passphrase')
function openDialog() {
  dialogOpen.value = true
  console.log(accountInfo.value.orders)
  console.log('ran')
}
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(accountInfo.value)

</script>
<style lang="sass" scoped>
.q-dialog
  backdrop
    backdrop-filter: blur(70px) !important

</style>

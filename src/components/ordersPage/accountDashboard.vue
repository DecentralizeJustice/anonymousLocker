<template>
  <div class="col-12 col-md-11 col justify-center row">
        <q-card class="col-12 col-md-10  justify-around" style="">
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
               <div class="text-subtitle1 q-mt-xl" style="overflow-wrap: break-word;">
                Your XMR Refund Address: <br/>
                {{ accountInfo.metaData.refundAddress }}
              </div>
              <div class="text-subtitle1 q-mt-xl" style="overflow-wrap: break-word;">
                Anon Shop XMR Address: <br/>
                45Ag8YnqVAq2wwAYksNfzfUrWVixAcUiGG5iwLwrSgwzbv6JWLhqUbKZHfXJM2g6GLWKaSs1roApEdiLjkSUMbvQBoZANx6
              </div>
            </q-card-section>
            <q-card-section>
              
              <div class="column" style="">
                <div class="col col-6" v-for="item in accountInfo.orders" :key="item.nickname">
                  <div class="text-subtitle1 bg-black q-pa-md rounded-borders">
                    <div class="text-h5 q-mb-lg">Order Info</div>
                    <div>{{capitalizeWords(item.nickName)}} for {{ item.totalUSD }} USD</div>
<!--                     <div>Status: {{ item.statusHistory.slice(-1)[0].status  }}</div> -->
                    <div>
                      <q-btn color="secondary" label="View Order Details" class="q-my-sm" 
                      @click="openDialog()"/></div>
                  </div>
                </div>
              </div>  
            </q-card-section>
            <div v-if="admin">
              <q-btn color="red" label="Delete Account" class="q-my-sm" 
                      @click="deleteAccount"/>
            </div>
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
<!--            <div>Status: {{ accountInfo.orders[0].statusHistory.slice(-1)[0].status  }}</div> -->
            
          <q-card class="bg-grey-14 text-white q-pa-md">
            <div>Total USD Sent: {{ accountInfo.orders[0].totalUSD }} USD</div>
              <div class="text-h6">Items:</div>
              <div v-for="value in accountInfo.orders[0]['itemList']" :key="value.link"
              class="q-my-lg">
                <li>Link: <a :href="value.link">Link</a></li>
                <li>Cost: {{value.cost}}</li>
                <li>Quantity: {{ value.quantity }}</li>
                <li>Notes: {{ value.description }}</li>
              </div>
            </q-card>
            <q-card class="bg-grey text-white q-pa-md q-my-md" 
            v-if="accountInfo.orders[0].lockerZipcode !== undefined">
              <div>
                Locker Zipcode: {{accountInfo.orders[0].lockerZipcode }}
              </div>
              <div>
                Locker Country: {{accountInfo.orders[0].country }}
              </div>
              <div>
                Locker Name: {{accountInfo.orders[0].lockerName }}
              </div>
            </q-card>

            <q-card class="bg-grey text-white q-pa-md q-my-md" 
            v-if="accountInfo.orders[0].addressInfo !== undefined">
              Address Info: <br/>
              <li>Name: {{ accountInfo.orders[0].addressInfo.fullname }}</li>
              <li>Street: {{ accountInfo.orders[0].addressInfo.streetAddress }}</li>
              <li>Apt or Suite #: {{ accountInfo.orders[0].addressInfo.aptNumber }}</li>
              <li>City: {{ accountInfo.orders[0].addressInfo.city }}</li>
              <li>Zipcode: {{ accountInfo.orders[0].addressInfo.zipcode }}</li>
              <li>Country: {{ accountInfo.orders[0].addressInfo.country }}</li>
              Discount Chosen: {{ accountInfo.orders[0].discountPossible }}<br/>
              <div  v-if="accountInfo.orders[0].discountPossible">Discount Percent: {{accountInfo.orders[0].discountPercent }} %</div>
            </q-card>
            <q-card class="bg-grey-14 text-white q-pa-md q-my-md" >
            <div>Order Notes: {{accountInfo.orders[0].extraNotes }}</div>
            <div>Total USD Sent: {{accountInfo.orders[0].totalUSD}}</div>
            <div>Taxes Paid: {{accountInfo.orders[0].taxAmountUSD}}</div>
            <div>Items Subtotal: {{accountInfo.orders[0].itemsSubtotal}}</div>
            <div>Bond Paid: {{accountInfo.orders[0].bondUSD}}</div>
            <div>Order Fee: {{accountInfo.orders[0].orderFeeUSD}}</div>
            <div>Extra Amount: {{accountInfo.orders[0].extraAmountUSD}}</div>
<!--             <div>Status:{{accountInfo.orders[0].statusHistory.slice(-1)[0].status}}</div> -->
          </q-card>

          <q-card class="bg-grey text-white q-pa-md q-my-md" >
            <div>Payment Rate:  {{accountInfo.orders[0].paymentInfo[0].rate}} XMR/USD</div>
            <div>XMR Sent: {{accountInfo.orders[0].paymentInfo[0].paymentMethodPaid}} XMR</div>
            <div>Payment Info:</div>
               <div> 
                <div v-for="value in accountInfo.orders[0].paymentInfo[0].payments" :key="value.id">
              <li style="overflow-wrap: break-word;">Transaction ID: {{value.id}}</li>
              <li >XMR Amount Recieved: {{value.value}}</li>
            </div>
            </div>
          </q-card>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Close" color="red" v-close-popup />
        </q-card-actions>
      </q-card>        

    </q-dialog>
    </div> 
  </template>
    
<script setup>
import { defineProps, toRef, ref, computed  } from "vue"
import mainChat from '@/components/ordersPage/mainChat.vue'
import { useRouter } from 'vue-router'
const axios = require('axios')
const props = defineProps({
  passphrase: { type: Array, required: true },
  accountInfo: { type: Object, required: true }
})
const deleteCounter = ref(0)
/* const text = ref('')
const disableButtons = ref(false) */
const router = useRouter()
const dialogOpen = ref(false)
const accountInfo = toRef(props, 'accountInfo')
// const passphrase = toRef(props, 'passphrase')
function openDialog() {
  dialogOpen.value = true
}
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
async function deleteAccount() {
  deleteCounter.value = deleteCounter.value + 1
  if(deleteCounter.value < 6){ console.log('more delete presses needed'); return }
  deleteCounter.value = 0
  const results = await axios.post('/.netlify/functions/deleteAccount', 
  { accountPhrase: accountInfo.value.passphrase, 
    chatID: accountInfo.value.orders[0].chatID
  })
  console.log(results.data)
}
const admin = computed(() => {
  const routeInfo = router.currentRoute.value
  if (routeInfo.name === 'admin') {
    return true
  } else {
    return false
  }
})

</script>
<style lang="sass" scoped>
.q-dialog
  backdrop
    backdrop-filter: blur(70px) !important

</style>

<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <submitNewOrder v-if="firstChoice === 'newOrder' && !paymentStarted" @paymentSTarted="processPaymentInfo"/>
      <paymentComponent v-if="firstChoice === 'newOrder' && paymentStarted" :paymentInfo="paymentInfo"/>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import submitNewOrder from "@/components/ordersPage/submitNewOrder.vue"
import paymentComponent from "@/components/earnerCheckout/paymentComponent.vue"
const firstChoice = ref('newOrder')
const paymentStarted = ref(false)
const paymentInfo = ref({})
function processPaymentInfo( paymentInfoFromComp) {
  paymentInfo.value =  paymentInfoFromComp
  console.log(paymentInfoFromComp)
/*   paymentStarted.value = true */
}
</script>

<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <firstChoiceComp v-if="firstChoice === '' && !paymentStarted" @firstChoice="selectFirstChoice"/>
      <submitNewOrder v-if="firstChoice === 'newOrder' && !paymentStarted" @paymentSTarted="processPaymentInfo"/>
      <paymentComponent v-if="firstChoice === 'newOrder' && paymentStarted" :paymentInfo="paymentInfo"/>
      <checkOnOrder v-if="firstChoice === 'checkOnOrder'"/>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import firstChoiceComp from "@/components/ordersPage/firstChoice.vue"
import submitNewOrder from "@/components/ordersPage/submitNewOrder.vue"
import paymentComponent from "@/components/ordersPage/paymentComponent.vue"
import checkOnOrder from "@/components/ordersPage/checkOnOrder.vue"
const firstChoice = ref('')
const paymentStarted = ref(false)
const paymentInfo = ref({})
function selectFirstChoice(choice) {
  firstChoice.value = choice
}
function processPaymentInfo( paymentInfoFromComp) {
  paymentInfo.value =  paymentInfoFromComp
  paymentStarted.value = true
}
</script>

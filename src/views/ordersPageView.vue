<template>
  <q-page
    style="width: 100vw; background-image: linear-gradient(to right top, #3d80d1, #576caa, #5a5b84, #514c61, #414042);"
    class="q-pa-md row items-stretch text-center align-center justify-center"
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

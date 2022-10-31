<template>
  <q-page
    style="width: 100vw; background-image: linear-gradient(to right top, #3d80d1, #576caa, #5a5b84, #514c61, #414042);"
    class="q-pa-md row items-stretch text-center align-center justify-center"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <firstChoiceComp v-if="firstChoice === ''" @firstChoice="selectFirstChoice"/>
      <submitNewOrder v-if="firstChoice === 'newOrder'"/>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import firstChoiceComp from "@/components/ordersPage/firstChoice.vue"
import submitNewOrder from "@/components/ordersPage/submitNewOrder.vue"
const firstChoice = ref('')
function selectFirstChoice(choice) {
  firstChoice.value = choice
}
</script>

<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <firstChoiceComp v-if="firstChoice === ''" @firstChoice="selectFirstChoice"/>
      <secondChoiceComp v-if="firstChoice !== ''"/>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import firstChoiceComp from "@/components/ordersPage/firstChoice.vue"
import secondChoiceComp from "@/components/ordersPage/secondChoice.vue"
const firstChoice = ref('')
function selectFirstChoice() {
  firstChoice.value = 'any'
  console.log(!firstChoice.value === '')
}
</script>

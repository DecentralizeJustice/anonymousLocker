<template>
  <enterPassphrase @passphraseEnteredSuccess='passphraseEnteredSuccess' v-if='passphrase.length === 0'/>
  <accountDashboard v-if='passphrase.length > 0' :accountInfo='accountInfo' :passphrase='passphrase'/>
</template>
    
<script setup>
import enterPassphrase from '@/components/ordersPage/enterPassphrase.vue'
import accountDashboard from '@/components/ordersPage/accountDashboard.vue'
import { ref } from "vue"
const accountInfo = ref({})
const passphrase = ref('')
function passphraseEnteredSuccess(accountInfoInput, givenPassphrase) {
  accountInfo.value = accountInfoInput
  passphrase.value = givenPassphrase
}
</script>

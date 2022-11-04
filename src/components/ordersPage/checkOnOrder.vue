<template>
  <enterPassphrase @passphraseEnteredSuccess='passphraseEnteredSuccess' v-if='messageArray.length === 0'/>
  <mainChat v-if='messageArray.length > 0' :messageArray='messageArray' :passphrase='passphrase'/>
</template>
    
<script setup>
import enterPassphrase from '@/components/ordersPage/enterPassphrase.vue'
import mainChat from '@/components/ordersPage/mainChat.vue'
import { ref } from "vue"
const messageArray = ref([])
const passphrase = ref('')
function passphraseEnteredSuccess(messageArrayGiven, givenPassphrase) {
  messageArray.value = (messageArrayGiven)
  passphrase.value = givenPassphrase
}
</script>

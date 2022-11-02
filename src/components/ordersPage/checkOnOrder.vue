<template>
  <enterPassphrase @passphraseEnteredSuccess='passphraseEnteredSuccess' v-if='messageArray.length === 0'/>
  <mainChat v-if='messageArray.length > 0'/>
</template>
    
<script setup>
import enterPassphrase from '@/components/ordersPage/enterPassphrase.vue'
import mainChat from '@/components/ordersPage/mainChat.vue'
import { ref } from "vue"
const messageArray = ref([])
function passphraseEnteredSuccess(messageArrayGiven) {
  messageArray.value = (messageArrayGiven)
  console.log(messageArray.value)
}
</script>

<template>
  <q-page
    style="width: 100%;"
    class="row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <div class="q-mt-xl">
        <q-card class="q-pa-xl" >
        <div class="text-h4 q-my-md">Enter Monero Block Hash:</div>
        <q-input v-model="moneroBlock" label="Block String" />
        <div class="text-h4 q-my-md">Enter Number of Participants:</div>
        <q-input v-model="participants" label="Number of Participants" />
        <p><q-btn color="primary" label="Primary" class='q-mt-md' @click="generate()"/></p>
        <div class="text-h4 q-my-md">Winner Array</div>
        {{ winnerArray }}
        </q-card>
      </div>
    </div>
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import footerGlobal from "@/components/footerGlobal.vue"
import { ref } from 'vue'
const moneroBlock = ref('580597aa464c813fb210325ecf62ea7d8354e6fc24337210b42622ba2c584486')
const _sodium = require("libsodium-wrappers")
const participants = ref(21) // increase if no one wins
const winnerArray = ref([])
const numberOfRandomBytes = 1 // add the minuim to this to  get a number bigger than participant 1=255, 2=65535
async function generate() {
  winnerArray.value = []
  let index = 0
  while (winnerArray.value.length < participants.value ) {
    const randomNumber = await getRandomNumber(index)
    if (randomNumber < participants.value && !winnerArray.value.includes(randomNumber + 1)) {
      winnerArray.value.push( randomNumber + 1)
    }
    index += 1
  }
}
const convert = (from, to) => (str) => Buffer.from(str, from).toString(to)
const utf8ToHex = convert("utf8", "hex")

async function getRandomNumber(offset){
  const block = moneroBlock.value + offset
  await _sodium.ready
  const sodium = _sodium
  const keyHashed = sodium.crypto_generichash(32, sodium.from_hex(utf8ToHex(block)))
  const seed = keyHashed
  const randomBytes = sodium.randombytes_buf_deterministic(numberOfRandomBytes, seed)
  const rawOutput = parseInt(sodium.to_hex(randomBytes), 16)
  return rawOutput
}
</script>

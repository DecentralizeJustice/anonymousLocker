<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <div>
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
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const moneroBlock = ref('580597aa464c813fb210325ecf62ea7d8354e6fc24337210b42622ba2c584486')
const _sodium = require("libsodium-wrappers")
const participants = ref(21)
const winnerArray = ref([])
const numberOfWinners = 10
async function generate() {
  winnerArray.value = []
  for (let index = 0; index < numberOfWinners; index++) {
    const value = await getRandomNumber(index)
    winnerArray.value.push(value)
  }
}
async function getRandomNumber(offset){
  const block = moneroBlock.value + offset
  const convert = (from, to) => (str) => Buffer.from(str, from).toString(to)
  const utf8ToHex = convert("utf8", "hex")
  await _sodium.ready
  const sodium = _sodium
  const keyHashed = sodium.crypto_generichash( 32, sodium.from_hex(utf8ToHex(block)))
  const seed1 = keyHashed
  const randomBytes1 = sodium.randombytes_buf_deterministic(1, seed1)
  const rawOutput = parseInt(sodium.to_hex(randomBytes1, sodium.base64_variants.URLSAFE_NO_PADDING), 16) % participants.value
  return rawOutput + 1
}
</script>

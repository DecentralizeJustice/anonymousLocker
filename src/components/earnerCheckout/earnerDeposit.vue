<template>
    <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
  <div class="col-12 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
      <q-card class="col-12 col" style="">
        <q-card-section class="bg-grey-9 text-white">
          <div class="text-h6">Deposit Earner Bond</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <div class="row justify-around" style="">
              <div class="col-12 text-center row q-mb-md justify-center q-gutter-y-md">
                <p class="col-12 col-md-6 text-center row justify-center">
                  Thanks for Registering to Be an earner with Anon Shop😎 <br/>  Here is an overview of your responsibilities:
                </p>
                <ol class="text-left">
                  <li>In case of dispute, submit your retailer login information so that we can decide who is correct.</li>
                  <li>Submit The Next Step Of The Orders Within 24 hours.</li>
                </ol>
                <p class="col-12 col-md-6 text-left row justify-center" style="display:inline">
                  These are only 2 major points, but the finer details can be found in the <a href="/faq">FAQ.</a><br/>
                  If you have any questions about this process, please ask <a href="/message">here.</a>
                </p>
              </div>
              <div
                class="row col-12 col-md-8 q-mt-sm justify-center"
              >
              <p class="col-12 col-md-6 text-left row justify-center" style="display:inline">
                  If you have any special requests or needs please let us know below.
                </p>              
              <q-input
                class="col-12 col-md-8"
                v-model="extraNotes"
                autogrow
                label="Extra Info For US"
              /> 
              </div>
              <div class="row col-12 col-md-8 q-mt-md justify-center">
                <q-btn
                  class="col-12"
                  color="green"
                  label="Submit Order"
                  @click="submitOrder"
                  text-color="white"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</q-page>
</template>

<script setup>
import { ref, defineEmits, toRaw } from "vue"
import { encrypt, getRandomInt } from "@/assets/misc.js"
const emit = defineEmits(['paymentSTarted'])
const axios = require('axios')
const extraNotes = ref("")
const numberArray = ref([])
const disableSubmit = ref(false)
async function generateRandomArray() {
  const numberArray = []
  for (var i=0;i<6; i++) {
    numberArray.push(await getRandomInt(2048))
  }
  return numberArray
}
async function submitOrder() {
  numberArray.value = await generateRandomArray()
  console.log(numberArray.value.toString())
  const encryptedPassphrase = await encrypt(numberArray.value.toString())
  console.log(encryptedPassphrase)
  try {
  disableSubmit.value = true
  const results = await axios.post('/.netlify/functions/createPayment', { encryptedPassphrase, finalTotalUSD: 5, paymentCoin: 'xmr' })
  disableSubmit.value = false
  emit('paymentSTarted', 
  { 
    nowPaymentsInfo: results.data, numberArray: toRaw(numberArray.value), encryptedPassphrase, 
   extraNotes: toRaw(extraNotes.value), paymentCoin: 'xmr'
  })
} catch (err) {
  disableSubmit.value = false
  console.log(err)
}
}
</script>
<style lang="sass" scoped>
.linkStyle
  color: #00FFFF
</style>

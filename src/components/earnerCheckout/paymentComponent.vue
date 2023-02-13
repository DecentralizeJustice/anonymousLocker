<template>
<div class="col-12 col-md-6 col justify-center items-center row">
  <div class="row justify-center" style="">
      <q-card class="col-12 col" style="">
        <q-card-section>
          <div class="q-pa-md">
            <div class="row justify-around" style="">
              <div class="col-12 text-center row q-mb-md justify-center">
                <div class="col col-12 text-center text-h3">
                Save This Secret Passphrase
            </div>
              <q-card class="col col-12 col-md-6 text-left q-mt-sm q-mb-md justify-center bg-secondary text-white q-py-md  row">
                <q-card-section
                    class="bg-red-5 col-11 text-center"
                    style="border-radius: 10px;"
                  >
                    <div class="text-h6">
                      Secret Passphrase: Don't Share!!!
                    </div>
                  </q-card-section>
                <div class="text-left q-mt-sm">
                  <span 
                  v-for="(item, index) in wordList"
                    :key="item"
                    class="col q-ma-sm q-pa-sm text-h4">
                    {{ (index + 1) }}. {{ wordList[index] }}<br/>
                  </span>
                </div>
              </q-card>
              <div class="col col-10 text-left text-h6 text-weight-regular">
                This is the <span class="text-red text-weight-bold">ONLY</span> way to access your order information.
                If you lose this, there is no way to complete your order or refund you! It is not saved locally, so you must save it yourself!
            </div>
              <div class="col col-12 q-mt-lg text-center">
                  <q-btn
                  no-caps
                  color="positive"
                  icon="check"
                  label="Confirm Passphrase Saved"
                  @click="confirmPassphrase"
                />
              </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRef, computed } from "vue"
import { numberArrayToWordArray } from'@/assets/misc.js'
const axios = require('axios')
const props = defineProps({
  paymentInfo: { type: Object, required: true }
})
const paymentInfo = toRef(props, 'paymentInfo')
const wordList = computed(() => { 
  console.log(paymentInfo.value)
  return numberArrayToWordArray(paymentInfo.value.numberArray)
})
async function confirmPassphrase() {
  const results = await axios.post('/.netlify/functions/createBTCPayInvoice', 
  { amount: .01, 
    metadata: 
      { type: 'earnerSignup', 
        encryptedPassphrase: paymentInfo.value.encryptedPassphrase,
        extraNotes: paymentInfo.value.extraNotes
      } 
  })
  const btcPayLink = results.data.checkoutLink
  window.location = btcPayLink
}
</script>

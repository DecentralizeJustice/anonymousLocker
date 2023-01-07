<template>
<div class="col-12 col-md-6 col justify-center items-center row">
  <div class="row justify-center" style="" v-if="!passphraseWrittenDown">
      <q-card class="col-12 col" style="">
        <!-- <q-card-section class="bg-secondary text-white">
          <div class="text-h6">Save Passphrase</div>
        </q-card-section>
        <q-separator /> -->
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
    <div class="row justify-center items-center" style="" v-if="passphraseWrittenDown">
      <q-card class="col-12 col" style="">
        <q-card-section class="bg-secondary text-white">
          <div class="text-h6">Order Payment</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <div class="row justify-around" style="">
              <div class="col-12 text-center row justify-center">
                <q-chip icon="warning" color="negative" text-color="white" 
                label="Don't Close/Refresh Window Till Payment Confirmed" class="q-mb-md desktop-only" />
                <span class="mobile-only text-h5 q-mb-md" style="color:#C10015;"> Don't Close/Refresh Window Till Payment Confirmed</span>
                <div class="col col-12 text-center text-h5">
                Send <span style="color:#ff6600">{{paymentInfo.nowPaymentsInfo.pay_amount}}</span> 
                {{ paymentCoinFullName }} ({{paymentInfo.paymentCoin.toUpperCase()}}) to The Address Below:
            </div>

              <div class="col col-12 text-center justify-center">
                <canvas
                  id="canvas"
                  class=""
                  style=""
                />
              </div>
              <div class="col col-8 text-center q-mb-sm" style="overflow-wrap: break-word;">
                {{address}}
              </div>
              <div class="col col-12 text-center">
                  <q-btn
                  no-caps
                  color="primary"
                  icon="file_copy"
                  label="Copy Address"
                  @click="copy"
                />
              </div>
              </div>
            </div>
            <div class="row justify-around" style="">
              <div class="col-12 text-center row q-mb-md q-mt-md justify-center">
                <div class="col col-12 text-center text-h5">
                No Partial Payments. Send Exact Amount.
            </div>
                <div class="col col-12 text-center text-h6">
                Amount Recieved So Far:
            </div>
              <div class="col col-12 text-center justify-center text-h5">
                {{ actuallyPaid }} {{paymentInfo.paymentCoin.toUpperCase()}}
              </div>
              <div class="col col-12 text-center q-mt-sm">
                  <q-btn
                  :disable='disablePaymentCheck'
                  no-caps
                  color="positive"
                  icon="autorenew"
                  label="Check For Payment"
                  @click="checkForPayment(paymentInfo.nowPaymentsInfo.payment_id)"
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
import { defineProps, toRef, onUpdated, ref, computed, toRaw } from "vue"
import { copyToClipboard } from 'quasar'
import QRCode from 'qrcode'
import { numberArrayToWordArray } from'@/assets/misc.js'
const axios = require('axios')
const passphraseWrittenDown = ref(false)
const actuallyPaid = ref(0)
const address = ref('')
const disablePaymentCheck = ref(false)
const props = defineProps({
  paymentInfo: { type: Object, required: true }
})
const paymentInfo = toRef(props, 'paymentInfo')
console.log(paymentInfo.value.paymentCoin)
function copy () {
  copyToClipboard(paymentInfo.value.nowPaymentsInfo.pay_address)
    .then(() => {
    // success!
    })
    .catch(() => {
    // fail
    })
}
function createQRCode () {
  const canvas = document.getElementById('canvas')
  if (canvas === null) { return }
  address.value = paymentInfo.value.nowPaymentsInfo.pay_address
  QRCode.toCanvas(canvas, paymentInfo.value.nowPaymentsInfo.pay_address, { errorCorrectionLevel: 'L' }, function (error) {
    if (error) console.error(error)
  })
}
onUpdated(() => {
  createQRCode()
})
const wordList = computed(() => { 
  return numberArrayToWordArray(paymentInfo.value.numberArray)
})
const paymentCoinFullName = computed(() => { 
  const coinDict = {'xmr': 'Monero', 'ltc':'Litecoin', 'btc': 'Bitcoin', 'eth': 'Ethereum'}
  const selected = paymentInfo.value.paymentCoin
  return coinDict[selected]
})
function confirmPassphrase() {
  passphraseWrittenDown.value = true
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function checkForPayment(paymentID){
  disablePaymentCheck.value = true
  await sleep(5000)
  disablePaymentCheck.value = false
  const orderInfo = {itemList: toRaw(paymentInfo.value.itemList), nowPaymentsInfo: toRaw(paymentInfo.value.nowPaymentsInfo), paymentCoin: paymentInfo.value.paymentCoin,
    lockerZipcode: toRaw(paymentInfo.value.lockerZipcode), lockerName: toRaw(paymentInfo.value.lockerName), extraNotes: toRaw(paymentInfo.value.extraNotes)}
  const results = await axios.post('/.netlify/functions/checkPaymentStatus', { paymentID, orderInfo })
  actuallyPaid.value = results.data.actually_paid
  console.log(Number(paymentInfo.value.nowPaymentsInfo.pay_amount) <= Number(actuallyPaid.value))
  console.log(Number(paymentInfo.value.nowPaymentsInfo.pay_amount))
  if (Number(paymentInfo.value.nowPaymentsInfo.pay_amount) <= Number(actuallyPaid.value)) {
    console.log('paid and should reload')
    location.reload()
  }
}
</script>

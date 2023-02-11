<template>
    <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
  <div class="col-12 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
      <q-card class="col-12 col" style="">
        <q-card-section class="bg-grey-9 text-white">
          <div class="text-h6">Fill In Your Concierge Details Below:</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <div class="row justify-around" style="">
              <div class="col-12 text-center row q-mb-md justify-center q-gutter-y-md">
                <div class="col-12 col-md-6 text-center row justify-center">
                  <q-input
                    class="col-11"
                    v-model="link"
                    autogrow
                    label="Item Link"
                    error-message="Link Can't Be Empty"
                    :error="linkError"
                  />
                  <q-input
                    class="col-11"
                    v-model="itemDescription"
                    autogrow
                    label="Specific Item Info"
                  />
                  <q-input
                    class="col-11"
                    v-model="itemAmount"
                    label="Item Amount (USD)"
                    @blur="convertToUSD"
                    error-message="Not Valid Price"
                    :error="itemAmountError"
                  />
                  <q-input
                    class="col-11"
                    v-model="itemQuantity"
                    label="Item Quantity"
                  />
                  <div class="row col-8 q-mt-sm justify-center">
                    <q-btn
                      class="col-12"
                      color="positive"
                      label="Add Item To Cart"
                      @click="addItemToCart"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6 text-center row justify-center">
                  <q-card
                    class="col-12 col-md-10"
                    flat
                    v-if="itemList.length === 0"
                  >
                    <q-card-section>
                      <q-card
                        class="text-white bg-grey-9 q-pa-md text-center justify-center"
                      >
                        <p class="text-h5 text-weight-medium">Cart Empty</p>
                        <img
                          :src="cart"
                          class=""
                          style="
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                            width: 60%;
                          "
                        />
                      </q-card>
                    </q-card-section>
                  </q-card>
                  <q-card
                    class="col-12 col-md-12"
                    flat
                    v-if="itemList.length !== 0"
                  >
                    <q-card-section
                      class="q-pa-md text-left justify-center flat"
                    >
                      <q-card
                        v-for="(item, index) in itemList"
                        :key="item.link"
                        class="q-pa-sm q-mt-sm text-white bg-grey-9 row"
                      >
                        <div class="col-12 text-left" style="line-height: 150%">
                          {{ sliceString(item.link) }} <br />
                          Quantity: {{ item.quantity }} <br />
                          <span v-if="item.quantity > 1">
                            Single Item Cost: {{ item.cost }} <br
                          /></span>
                          Item(s) Total: {{ Number(item.cost)* Number(item.quantity) }}<br />
                          Item(s) Notes: {{item.description}}<br/>
                          <a :href="item.link" target="_blank" rel="noopener noreferrer" class="linkStyle">Link</a>
                        </div>
                        <div class="col-12 text-center">
                          <q-btn
                            color="negative"
                            icon="delete"
                            @click="removeItem(index)"
                          />
                        </div>
                      </q-card>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <q-chip
                  color="red"
                  text-color="white"
                  icon="dangerous"
                  label="Zipcode Is Too Short"
                  v-if="zipcodeError"
                />
                <q-input
                  v-model="lockerZipcode"
                  label="Your Delivery Zipcode"
                />
              </div>
              <q-input
                class="col-12 col-md-6"
                v-model="extraNotes"
                autogrow
                label="Order Notes"
              /> 
              <q-input v-model="salesTax"   class="col-12 col-md-3"  label="Sales Tax (%)" />
              <q-input v-model="extra"  class="col-12 col-md-5"   label="Extra (USD)"/>
              <q-select  class="col-12 col-md-6 q-mt-md" v-model="selectedCoin" :options="options" label="Payment Crypto" />
              <span class="col-12 q-mt-md">
                <q-chip
                  color="red"
                  text-color="white"
                  icon="dangerous"
                  label="Order Sub-total Minimum is $25 (USD)"
                  v-if="minAmountError"
                />
              </span>
              <div
                class="row col-12 col-md-8 q-mt-sm justify-center"
                v-if="itemList.length !== 0"
              >
                Sub-Total (USD): {{ orderUSDSubTotal }} <br />
                Estimated Taxes Collected by Retailer (~{{ taxRate*100 }}%): {{ taxAmount }} <br/>
                Order Deposit/Bond: {{ serviceFeeUSD }} <br/>
                Extra/Tip (USD): {{ extra }} <br/>
                <br />
                Final Total (USD):
                {{ finalTotalUSD }}
              </div>
              <div class="row col-12 col-md-8 q-mt-md justify-center">
                <q-btn

                  class="col-12"
                  color="green"
                  label="Submit Order"
                  @click="submitOrder"
                  text-color="white"
                  :disable='true'
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
//                  :disable="itemList.length === 0 || disableSubmit"
import { ref, watch, computed, defineEmits, toRaw } from "vue"
import cart from "@/assets/svgs/cart.svg"
import { encrypt, getRandomInt } from "@/assets/misc.js"
const emit = defineEmits(['paymentSTarted'])
const salesTax = ref(8)
const serviceFee = (10)
const extra = ref(0)
const selectedCoin = ref('Monero')
const options = ['Monero']
const axios = require('axios')
const link = ref("")
const itemDescription = ref("")
const itemAmount = ref("0.00")
const itemQuantity = ref(1)
const itemList = ref([])
const lockerZipcode = ref(0)
const extraNotes = ref("")
const minOrderamount = 25
const linkError = ref(false)
const itemAmountError = ref(false)
const zipcodeError = ref(false)
const minAmountError = ref(false)
const numberArray = ref([])
const disableSubmit = ref(false)
function removeItem(index) {
  itemList.value.splice(index, 1)
}
function addItemToCart() {
  if (!checkInputs()) {
    return false
  }
  const item = {}
  item.link = link.value
  item.description = itemDescription.value
  item.cost = itemAmount.value
  item.quantity = itemQuantity.value
  itemList.value.push(item)
  link.value = ""
  itemDescription.value = ""
  itemAmount.value = "0.00"
  itemQuantity.value = 1
}
function checkInputs() {
  if (link.value.length === 0) {
    linkError.value = true
    return false
  }
  if (itemAmount.value <= 0) {
    itemAmountError.value = true
    return false
  }
  return true
}
watch(link, () => {
  linkError.value = false
})
watch(itemAmount, () => {
  itemAmountError.value = false
})
watch(lockerZipcode, () => {
  zipcodeError.value = false
})
watch(itemAmount, () => {
  minAmountError.value = false
})
async function generateRandomArray() {
  const numberArray = []
  for (var i=0;i<6; i++) {
    numberArray.push(await getRandomInt(2048))
  }
  return numberArray
}
function convertToUSD() {
  const temp = Number(parseFloat(itemAmount.value.replace(/,/g, "")))
  itemAmount.value = temp.toFixed(2)
}
function sliceString(string) {
  const firstString = string.slice(0, 30).trim()
  return firstString + `...`
}
const orderUSDSubTotal = computed(() => {
  let total = 0
  for (let index = 0; index < itemList.value.length; index++) {
    const element = itemList.value[index]
    total += Number(element.cost).toFixed(2) * Number(element.quantity)
  }
  return Number(total).toFixed(2)
})
const serviceFeeUSD = computed(() => {
  // const amazonSubtotalPlusTaxes = Number(orderUSDSubTotal.value) + Number(taxAmount.value)
  // const percentageTotal = amazonSubtotalPlusTaxes*Number(serviceFee/100)
  return (10).toFixed(2)
})
const taxAmount = computed(() => {
  return Number(Number(orderUSDSubTotal.value) * taxRate.value).toFixed(2)
})
const finalTotalUSD = computed(() => {
  const longNumber =
    Number(orderUSDSubTotal.value) + Number(taxAmount.value)+ Number(extra.value) + Number(serviceFeeUSD.value)
  return Number(longNumber).toFixed(2)
})
const paymentTicker = computed(() => {
  const tickerDict = {'Monero': 'xmr', 'Litecoin':'ltc', 'Bitcoin': 'btc', 'Ethereum': 'eth'}
  const selected = selectedCoin.value
  return tickerDict[selected]
})
function submitOrderChecks() {
  if (orderUSDSubTotal.value < minOrderamount) {
    minAmountError.value = true
    return false
  }
  if (lockerZipcode.value.toString(2).length < 5) {
    zipcodeError.value = true
    return false
  }
  return true
}
async function submitOrder() {
  const checksPassed = submitOrderChecks()
  if (!checksPassed) {
    return
  }
  numberArray.value = await generateRandomArray()
  console.log(numberArray.value.toString())
  const encryptedPassphrase = await encrypt(numberArray.value.toString())
  console.log(encryptedPassphrase)
  try {
  disableSubmit.value = true
  const results = await axios.post('/.netlify/functions/createPayment', { encryptedPassphrase, finalTotalUSD: finalTotalUSD.value, paymentCoin: paymentTicker.value })
  disableSubmit.value = false
  emit('paymentSTarted', 
  { 
    nowPaymentsInfo: results.data, numberArray: toRaw(numberArray.value), encryptedPassphrase, 
    itemList: toRaw(itemList.value),serviceFee: toRaw(serviceFee),
    zipcode: toRaw(lockerZipcode.value), extra: toRaw(extra.value), salesTax: toRaw(salesTax.value), 
   extraNotes: toRaw(extraNotes.value), paymentCoin: paymentTicker.value
  })
} catch (err) {
  disableSubmit.value = false
  console.log(err)
}
}
const taxRate = computed(() => {
  return Number(salesTax.value)/100
})
</script>
<style lang="sass" scoped>
.linkStyle
  color: #00FFFF
</style>

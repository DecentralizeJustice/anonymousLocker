<template>
  <div class="col-12 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
      <q-card class="col-12 col" style="">
        <q-card-section>
          <div class="text-h6">Fill In Your New Order Details Below:</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <div class="row justify-around" style="">
              <div class="col-12 text-center row q-mb-md justify-center q-gutter-y-md">
                <div class="col-12 col-md-6 text-center row justify-center">
                  <q-input
                    class="col-11"
                    v-model="amazonlink"
                    autogrow
                    label="Item Link"
                    error-message="Link Can't Be Empty"
                    :error="linkError"
                  />
                  <q-input
                    class="col-11"
                    v-model="amazonItemDescription"
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
                        class="pageCard q-pa-md text-center justify-center"
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
                        class="q-pa-sm q-mt-sm pageCard row"
                      >
                        <div class="col-12 text-left" style="line-height: 150%">
                          {{ sliceString(item.link) }} <br />
                          Quantity: {{ item.quantity }} <br />
                          <span v-if="item.quantity > 1">
                            Single Item Cost: {{ item.cost }} <br
                          /></span>
                          Item(s) Total: {{ Number(item.cost)* Number(item.quantity) }}<br />
                          Item(s) Notes: {{item.description}}<br/>
                          <a :href="item.link" class="linkStyle">Link</a>
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
              <q-input
                class="col-12 col-md-5"
                v-model="lockerName"
                label="Amazon Locker Name"
              />
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
                  label="Amazon Locker Zipcode"
                />
              </div>
              <q-input
                class="col-12 col-md-7"
                v-model="extraNotes"
                autogrow
                label="Questions, Concerns, & Notes"
              />
              <span class="col-12 q-mt-md">
                <q-chip
                  color="red"
                  text-color="white"
                  icon="dangerous"
                  label="Order Sub-total Minimum is ${{minOrderamount}} (USD)"
                  v-if="minAmountError"
                />
              </span>
              <div
                class="row col-12 col-md-8 q-mt-sm justify-center"
                v-if="itemList.length !== 0"
              >
                Sub-Total (USD): {{ orderUSDSubTotal }} <br />
                Taxes Collected by Amazon (~{{ taxRate*100 }}%): {{ taxAmount }} <br/>
                Service Fee ({{ percentageFee * 100 }}%): {{ serviceFeeUSD }}
                <br />
                Final Total (USD):
                {{ finalTotalUSD }}
              </div>
              <div class="row col-12 col-md-8 q-mt-md justify-center">
                <q-btn
                  :disable="itemList.length === 0 || disableSubmit"
                  class="col-12"
                  color="primary"
                  label="Submit Order"
                  @click="submitOrder"
                  text-color="dark"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
// https://www.amazon.com/ulp/view
// https://www.amazon.com/
// restrictions https://www.amazon.com/gp/help/customer/display.html?nodeId=201910770
// single item limit 5,000 USD
import { ref, watch, computed, defineEmits, toRaw } from "vue"
import cart from "@/assets/svgs/cart.svg"
import { encrypt, getRandomInt } from "@/assets/misc.js"
const emit = defineEmits(['paymentSTarted'])
const axios = require('axios')
const amazonlink = ref("")
const amazonItemDescription = ref("")
const itemAmount = ref("0.00")
const itemQuantity = ref(1)
const itemList = ref([])
const lockerZipcode = ref(0)
const lockerName = ref("")
const extraNotes = ref("")
const percentageFee = 0.06
const minOrderamount = 25
const taxRate = 0.08
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
  item.link = amazonlink.value
  item.description = amazonItemDescription.value
  item.cost = itemAmount.value
  item.quantity = itemQuantity.value
  itemList.value.push(item)
  amazonlink.value = ""
  amazonItemDescription.value = ""
  itemAmount.value = "0.00"
  itemQuantity.value = 1
}
function checkInputs() {
  if (amazonlink.value.length === 0) {
    linkError.value = true
    return false
  }
  if (itemAmount.value <= 0) {
    itemAmountError.value = true
    return false
  }
  return true
}
watch(amazonlink, () => {
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
  for (var i=0;i<4; i++) {
    numberArray.push(await getRandomInt(2048))
  }
  return numberArray
}
function convertToUSD() {
  const temp = Number(parseFloat(itemAmount.value.replace(/,/g, "")))
  itemAmount.value = temp.toFixed(2)
}
function sliceString(string) {
  const firstString = string.split("/")
  return firstString[3].replace(/-/g, " ")
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
  return Number((Number(orderUSDSubTotal.value) + Number(taxAmount.value)) * percentageFee).toFixed(2)
})
const taxAmount = computed(() => {
  return Number(Number(orderUSDSubTotal.value) * taxRate).toFixed(2)
})
const finalTotalUSD = computed(() => {
  const longNumber =
    Number(orderUSDSubTotal.value) + Number(serviceFeeUSD.value) + Number(taxAmount.value)
  return Number(longNumber).toFixed(2)
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
  const results = await axios.post('/.netlify/functions/createPayment', { encryptedPassphrase, finalTotalUSD: finalTotalUSD.value })
  disableSubmit.value = false
  emit('paymentSTarted', { nowPaymentsInfo: results.data, numberArray: toRaw(numberArray.value), encryptedPassphrase, itemList: toRaw(itemList.value),
   lockerZipcode: toRaw(lockerZipcode.value), lockerName: toRaw(lockerName.value), extraNotes: toRaw(extraNotes.value)})
} catch (err) {
  disableSubmit.value = false
  console.log(err)
}
}
</script>
<style lang="sass" scoped>
.pageCard
  background: $secondary
  color: white
.linkStyle
  color: $primary
</style>

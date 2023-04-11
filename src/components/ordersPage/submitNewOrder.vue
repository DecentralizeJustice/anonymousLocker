<template>
  <div class="col-12 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
      <q-card class="col-12 col" style="">
        <q-card-section class="bg-grey-9 text-white">
          <div class="text-h6">Fill In Locker Order Details:</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="q-pa-md">
            <div class="row justify-around" style="">
              <div class="col-12 text-center row q-mb-xl justify-center q-gutter-y-md">
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
                    type="number"  
                  />
                  <q-input
                    class="col-11"
                    v-model="itemQuantity"
                    label="Item Quantity"
                    error-message="Not Valid Amount"
                    :error="itemQuantityError"
                    type="number"  

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
              <div
                class="row col-12 justify-around"
              >
              <div class="col-12 col-md-5 q-my-sm">
<!--               <q-chip
                  color="primary"
                  text-color="white"
                  icon="place"
                  label='Find Amazon Lockers'
                  @click="openLockerMap"
                /> -->
                <a href="https://www.amazon.com/ulp/view" target="_blank" rel="noopener noreferrer"
                class="text-h6"
                >
                  Find US Amazon Lockers Here
                </a>
              <q-input
                v-model="lockerName"
                label="Amazon Locker Name (Optional)"
              />
            </div>
                <q-input
                error-message="Zipcode Is Too Short"
                :error="zipcodeError"
                class="col-12 col-md-5 q-my-sm"
                  v-model="lockerZipcode"
                  label="Your Zipcode"
                />
                <q-select v-model="country" :options="countries" label="Country" 
                class="col-12 col-md-5 q-my-sm"/>
                <q-input v-model="extra"  class="col-12 col-md-5 q-my-sm" type="number"  
                  label="Extra/Tip (USD)" :disable="discountPossible"/>
              <q-input
                class="col-12 col-md-5 q-my-sm"
                v-model="extraNotes"
                autogrow
                label="Order Notes"
              /> 
              <q-input
                class="col-12 col-md-5 q-my-sm"
                v-model="xmrRefundAddress"
                autogrow
                error-message="Not Monero Address"
                :error="xmrRefundAddressError"
                label="Monero Refund Address"
              /> 
              <div class="col-12 col-md-5 q-my-sm">
<!--                 <q-toggle
                  v-model="hwOrder"
                  color="red"
                  icon="primary"
                  label="HW Wallet Only Order"
                />      <q-icon
        size="md"
        name="phonelink_lock"
      /> -->
              </div>
              <span class="col-12 q-mt-md">
                <q-chip
                  color="red"
                  text-color="white"
                  icon="dangerous"
                  label="Order Sub-total Minimum is $25 (USD)"
                  v-if="minAmountError"
                />
              </span>
              </div>
              <div
                class="row col-12 col-md-6 q-mt-sm justify-center text-body1"
              >
                Sub-Total: {{ orderUSDSubTotal }} USD<br />
                Estimated Taxes (~{{ taxRate*100 }}%): {{ taxAmount }} USD<br/>
                Items After Tax: {{ itemsAfterTax }} USD<br />
                <span v-if="discountPossible">Items After ({{ discountPercent }}%)
                   Discount: {{ Number(itemsAfterTax - discountAmount).toFixed(2) }} USD</span>
                
              </div>
              <div
                class="row col-12 col-md-6 q-mt-sm justify-center text-body1"
              >
                Extra/Tip: {{ extra }} USD <br/>
<!--                 Refundable Bound Amount: {{ bondAmount }} USD <br/> -->
                Non-Refundable Service Fee: {{Number(correctFee - specialOrderDiscountFlat)}} USD <br/>
              </div>
              <div
                class="row col-12 col-md-12 text-h5 q-mt-lg justify-center"
              >
              
              Amount Due: ~{{ finalTotalUSD }} USD <br/>
<!--               Amount You Will Be Refunded: ~ {{ bondAmount }} USD <br/>
              Real Items Cost: ~ {{ Number(finalTotalUSD -  bondAmount).toFixed(2)}} USD -->
              </div>

              <div class="row col-12 col-md-8 q-mt-md justify-center">
                <q-btn
                  :disable="itemList.length === 0 || disableSubmit"
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
    <q-dialog v-model="alert" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Discount Info</div>
        </q-card-section>

        <q-card-section class="text-body1">
           Our discount ability does not guarantee that your order will be filled.
           Your order will sit in our order book until or if it is completed. 
           Your order will sit in our order book for 30 days; after that time
           you will be refunded for your order , 
           minus the Non-Refundable Fee of {{ serviceFeeUSD }} USD. If your discount is too
          much for our earners, your order will not be picked up by them before it is removed from our orderbooks.
          </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="I Understand" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, watch, computed, defineEmits, toRaw } from "vue"
import cart from "@/assets/svgs/cart.svg"
import { encrypt, getRandomInt } from "@/assets/misc.js"
const emit = defineEmits(['paymentSTarted'])
const alert = ref(false)
const giftcardOnlyOrder = ref(false)
const amazonlink = ref("")
const amazonItemDescription = ref("")
const itemAmount = ref("0.00")
const itemQuantity = ref(1)
const itemList = ref([])
const lockerZipcode = ref(0)
const lockerName = ref("")
const country = ref('USA')
const countries = [ 'USA', 'Canada', 'Germany', ' France', 'United Kingdom / Ireland', 'Poland', 'Spain', 'Mexico', 'Japan', 'Other European Country', 'Netherlands', 'Other']
const extraNotes = ref("")
const xmrRefundAddress = ref("")
const minOrderamount = 25
const serviceFeeUSD = 5
const servicePercentage = 3
const bondAmount = 0
const discountPercent = ref(3)
const extra = ref(0)
const hwOrder = ref(false)
const discountPossible = ref(false)
const linkError = ref(false)
const itemQuantityError = ref(false)
const itemAmountError = ref(false)
const zipcodeError = ref(false)
const xmrRefundAddressError = ref(false)
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
  if (itemQuantity.value <= 0) {
    itemQuantityError.value = true
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
watch(itemQuantity, () => {
  itemQuantityError.value = false
})
watch(lockerZipcode, () => {
  zipcodeError.value = false
})
watch(itemAmount, () => {
  minAmountError.value = false
})
watch(xmrRefundAddress, () => {
  xmrRefundAddressError.value = false
})
async function generateRandomArray() {
  const numberArray = []
  for (var i=0;i<8; i++) {
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
const taxAmount = computed(() => {
  return Number(Number(orderUSDSubTotal.value) * taxRate.value).toFixed(2)
})
const itemsAfterTax = computed(() => {
  const longNumber =
    Number(orderUSDSubTotal.value) + Number(taxAmount.value)
  return Number(longNumber).toFixed(2)
})
const percentageFee = computed(() => {
  const longNumber =
    Number(orderUSDSubTotal.value*(servicePercentage/100))
  return Number(longNumber).toFixed(2)
})
const correctFee = computed(() => {
  if(Number(percentageFee.value) > Number(serviceFeeUSD)) {
    return Number(percentageFee.value).toFixed(2)
  }
  return Number(serviceFeeUSD).toFixed(2)
})
const finalTotalUSD = computed(() => {
  const longNumber =
    Number(orderUSDSubTotal.value) + Number(taxAmount.value) + Number(correctFee.value) + Number(extra.value)
  return Number(longNumber).toFixed(2)
})
const discountAmount = computed(() => {
  if(discountPossible.value) {
    const longNumber =
    Number(Number(orderUSDSubTotal.value) + Number(taxAmount.value)) * Number(discountPercent.value/100)
  return Number(longNumber)
  } else {
  return Number(0)
  }
})
const specialOrderDiscountFlat = computed(() => {
  if(hwOrder.value){ return Number(serviceFeeUSD).toFixed(2)}
  return Number(0).toFixed(2)
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
  if (xmrRefundAddress.value.length < 3) {
    xmrRefundAddressError.value = true
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
  const encryptedPassphrase = await encrypt(numberArray.value.toString())
  console.log(encryptedPassphrase)
  try {
  disableSubmit.value = true
  // const results = await axios.post('/.netlify/functions/createPayment', { encryptedPassphrase, finalTotalUSD: finalTotalUSD.value, paymentCoin: paymentTicker.value })
  disableSubmit.value = false
  const metadata =   
    { 
      numberArray: toRaw(numberArray.value), 
      itemList: toRaw(itemList.value),
      lockerZipcode: toRaw(lockerZipcode.value), 
      lockerName: toRaw(lockerName.value), 
      extraNotes: toRaw(extraNotes.value),
      type: 'firstLockerOrder',
      amount: finalTotalUSD.value,
      taxAmount: taxAmount.value,
      orderSubtotal: orderUSDSubTotal.value,
      bondUSD: bondAmount,
      serviceFeeUSD: correctFee.value,
      extraAmountUSD: extra.value,
      refundAddress: xmrRefundAddress.value,
      discountPercent: discountPercent.value,
      discountPossible: discountPossible.value,
      country: country.value
    }
  emit('paymentSTarted', { amount: finalTotalUSD.value, metadata })
} catch (err) {
  disableSubmit.value = false
  console.log(err)
}
}
const taxRate = computed(() => {
  if (giftcardOnlyOrder.value) {
    return 0
  }
  return 0.08
})
</script>
<style lang="sass" scoped>
.linkStyle
  color: #00FFFF
</style>

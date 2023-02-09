<template>
<div class="col-12 col justify-center column">
    <div class="column justify-center">
      <q-card class="text-center" style="">
        <q-card-section class="bg-primary text-white">
          <div class="col-12 text-center row justify-center text-black text-h5">
            <p class="text-h4 text-weight-medium text-white">
                      Open Orders
                    </p>
                <q-card class="q-pa-md" style="width: 100%;">
                  <div class="row">
                    <div class="col desktop-only">XMR Earned<br/></div>
                    <div class="col">USD Cost</div>
                    <div class="col desktop-only">XMR/USD</div>
                    <div class="col desktop-only">Description</div>
                    <div class="col">Country</div>
                    <div class="col desktop-only">Number of Items</div>
                    <div class="col desktop-only">Delivery Method</div>
                    <div class="col">Order Name</div>
                  </div>
                </q-card>
              </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div v-if="orderBook.length !== 0">
              <div  class="col-12 text-center row justify-center text-h5 q-my-md" v-for="order in orderBook" :key="order.link">
                <q-card class="q-pt-md" style="width: 100%; background-color:#D4CCC4;">
                  <div class="row">
                    <div class="col desktop-only">{{order.xmrAmount}}</div>
                    <div class="col">~{{order.usdAmount}}</div>
                    <div class="col desktop-only">~{{ratio(order.xmrAmount,order.usdAmount)}}</div>
                    <div class="col desktop-only">{{order.description}}</div>
                    <div class="col">{{order.country}}</div>
                    <div class="col desktop-only">{{order.numberOfItems}}</div>
                    <div class="col desktop-only">{{order.type}}</div>
                    <div class="col">{{order.name}}</div>
                  </div>
                </q-card>
              </div>
            </div>
              <div  v-if="orderBook.length === 0" class="col col-12 justify-center items-center align-center row">
                <div class="col-6 col-md-2 justify-center items-center align-center row q-pa-xl" style="">
                  <q-img
                  class="rounded-borders"
                    :src="order"
                  />
                      </div>
              </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import order from "@/assets/svgs/empty-cart.svg"
function ratio(xmr,usd) {
  return Number(Number(usd)/Number(xmr)).toFixed(2)
}
const orderBook = [
  {
    name: "complex river",
    type: "Locker",
    xmrAmount:".48",
    description: "Books",
    country: "United States",
    usdAmount: "74.69",
    numberOfItems: "3"
  },
  {
    name: "trite cookie",
    type: "Locker",
    xmrAmount:".5773",
    description: "Books",
    country: "United States",
    usdAmount: "89.71",
    numberOfItems: "3"
  },
  {
    name: "itchy village",
    type: "Locker",
    xmrAmount:".506",
    description: "Books",
    country: "United States",
    usdAmount: "78.77",
    numberOfItems: "3"
  }
]
</script>
<style lang="sass" scoped>
.linkStyle
  color: #00FFFF
</style>

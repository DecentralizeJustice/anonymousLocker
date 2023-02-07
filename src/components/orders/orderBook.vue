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
                    <div class="col desktop-only">XMR Amount</div>
                    <div class="col">USD Amount</div>
                    <div class="col desktop-only">Link</div>
                    <div class="col desktop-only">Zipcode</div>
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
              <div class="col-12 text-center row justify-center text-h5 q-my-md" v-for="order in orderBook" :key="order.link">
                <q-card class="q-pa-md" style="width: 100%; background-color:#D4CCC4;">
                  <div class="row">
                    <div class="col desktop-only">{{order.xmrAmount}}</div>
                    <div class="col">{{order.usdAmount}}</div>
                    <div class="col desktop-only"><a :href="order.link" target="_blank" rel="noopener noreferrer">Link</a></div>
                    <div class="col desktop-only">{{order.zipcode}}</div>
                    <div class="col">{{order.country}}</div>
                    <div class="col desktop-only">{{order.numberOfItems}}</div>
                    <div class="col desktop-only">{{order.type}}</div>
                    <div class="col">{{order.name}}</div>
                  </div>
                </q-card>
              </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
const orderBook = [
  {
    name: "pale key",
    zipcode: "00000",
    type: "Wish List",
    xmrAmount:"7.181",
    link: "https://www.amazon.com/gp/product/B09MW13RQH/",
    country: "United States",
    usdAmount: "1208.40",
    numberOfItems: "1"
  },
  {
    name: "loyal bow",
    zipcode: "00000",
    type: "Wish List",
    xmrAmount:"7.86",
    link: "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Brightest-Processor/dp/B09MW11C2H",
    country: "United States",
    usdAmount: "1,323.94",
    numberOfItems: "1"
  }
]
</script>
<style lang="sass" scoped>
.linkStyle
  color: #00FFFF
</style>

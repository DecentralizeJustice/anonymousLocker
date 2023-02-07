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
                    <div class="col desktop-only">Link</div>
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
                    <div class="col desktop-only">{{ratio(order.xmrAmount,order.usdAmount)}}</div>
                    <div class="col desktop-only"><a :href="order.link" target="_blank" rel="noopener noreferrer">Link</a></div>
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
function ratio(xmr,usd) {
  return Number(Number(usd)/Number(xmr)).toFixed(2)
}
const orderBook = [
  {
    name: "pale key",
    type: "Wish List",
    xmrAmount:"7.181",
    link: "https://www.amazon.com/gp/product/B09MW13RQH/",
    country: "United States",
    usdAmount: "1208.40",
    numberOfItems: "1"
  },
/*   {
    name: "loyal bow",
    type: "Wish List",
    xmrAmount:"7.86",
    link: "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Brightest-Processor/dp/B09MW11C2H",
    country: "United States",
    usdAmount: "1,323.94",
    numberOfItems: "1"
  }, */
  {
    name: "short hill",
    type: "Locker",
    xmrAmount:".327",
    link: "https://www.amazon.com/gp/product/B0BP16CHNL/",
    country: "United States",
    usdAmount: "55.10",
    numberOfItems: "2"
  }
]
</script>
<style lang="sass" scoped>
.linkStyle
  color: #00FFFF
</style>

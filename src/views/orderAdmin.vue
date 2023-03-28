<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
  <div class="col-12 col-md-12 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="">

          <q-list v-for="order in orders" :key="order.passphrase">
            <q-expansion-item popup default-closed group="ordersGroup" :label="order.orders[0].nickName" >
              <q-separator />
              <q-card>
                <q-card-section>
                  <accountDashboard :accountInfo='order' :passphrase='order.passphrase'/>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
    


<script setup>
import { onMounted, ref } from "vue"
import accountDashboard from '@/components/ordersPage/accountDashboard.vue'
const axios = require('axios')
const orders = ref([])
onMounted(async () => {
  const results = await axios.post('/.netlify/functions/getAll', {  })
  orders.value = results.data
})
</script>

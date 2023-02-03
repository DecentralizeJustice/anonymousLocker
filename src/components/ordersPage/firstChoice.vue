<template>
      <div class="row items-center justify-around align-center">
        <q-card class="col-9 col-md-5">
          <q-card-section>
            <p class="text-h5 text-weight-medium">Place Shopper Order</p>
            <img :src="computer" class="" style="width: 60%" /><br />
            <q-btn
              color="primary"
              label="Place Shopper Order"
              size="lg"
              style="color: white" 
              padding="sm"
              no-caps
              @click="selectFirstChoice('newOrder')"
            />
          </q-card-section>
        </q-card>
        <q-card class="col-9 col-md-5">
          <q-card-section>
            <p class="text-h5 text-weight-medium">Check <br/>Earner or Shopper Order</p>
            <img :src="delivery" class="" style="width: 60%" /><br />
            <q-btn
              color="primary"
              label="Check On Order"
              size="lg"
              style="color: white"
              padding="sm"
              no-caps
              @click="router.push('/checkOnOrder')"
            />
          </q-card-section>
        </q-card>
      </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineEmits } from "vue"
import computer from "@/assets/svgs/monitor.svg"
import delivery from "@/assets/svgs/delivery.svg"
const router = useRouter()
const emit = defineEmits(['firstChoice'])
function selectFirstChoice(choice) {
  emit('firstChoice',choice)
}
</script>

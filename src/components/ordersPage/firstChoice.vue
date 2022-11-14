<template>
      <div class="row items-center justify-around align-center">
        <q-card class="col-9 col-md-5">
          <q-card-section>
            <p class="text-h5 text-weight-medium">Place New Order</p>
            <img :src="computer" class="" style="width: 60%" /><br />
            <q-btn
              color="primary"
              label="Place New Order"
              size="lg"
              style="color: white" 
              padding="sm"
              no-caps
              :disable="true"
              @click="selectFirstChoice('newOrder')"
            />
          </q-card-section>
        </q-card>
        <q-card class="col-9 col-md-5">
          <q-card-section>
            <p class="text-h5 text-weight-medium">Check On Order</p>
            <img :src="delivery" class="" style="width: 60%" /><br />
            <q-btn
              color="primary"
              label="Check On Order"
              size="lg"
              style="color: white"
              padding="sm"
              no-caps
              @click="selectFirstChoice('checkOnOrder')"
            />
          </q-card-section>
        </q-card>
      </div>
</template>

<script setup>
import { defineEmits } from "vue"
import computer from "@/assets/svgs/monitor.svg"
import delivery from "@/assets/svgs/delivery.svg"
const emit = defineEmits(['firstChoice'])
function selectFirstChoice(choice) {
  emit('firstChoice',choice)
}
</script>

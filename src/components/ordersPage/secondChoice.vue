<template>
      <div class="row items-center justify-around align-center">
        <q-card class="col-9 col-md-5">
          <q-card-section>
            <p class="text-h5 text-weight-medium">Deliver To Address</p>
            <img :src="home" class="" style="width: 50%" /><br />
            <q-btn
              color="primary"
              label="Place Address Order"
              size="lg"
              style="color: white" 
              padding="sm"
              no-caps
              @click="router.push('/placeConciergeOrder')"
            />
          </q-card-section>
        </q-card>
        <q-card class="col-9 col-md-5">
          <q-card-section>
            <p class="text-h5 text-weight-medium">Deliver to Locker</p>
            <img :src="locker" class="" style="width: 50%" /><br />
            <q-btn
              color="primary"
              label="Place Locker Order"
              size="lg"
              style="color: white"
              padding="sm"
              no-caps
              @click="router.push('/placeLockerOrder')"
            />
          </q-card-section>
        </q-card>
      </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import locker from "@/assets/svgs/amazonLocker.svg"
import home from "@/assets/svgs/home.svg"
const router = useRouter()
</script>

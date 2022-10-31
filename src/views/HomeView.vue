<template>
  <q-page
    style="
      background-image: url('https://images.unsplash.com/photo-1607950369167-90df34616558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
      width: 100vw;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <!-- page content -->

    <div class="row justify-center q-gutter-md no-margin">
      <div class="row col col-6">
        <q-card class="q-mt-xl text-center bg-primary text-white col col-12">
          <q-card-section>
            <div
              class="text-h2 text-weight-regular"
              style="line-height: 120%; font-weight: 400"
            >
              The Most Private Way <br />
              to Shop Online
            </div>
            <div
              class="text-h5 text-weight-regular q-mt-md"
              style="line-height: 120%"
            >
              No Address, Identification, or Email needed. Just Monero!
            </div>
          </q-card-section>
        </q-card>
        <q-card class="text-center col col-12 q-mt-xl text-black" style="">
          <q-card-section>
            <div class="text-h4">How It Works:</div>
            <div class="q-mt-md">
              <div class="">
                <div class="row">
                  <div class="col">
                    <p class="text-h6 text-weight-medium">Step 1.</p>
                    <img :src="computer" class="q-mb-sm" style="width: 60%" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      Choose Amazon Product and <br />Place Order With Me
                    </p>
                  </div>
                  <div class="col">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="monero" class="" style="width: 60%" /><br />
                    <p class="text-subtitle1 text-weight-medium">
                      Pay For Order With Monero
                    </p>
                  </div>
                  <div class="col">
                    <p class="text-h6 text-weight-medium">Step 3.</p>
                    <img :src="lockerBig" class="" style="width: 60%" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      Pick Up Order At Amazon Locker <br />Near You
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <router-link :to="{ name: 'ordersPage' }" style="text-decoration:none !important; text-decoration:none;">
                <q-btn
                  color="primary"
                  label="Place A Order!"
                  size="lg"
                  style="color: white"
                  padding="sm"
                />
              </router-link>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col col-4"></div>
    </div>
  </q-page>
</template>

<script setup>
import computer from "@/assets/svgs/monitor.svg"
import monero from "@/assets/svgs/rand.svg"
import lockerBig from "@/assets/svgs/end.svg"
</script>

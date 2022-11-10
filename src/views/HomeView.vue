<template>
  <q-page
    style="
      background-image: url('https://res.cloudinary.com/dylevfpbl/image/upload/v1667928942/photo-1607950369167-90df34616558.jpg');
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <!-- page content -->

    <div class="row justify-center no-margin no-padding col-12">
      <div class="row col col-10 col-md-6">
        <q-card class="q-mt-xl text-center bg-primary text-white col col-12">
          <q-card-section class="desktop-only">
            <div
              class="text-h2 text-weight-regular"
              style="line-height: 120%; font-weight: 400"
            >
              {{heroText}}
            </div>
            <div
              class="text-h5 text-weight-regular q-mt-md"
              style="line-height: 120%"
            >
              No Address, Identification, or Email needed. Just Monero!
            </div>
          </q-card-section>
          <q-card-section class="mobile-only">
            <div
              class="text-h4 text-weight-regular"
              style="line-height: 120%; font-weight: 400"
            >
              {{heroText}}
            </div>
            <div
              class="text-body1 text-weight-regular q-mt-md"
              style="line-height: 120%"
            >
              No Address, Identification, or Email needed. Just Monero!
            </div>
          </q-card-section>
        </q-card>
        <q-card class="text-center col col-12 q-my-xl text-black" style="">
          <q-card-section>
            <div class="text-h4">How It Works:</div>
            <div class="q-mt-md">
              <div class="">
                <div class="row justify-around">
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 1.</p>
                    <img :src="computer" class="q-mb-sm" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
                    <br />
                    <p class="text-subtitle1 text-weight-medium">
                      Choose Amazon Product and <br />Place Order With Me
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 2.</p>
                    <img :src="monero" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" /><br />
                    <p class="text-subtitle1 text-weight-medium">
                      Pay For Order With Monero
                    </p>
                  </div>
                  <div class="col-12 col-md-3">
                    <p class="text-h6 text-weight-medium">Step 3.</p>
                    <img :src="lockerBig" class="" :class="{'desktopIcons': $q.screen.gt.sm, 'mobileIcons': $q.screen.lt.md}" style="" />
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
const heroText = 'Shop Without Exposing Your Shipping Address'
</script>
<style lang="sass" scoped>
.desktopIcons
  width:  60%
.mobileIcons
  width:  30%
</style>
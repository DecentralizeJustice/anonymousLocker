<template>
  <div class="col-6 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="">
          <q-card-section class="bg-secondary text-white">
            <div class="text-h6">Chat About Your Order</div>
          </q-card-section>
          <q-separator />
          <!-- <q-card-section
                    class=" col-12 row text-center justify-center"
                    style="border-radius: 10px;"
                    v-if="orderNotFound"
                  >
                    <div class="text-h6 text-white col-8 bg-red-5 q-pa-md">
                      Order Does Not Exist!
                    </div>
                  </q-card-section>
          <q-card-section>
            <div class="">
              <div class="row justify-around" style="">
                <div class="col-12 text-center row  justify-center">
                <q-card class="col col-8 text-left justify-center bg-black text-white q-pb-md  row">
                  <q-card-section
                      class="col-11 text-center"
                      style="border-radius: 10px;"
                    >
                      <div class="text-h6">
                        Enter Your Order Passphrase
                      </div>
                      <div class="text-left  text-white row col-12 justify-center">
                    <div     class="row col-12 justify-center q-mt-sm" v-for="(item, index) in passphraseLength"
                      :key="item">
                        <q-chip
                        color="red"
                        text-color="white"
                        icon="dangerous"
                        label="Not Valid Word"
                        v-if="validWordWarningArray[index]"
                      />
                      <q-input
                      dark
                      standout="bg-primary text-white"
                      label-color="white"
                      class="col-10"
                        v-model="passphraseWords[index]"
                        :label='getPassphraseInputLabels(index+1) + " Word"'
                      />
                
                    </div>
                  </div>
                    </q-card-section>
                </q-card>
                <div class="col col-12 q-mt-md text-center">
                    <q-btn
                    no-caps
                    :disable="buttonDisabled"
                    color="positive"
                    icon="check"
                    label="View Order"
                    @click="enterPassphrase"
                  />
                </div>
                </div>
              </div>
            </div>
          </q-card-section> -->
        </q-card>
      </div>
    </div>
  </template>
    
<script setup>
</script>

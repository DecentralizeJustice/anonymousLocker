<template>
  <div class="col-11 col-md-6 col justify-center column">
    <div class="column justify-center" style="">
        <q-card class="col-12 col" style="">
          <q-card-section class="bg-secondary text-white">
            <div class="text-h6">Check On Order</div>
          </q-card-section>
          <q-separator />
          <q-card-section
                    class=" col-12 row text-center justify-center"
                    style="border-radius: 10px;"
                    v-if="orderNotFound"
                  >
                    <div class="text-h6 text-white col-8 bg-red-5 q-pa-md">
                      Order Does Not Exist!
                    </div>
                    <span class="q-mt-sm"><router-link to="message">Message Me If Your Having Issues</router-link></span>
                  </q-card-section>
          <q-card-section>
            <div class="">
              <div class="row justify-around" style="">
                <div class="col-12 text-center row  justify-center">
                <q-card class="col-12 col-md-8 text-left justify-center bg-black text-white q-pb-md  row">
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
                      mask="aaaaaaaaaaaaaaaaaaaaaaaa"
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
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
    
<script setup>
import { ref, watch, defineEmits } from "vue"
import bip39Wordlist from "@/assets/bip39Wordlist.txt"
const emit = defineEmits(['passphraseEnteredSuccess'])
const axios = require('axios')
const passphraseWords = ref([])
const passphraseLength = 4
const validWordWarningArray = ref([false, false, false, false])
const orderNotFound = ref(false)
// const messageArray = ref([])
const buttonDisabled = ref(false)
async function enterPassphrase() {
  const numberArray = []
  for (let index = 0; index < passphraseLength; index++) {
    const element = passphraseWords.value[index]
    const number = wordToNumber(element)
    if (number === false) {
      validWordWarningArray.value[index] = true
    } else { 
      validWordWarningArray.value[index] = false
      numberArray.push(number)
    }
  }
  if (numberArray.length === passphraseLength) {
    const potentialPassphrase = numberArray.toString()
    try {
      buttonDisabled.value = true
      await sleep(3000)
      buttonDisabled.value = false
      const results = await axios.post('/.netlify/functions/getOrder', { bucketID: potentialPassphrase })
      // messageArray.value = results.data.messageArray
      emit('passphraseEnteredSuccess', results.data.messageArray, potentialPassphrase)
    } catch (error) {
      console.log(error.response)
        orderNotFound.value = true
        console.log('order not found')
    }
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
watch(
  () => passphraseWords,
  () => {
    orderNotFound.value = false
  },
  { deep: true }
)
function getPassphraseInputLabels(i) {
  var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
function wordToNumber(word) {
  const wordArray = bip39Wordlist.split(/\r?\n/)
  const tempWord = word.toLowerCase().replace(/\s+/g, '')
  for (let index = 0; index < wordArray.length; index++) {
    const element = wordArray[index]
    if (element === tempWord) {
      return index
    }
  }
 return false
}
</script>

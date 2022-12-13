<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <div>
        <q-splitter v-model="splitterModel" style="">
      
          <template v-slot:before>
            <q-tabs v-model="tab" vertical class="text-teal">
              <q-tab name="mails" icon="mail" label="Create" />
              <q-tab name="alarms" icon="alarm" label="Add Purchase" />
              <q-tab name="check" icon="alarm" label="Check Points" />
              <q-tab name="movies" icon="movie" label="Redeem Points" />
            </q-tabs>
          </template>
      
          <template v-slot:after>
            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
              <q-tab-panel name="mails">
                <div class="text-h4 q-mb-md">Generate</div>
                <p><q-btn color="primary" label="Primary" @click="genRewardsPassphrase()"/></p>
                <p>{{wordArray}}</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
                                  quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
                                  libero.</p>
              </q-tab-panel>
      
              <q-tab-panel name="alarms">
                <div class="text-h4 q-mb-md">Add Purchase</div>

                          <q-card-section class=" col-12 row text-center justify-center" style="border-radius: 10px;" v-if="orderNotFound">
                            <div class="text-h6 text-white col-8 bg-red-5 q-pa-sm">
                              Order Does Not Exist!
                            </div>
                            <div class="text-h6 text-white col-8 q-mt-sm">
                              <router-link to="message">Message Me If Your Having Issues</router-link>
                            </div>
                          </q-card-section>
                                    <q-card-section>
                                      <div class="">
                                        <div class="row justify-around" style="">
                                          <div class="col-12 text-center row  justify-center">
                                            <q-card class="col-12 col-md-8 text-left justify-center bg-black text-white q-pb-md  row">
                                              <q-card-section class="col-11 text-center" style="border-radius: 10px;">
                                                <div class="text-h6">
                                                  Enter Your Order Passphrase
                                                </div>
                                                <div class="text-left  text-white row col-12 justify-center">
                                                  <div class="row col-12 justify-center q-mt-sm" v-for="(item, index) in passphraseLength" :key="item">
                                                    <q-chip color="red" text-color="white" icon="dangerous" label="Not Valid Word"
                                                      v-if="validWordWarningArray[index]" />
                                                    <q-input dark mask="aaaaaaaaaaaaaaaaaaaaaaaa" standout="bg-primary text-white" label-color="white"
                                                      class="col-10" v-model="passphraseWords[index]"
                                                      :label='getPassphraseInputLabels(index+1) + " Word"' />
                                    
                                                  </div>
                                                </div>
                                              </q-card-section>
                                            </q-card>
                                            <div class="col col-12 q-mt-md text-center">
                                              <q-btn no-caps :disable="buttonDisabled" color="positive" icon="check" label="View Order"
                                                @click="enterPassphrase" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </q-card-section>
              </q-tab-panel>
              <q-tab-panel name="check">
                <div class="text-h4 q-mb-md">Alarms</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
                  quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
                  libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
                  quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
                  libero.</p>
              </q-tab-panel>
      
              <q-tab-panel name="movies">
                <div class="text-h4 q-mb-md">Movies</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
                  quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
                  libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
                  quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
                  libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
                  quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
                  libero.</p>
              </q-tab-panel>
            </q-tab-panels>
          </template>
      
        </q-splitter>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import bip39Wordlist from "@/assets/bip39Wordlist.txt"
import { ref, watch } from 'vue'
import { getRandomInt, numberArrayToWordArray } from "@/assets/misc.js"
const passphraseLength = 10
const validWordWarningArray = ref([false, false, false, false, false, false, false, false, false, false])
const tab = ref('mails')
const splitterModel = ref(20)
const wordArray = ref([])
async function genRewardsPassphrase() {
  const numberArray = await generateRandomArray()
  wordArray.value = numberArrayToWordArray(numberArray)
}
async function generateRandomArray() {
  const numberArray = []
  for (var i = 0; i < passphraseLength; i++) {
    numberArray.push(await getRandomInt(2048))
  }
  return numberArray
}
const passphraseWords = ref([])
const orderNotFound = ref(false)
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
      console.log(potentialPassphrase)
      //const results = await axios.post('/.netlify/functions/getOrder', { bucketID: potentialPassphrase })
      // messageArray.value = results.data.messageArray
      // emit('passphraseEnteredSuccess', results.data.messageArray, potentialPassphrase)
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

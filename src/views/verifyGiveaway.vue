<template>
  <q-page
    style="width: 100%;"
    class="row items-stretch text-center align-center justify-center bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-stretch" >
      <div class="q-my-xl">
        <q-card class="q-pa-xl" >
          <div class="text-h4 q-my-md">Enter HTML Code:</div>
          <q-input v-model="twitterHTML" label="Twitter HTML" />
        <p><q-btn color="primary" label="Parse HTML" class='q-mt-md' @click="parseHTML()" :disable="disableHTMLParse"/></p>
        <div class="text-h5">Number of Participants:</div>
        {{ participantList.length }}
        <div class="text-h5 q-mt-md">Participants:</div>
        {{ participantList }}
        <div class="text-h4 q-my-md">Enter Monero Block Hash:</div>
        <q-input v-model="moneroBlock" label="Block String" />
        <p><q-btn color="primary" label="Pick Winners" class='q-mt-md' @click="generate()" :disable="disableWinnerPicker"/></p>
        <div class="text-h4 q-my-md">Winner List</div>
          <span v-for="(item, index) in winnerHandleArray" :key="index">
            {{ index + 1 }}. {{ winnerHandleArray[index] }} <br/>
          </span>
        
        </q-card>
      </div>
    </div>
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import footerGlobal from "@/components/footerGlobal.vue"
import { ref, computed } from 'vue'
const cheerio = require('cheerio')
const moneroBlock = ref('580597aa464c813fb210325ecf62ea7d8354e6fc24337210b42622ba2c584486')
const _sodium = require("libsodium-wrappers")
const winnerArray = ref([])
const participantList = ref([])
const twitterHTML = ref('')
const winnerHandleArray = ref([])
async function generate() {
  winnerArray.value = []
  winnerHandleArray.value = []
  let index = 0
  while (winnerArray.value.length < participantList.value.length ) {
    const randomNumber = await getRandomNumber(index)
    if (randomNumber < participantList.value.length && !winnerArray.value.includes(randomNumber)) {
      winnerArray.value.push( randomNumber)
      console.log('working on winner: ' + winnerArray.value.length)
    }
    index += 1
  }
  for (let index = 0; index < winnerArray.value.length; index++) {
    const winnerHandle = participantList.value[winnerArray.value[index]]
    winnerHandleArray.value.push(winnerHandle)
  }
}
const convert = (from, to) => (str) => Buffer.from(str, from).toString(to)
const utf8ToHex = convert("utf8", "hex")

async function getRandomNumber(salt){
  const numberOfRandomBytes = getNumberofRandomBytes()
  const block = moneroBlock.value + salt
  await _sodium.ready
  const sodium = _sodium
  const keyHashed = sodium.crypto_generichash(32, sodium.from_hex(utf8ToHex(block)))
  const seed = keyHashed
  const randomBytes = sodium.randombytes_buf_deterministic(numberOfRandomBytes, seed)
  const rawOutput = parseInt(sodium.to_hex(randomBytes), 16)
  return rawOutput
}
function getNumberofRandomBytes() {
   // add the minuim to this to  get a number bigger than participant 1=256, 2=65536
  if(participantList.value.length < 257){ return 1 }
  else{ return 2}
}
function parseHTML() {
  const $ = cheerio.load(twitterHTML.value)
  const participants = $('span:contains("@")')
  let tempList = []
  for (let index = 0; index < participants.length; index++) {
     if (participants[index].children[0] !== null) {
      tempList.push(participants[index].children[0].data) 
    } 
  }
  tempList.reverse()
  tempList=tempList.filter(e => e !== undefined)
  if (participantList.value.length === 0) {
    participantList.value = participantList.value.concat(tempList)
  } else {
    if (!participantList.value.includes(tempList[0])) {console.log('no overlap'); return;}
    console.log('overlap found')
    participantList.value = participantList.value.concat(tempList)
    participantList.value = removeDuplicates(participantList.value)
  }
  
  console.log('Number of retweets: ' + participantList.value.length)
}
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
const disableHTMLParse = computed(() => {
  return twitterHTML.value.length === 0
})
const disableWinnerPicker = computed(() => {
  return participantList.value.length === 0
})
</script>

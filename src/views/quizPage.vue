<template>
  <q-page
    style="width: 100%;"
    class="bg-primary"
  >
    <div class="row justify-center col col-11 align-center items-center text-center" style="min-height: 75vh;">
        <q-card class="q-pa-xl" >
          <div class="text-h4 q-my-md">Quiz</div>
          <q-linear-progress size="25px" :value="progress1" color="accent">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="progressLabel1" />
      </div>
    </q-linear-progress>
    {{ questions[currentQuestion].question }}
    <div class="q-gutter-sm">
      <span v-for="(item, index) in questions[currentQuestion].options" :key="index">
        <q-radio v-model="selection" :val="item" 
        :label="item" />
        <br/>
      </span>
    </div>
    <q-btn color="positive" text-color="black" label="Submit" @click="submit" :disable="disableSubmit"/>
        </q-card>
      </div>
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import footerGlobal from "@/components/footerGlobal.vue"
import { ref, computed } from 'vue'
const currentQuestion = ref(0)
const selection = ref('')
const answerArray = ref([])
const progress1 = computed(() => currentQuestion.value/questions.length)
const progressLabel1 = computed(() => (progress1.value * 100).toFixed(2) + '%')
const questions = [
  { question: 'Monero uses ____ to hide transactions send amounts.',
    options: ['Ringsignatures','Ring CT', 'Stealth Address', 'Kovri'],
    answer: 'Ring CT'
  },
  { question: 'Monero RandomX was created to optimize ____ miners on the network. ',
    options: ['Playstation','ASIC', 'GPU', 'CPU'],
    answer: 'CPU'
  },
  { question: `Monero tail emmission will start in `,
    options: ['June 2023','May 2022', 'October 2022','January 2024'],
    answer: 'May 2022'
  }
]
function submit() {
  answerArray.value.push(selection.value)
  selection.value = ''
  currentQuestion.value +=1
  console.log(answerArray)
}
const disableSubmit = computed(() => {
  return selection.value === ''
})
</script>

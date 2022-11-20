<template>
  <q-page
    style="width: 100%; background-image: linear-gradient(to right top, #d4ccc4, #a9ab9a, #748d7d, #3c6f6e, #004e64);"
    class="q-pa-md row items-stretch text-center align-center justify-center"
  >
  <div class="row justify-center col col-12 col-md-11 align-center items-center" >
    <div class="row items-center justify-center col-12 q-gutter-y-xl" >
      <q-card class="col-12 col-md-7" v-for="(catagory, key) in correctFaq" :key="key">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ key }}</div>
      </q-card-section>

      <q-separator />
      <q-list bordered class="rounded-borders col-8">
      <q-expansion-item
        expand-separator
        :label=question[0]
        header-class="text-h5"
        v-for="(question, index) in catagory" :key="index"
      >
        <q-card>
          <q-card-section class="text-left  text-body1">
            <span v-html="question[1]"></span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      
    </q-list>

    </q-card>
    </div>
  </div>
  </q-page>
</template>

<script setup>
import faq from "@/assets/faq.js"
// const faqKeyList = Object.keys(faq.faq)
const correctFaq = faq.faq
</script>

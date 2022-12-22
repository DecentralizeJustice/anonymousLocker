<template>
  <q-page
    class="row items-stretch text-center align-center justify-center bg-primary "
    style='width: 100%;'
  >
  <div class="row justify-center col col-11 col-md-11 align-center items-center q-my-xl" >
    <div class="row items-center justify-center col-12 q-gutter-y-xl" >
      <q-card class="col-12 col-md-7" v-for="(catagory, key) in correctFaq" :key="key" >
      <q-card-section class=" text-white bg-grey-7 ">
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
  <footerGlobal/>
  </q-page>
</template>

<script setup>
import faq from "@/assets/faq.js"
import footerGlobal from "@/components/footerGlobal.vue"
// const faqKeyList = Object.keys(faq.faq)
const correctFaq = faq.faq
</script>

<template>
  <q-page
    style="width: 100%;"
    class="q-pa-md row items-stretch text-center align-center justify-center bg-primary"
  >
  </q-page>
</template>

<script setup>
import { onMounted } from "vue"
const axios = require('axios')
onMounted(async () => {
  console.log('ran')
  const results = await axios.post('/.netlify/functions/getAll', {  })
  console.log(results.data)
})
</script>

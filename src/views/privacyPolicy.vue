<template>
  <q-page style="width: 100%; background-color:#D4CCC4;"
  >
    <!-- page content -->

    <div class="row justify-evenly q-py-xl col-12 " >
      <div class="row col col-11 col-md-6 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center bg-primary text-white q-pa-lg" style="">
            <div
              class="text-h4 my-font text-center"
              style=""
            >
              Privacy Policy
            </div>
            <div
              class="text-h5 text-weight-regular q-mt-md q-pa-sm"
              style="line-height: 130%;"
            ><span v-html="policy"></span>

            </div>
          </div>
        </div>
      </div>
    </div>
    <footerGlobal/>
  </q-page>
</template>

<script setup>
import footerGlobal from "@/components/footerGlobal.vue"
import privacy from "@/assets/privacy.md"
import { onMounted, ref } from "vue"
import { marked } from 'marked'
const policy = ref('')
onMounted(() => {
  policy.value = marked(privacy)
    })
</script>
<style lang="sass" scoped>
$link-color: #FFFFFF
@font-face
  font-family: customfont
  src: url(../styles/ArchivoBlack-Regular.ttf)
.my-font 
  font-family: 'customfont'

.frame 
  border: 3px solid #ccc
a:visited
  color:$link-color
  text-decoration: none
a:hover
  color:#004E64
  text-decoration: underline
a:active
  color:$link-color
  text-decoration: none

</style>
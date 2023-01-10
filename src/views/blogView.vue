<template>
    <q-page style="width: 100%; background-color:#D4CCC4;"
    >
      <!-- page content -->
  
      <div class="row justify-evenly q-py-xl col-12 bg-primary" >
        <div class="col-12 text-center text-white text-h3 q-pb-lg my-font">      
        Blog
      </div>
      <div class="col-md-3 col-6" v-for="item in recentlyBought" :key="item.id">
        <router-link to="/blog/nov22">
        <q-card class="" style="width: 100%; background-color:#D4CCC4;">
            <q-card-section>
                <div class="col col-11 col-md-7" >
                    <q-img class=""  :src=item.img  />
                </div>
                <div class="text-h4 text-center q-my-md">{{item.name}}</div>
            </q-card-section>
          </q-card>
        </router-link>
        </div>
      </div>
      <footerGlobal/>
    </q-page>
  </template>
  
  <script setup>
  import footerGlobal from "@/components/footerGlobal.vue"
  const recentlyBought =[
  { 
    img: `https://res.cloudinary.com/dylevfpbl/image/upload/v1673328539/blog/dgoon21_computer_fall_leaves_autumn_4ba165b9-ede2-4380-bb91-6397a594021d.png`,
    name: 'Review of November 2022'
  }
]
  </script>
<style lang="sass" scoped>
$link-color: #FFFFFF
@font-face
    font-family: customfont
    src: url(@/styles/ArchivoBlack-Regular.ttf)
.my-font 
    font-family: 'customfont'
.frame 
    border: 3px solid #ccc
a:link 
  color:$link-color
  text-decoration: none 
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
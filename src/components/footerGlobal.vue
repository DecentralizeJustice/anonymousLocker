<template>
<div class="row justify-center col-12" style="min-height: 20vh;width: 100%; background-color:#D4CCC4;">
  <div class="row justify-around col-6 items-start justify-around" style="">
    <div class="col-10 col-md-2 text-black text-left q-mt-lg" v-for="item in info" :key="item.title">      
      <div class="text-h5 text-primary">
        {{item.title}}
      </div>
      <div class="text-h6" v-for="info in item.items" :key="info.link">
        <a :href="info.link" target="_blank" rel="noopener noreferrer">{{info.text}}</a>
      </div>
    </div>
    </div>
    <div class="row col-12 text-primary justify-center q-pt-lg q-mb-md text-weight-bold" style="">
      Copyright 2022, Anonymous Locker LLC
    </div>
</div>
</template>
<script setup>
const info = [
  {
    title: 'Business Info',
    items: [
/*       {
        text: 'About Me', link: '/'
      }, */
      {
        text: 'Github', link: 'https://github.com/DecentralizeJustice/anonymousLocker'
      },
      {
        text: 'Business Registration', link: 'https://corp.sos.ms.gov/corpconv/portal/c/ExecuteWorkflow.aspx?workflowid=g12dbd558-fa5d-49a1-a869-ad8b9db198db&FilingId=d53d5a4a-17be-4363-b9d2-e2cba4eb77f5'
      },
/*       {
        text: 'Terms Of Service', link: '/'
      },
      {
        text: 'Privacy Policy', link: '/'
      } */
    ]
  },
  {
    title: 'Social',
    items: [
      {
        text: 'Youtube', link: 'https://www.youtube.com/channel/UCJhUULkUHVZKDMkhJlmGOGQ'
      },
      {
        text: 'Reddit', link: 'https://www.reddit.com/r/Monero/comments/yrgc1m/seeking_5_people_to_try_anonymous_amazon_shipping/'
      },
      {
        text: 'Twitter', link: 'https://twitter.com/anonlockerUSA'
      },
      {
        text: 'Bitcoin Talk', link: 'https://bitcointalk.org/index.php?topic=5422392.msg61324168#msg61324168'
      }
    ]
  },
  {
    title: 'Support',
    items: [
      {
        text: 'Message Me', link: '/message'
      },
      {
        text: 'F.A.Q.', link: '/faq'
      }
    ]
  }
]
</script>
<style lang="sass" scoped>
$link-color: #FAF9F6
@font-face
  font-family: customfont
  src: url(../styles/ArchivoBlack-Regular.ttf)
.my-font 
  font-family: 'customfont'
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
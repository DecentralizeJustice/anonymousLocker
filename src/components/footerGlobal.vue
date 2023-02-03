<template>
<div class="row justify-center col-12" style="min-height: 20vh;width: 100%; background-color:#D4CCC4;">
  <div class="row justify-around col-6 items-start justify-center" style="">
    <div class="col-10 col-md-3 text-black text-left q-mt-lg" v-for="item in info" :key="item.title">      
      <div class="text-h4 text-blue-grey-9">
        {{item.title}}
      </div>
      <div class="text-h6" v-for="info in item.items" :key="info.link">
        <a :href="info.link" >{{info.text}}</a>
      </div>
    </div>
    </div>
    <div class="row col-12 text-primary justify-center q-pt-lg q-mb-md text-weight-bold" style="">
      Copyright 2023, Anonymous Locker LLC
    </div>
</div>
</template>
<script setup>
const info = [
  {
    title: 'Social',
    items: [
      {
        text: 'Youtube', link: 'https://www.youtube.com/channel/UCJhUULkUHVZKDMkhJlmGOGQ'
      },
      {
        text: 'Reddit', link: 'https://www.reddit.com/r/Monero/comments/zprhwr/anonymous_shopping_using_amazon_lockers_and_monero/'
      },
      {
        text: 'Twitter', link: 'https://twitter.com/AnonShopApp'
      },
      {
        text: 'Bitcoin Talk', link: 'https://bitcointalk.org/index.php?topic=5422392.msg61324168#msg61324168'
      }
    ]
  },
  {
    title: 'General',
    items: [
    {
        text: 'Register As Earner', link: '/registerEarner'
      },
    {
        text: 'Blog', link: '/blog'
      },
      {
        text: 'About Me', link: '/about'
      },
      {
        text: 'Github', link: 'https://github.com/DecentralizeJustice/anonymousLocker'
      },
      {
        text: 'Giveaway Tool', link: '/verifyTwitterGiveaway'
      },

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
      },
      {
        text: 'Check Order', link: '/checkOnOrder'
      }
    ]
  },
  {
    title: 'Legal',
    items: [
    {
        text: 'Privacy Policy', link: '/privacypolicy'
      },
      {
        text: 'Terms Of Service', link: '/termsofservice'
      },
      {
        text: 'Business Registration', link: 'https://res.cloudinary.com/dylevfpbl/image/upload/v1669904250/ExecuteWorkflow.jpg'
      },
      {
        text: 'Giveaway Terms & Conditions', link: '/twitterGiveAwayTerms'
      },
    ]
  }
]
</script>
<style lang="sass" scoped>
$link-color: #004E64
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
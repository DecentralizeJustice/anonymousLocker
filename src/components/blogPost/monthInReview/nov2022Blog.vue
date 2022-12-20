<template>
  <q-page style="width: 100%; background-color:#D4CCC4;"
  >
    <!-- page content -->

    <div class="row justify-evenly q-py-xl col-12 " >
      <div class="row col col-12 col-md-8 items-center align-center row">
        <div class=" col col-12 items-center align-center row">
          <div class="text-left text-center bg-primary text-white q-pa-lg" style="">
            <div
              class="text-h2 my-font text-center"
              style=""
            >
              Review of November
            </div>
            <div
              class="text-h6 q-mt-md q-pa-sm"
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
import { onMounted, ref } from "vue"
import { marked } from 'marked'
const policy = ref('')
onMounted(() => {
  policy.value = marked(test)
    })
const test = `

This has been a great month at Anonymous Locker. It was such a beautifully stressful experience to take an idea, build it, 
and end up having strangers on the internet pay me for it in under a month. 
Now that I have experienced that high though, the only next question for me is how I can get more customers?


### Low Points From This Month
<img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1671569616/blog/nov22/cry.gif" 
        alt="Crying Spongebob" 
        width="auto" 
        height="auto" 
        class='desktop-only'
        style="display: block; margin: 0 auto; padding-bottom: 5vh;" />
Pick a specific use case they said...It would be fun they said. It wasn't. 
The first customer to use my service decided to buy a hardware wallet. 
So I decided maybe more people wanted to buy hardware wallets anonymously, since the hardware manufacturers have all leaked private info. 
The hardware wallet use case made sense to me, but people on reddit did not like the idea at all. 
This use case resulted in my being called every kind of scammer possible and being banned from the ethereum subreddit for "posting a link to a scam hw site". 
So yeah. It's not fun being called a scammer but I am used to it at this point. But the best thing about low points is that they usually lead to some high points. 

### Highpoints from this week
<img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1671569828/blog/nov22/happy.gif" 
        alt="Crying Spongebob" 
        width="auto" 
        height="auto" 
        class='desktop-only'
        style="display: block; margin: 0 auto; padding-bottom: 5vh;" />
#### Great First Customer
My first customer was amazing! They seemed so excited to use my service. There was an issue with their first attempt to place an order, but they worked with me to get the order placed. 
They even pointed out some design issues with my site that I fixed. When someone has great energy it is refreshing to work with them. 
I hope everyone has someone in their life that was excited about them as much as my first customer was excited to use my service. 
#### Support From r/monero & Bitcoin Talk
Another high point has to be the support that I received from the r/monero subreddit and the bitcointalk website.  
I posted 3 times to the Monero subreddit and I was able to get over 200 upvotes which went very far in boosting my morale given the stress of running this business. 
Bitcoin talk on the other hand was some of the most productive discussions I could have about the anonymous locker. That forum will roast your idea alive in an honest manner, but they don't seem to do it from a place of malice. 
In other places, it feels as if people want to tear your idea down for the fun of it, while on bitcoin talk they will congratulate you on things while also being honest about where your idea could be better. It feels like they want you to succeed.  
This forum is a great place to discuss ideas in a long-form manner and since it has a higher barrier to entry you get some quality people there. Speaking of a high barrier to entry, after being on the forum for 2 years, I advanced from a newbie to Junior Member. 

### November By The Numbers
<img src="https://res.cloudinary.com/dylevfpbl/image/upload/v1671569984/blog/nov22/Screenshot_2022-12-20_155916.png" 
        alt="Crying Spongebob" 
        width="auto" 
        height="auto" 
        class='desktop-only'
        style="display: block; margin: 0 auto; padding-bottom: 3vh;" />
 - 4,136  Website Views
 - 1,865 Unique Page Visitors
 - 505 Youtube Views
 - 220 Reddit Upvotes
 - 12 Youtube Video Upvotes
 - 6 Orders
 - 1 New Business Registration

This was a great benchmark to set for the first month out. For the next month, I am going to focus on getting the order number up. Any business needs customers to be successful so let's focus on growing that number. 

### Goals for December

 1. I am working on the world's first anonymous rewards program and I hope to launch it this month. Most rewards programs just mine your shopping history to advertise and sell to you. 
 My anonymous rewards program will allow me to reward my loyal customers without connecting their purchases. I can give you points for every purchase you made, without knowing which specific purchases you made. 
 I will only know the number of purchases that a customer made. 
 2. Markegint has been my biggest issue so far. I need to get my service in front of more people who value it for me to grow. So this month I will post to my mastodon and Twitter accounts at least once a week. 

### What Keeps Me Up At Night
Do people care enough about their privacy for purchases outside of going to jail? We know that people like their privacy on the darknet because a lack of privacy in these spaces and markets will land you in jail. 
Does this care for privacy matter in the context that might not lead to jail? Do enough people care that amazon, the payment processor, and possibly their friends and enemies will know what they bought? 
Do people care enough to pay to have this issue solved? I know some people do. At least 6 people do. But to grow, I am going to have to find more than 6 people. 
## Outro
Thanks so much for making it this far. If you liked this kind of update, please follow me on Twitter, mastodon, or youtube. I will be posting more stuff like this to this blog and these platforms. 
If you are thinking of an idea please get out there and build it. It can be scary, and you might encounter some people that hate your idea. But you also might encounter some people who love it and support you. 
I promise you that the love will outweigh the hate and doubt (I speak from experience lol). If you have any questions or anything feel free to message me here or on one of my social media platforms. 
`
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
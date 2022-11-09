<template>
  <q-page
    style="width: 100vw; background-image: linear-gradient(to right top, #3d80d1, #576caa, #5a5b84, #514c61, #414042);"
    class="q-pa-md row items-stretch text-center align-center justify-center"
  >
  <div class="row justify-center col col-12 col-md-11 align-center items-center" >
    <div class="row items-center justify-center col-12 q-gutter-y-xl" >
      <q-card class="col-12 col-md-7">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">General Questions</div>
      </q-card-section>

      <q-separator />
      <q-list bordered class="rounded-borders col-8">
      <q-expansion-item
        expand-separator
        label="Why Should I hide my shippping address?"
        header-class="text-h5"
      >
        <q-card>
          <q-card-section class="text-left  text-body1">
            <span v-html="whyHide"></span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      
    </q-list>

    </q-card>
    <q-card class="col-12 col-md-7">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Alternative Methods</div>
      </q-card-section>

      <q-separator />
      <q-list bordered class="rounded-borders col-8">
      <q-expansion-item
        expand-separator
        label="Couldn't I just ship my orders to a amazon locker myself?"
        header-class="text-h5"
      >
        <q-card>
          <q-card-section class="text-left  text-body1">
            <span v-html="whyNotDIY"></span>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        label="Can't I use purse.io?"
        header-class="text-h5"
      >
        <q-card>
          <q-card-section class="text-left  text-body1">
            <span v-html="whyNotPurse"></span>
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
const whyHide = `Lets say you wanted to buy a hardware wallet. 
If you order from a retailer they will have your address and they could possibly leak that information. 
 <a href="https://www.w3schools.com">Ledger</a>
and 
<a href="https://blog.trezor.io/details-of-the-mailchimp-data-breach-a06872caa1fd">Trezor</a>
have both leaked customer information in the past. 
<a href="https://www.reddit.com/r/ledgerwallet/comments/kiu13j/thank_you_ledger_im_now_getting_threats_im_going/">People received</a> 
death threats due to these leaks. 
You should not punished for securing your crypto. 
My service helps hide your address to prevent leaks like this.
 This is just one example of why you need to protect your shipping and order information.`
const whyNotDIY =`People have been ordering to amazon lockers as a way to accomplish some privacy for years. 
This process can be highly variable due to amazons anti-fraud detection methods. Using a prepaid credit card with a fresh account, could result in triggering amazon's
anti-fraud detection. I would recomend a prepaid card, residential proxy, burner phone number, burner email and browser emulator like multi-login or incognito if you do this proccess yourself.
You might still trigger thier anti fraud detection though, so your milage will vary. If you have fiat, it would be much easier and safer to just convert that fiat to cash and buy an item in person.`
const whyNotPurse =`Purse.io has in the past allowed orders to amazon lockers. Thier current 
<a href="https://purse.crisp.help/en/article/common-questions-about-name-your-discount-faq-19vz0j8/">faq</a>
does not allow for the delivery to amazon lockers.`
</script>

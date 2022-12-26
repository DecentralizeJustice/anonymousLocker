<template>
  <q-layout view="hhh lpr fff">
    <q-header class="bg-grey-9 text-white">
      <q-toolbar>
        <img
          src="./assets/svgs/package.svg"
          style="max-width: 30px"
          class="q-my-sm"
        />
        <q-toolbar-title> Anon Shop </q-toolbar-title>
        <q-space class="desktop-only" />
        <q-btn color="primary" icon="menu" class="mobile-only">
          <q-menu>
            <q-list style="min-width: 100px" separator>
              <q-item
                v-for="(item, index) in options"
                :key="index"
                clickable
                class="text-center justify-center align-center items-center"
              >
                <router-link
                  :to="{ name: options[index].value }"
                  style="text-decoration: none; color: inherit"
                  class="text-center justify-center align-center items-center"
                >
                  <q-item-section
                    class="text-center justify-center align-center items-center"
                  >
                    {{ options[index].label }}
                  </q-item-section>
                </router-link>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <router-link
          v-for="(item, index) in options"
          :key="index"
          class="desktop-only"
          :to="{ name: options[index].value }"
          style="all: unset"
        >
          <q-btn
            :color="getButtonColor(options[index].value)"
            text-color="white"
            :label="options[index].label"
            class="q-mx-xs"
            size="md"
          />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
// import { ref } from 'vue'
/* import { useRouter } from 'vue-router'
const router = useRouter() */
// const model = ref(window.location.pathname)
/* function test (newRoute) {
  console.log(newRoute)
  router.push({ name: newRoute })
} */
const options = [
  { label: "Home", value: "home" },
  { label: "Orders", value: "ordersPage" },
  { label: "F.A.Q.", value: "faq" },
  { label: "Ask Question", value: "message" }

]
function getButtonColor(params) {
  if (params === "ordersPage") {
    return "primary"
  }
  return "grey-7"
}
</script>
<style lang="sass" scoped>
.headerCustomStyle
  background: #4c4c4c !important
.ntp
  padding-top: 60px !important
</style>

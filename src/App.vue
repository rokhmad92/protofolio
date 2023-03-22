<template>
  <!-- google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alkatra&display=swap" rel="stylesheet">
  <!-- END google Font -->

  <nav class="flex bg-blue-200 rounded-b-xl justify-content-around animate-startupNav" v-click-outside="hide">
    <div class="grow">
      <h3 class="md:text-2xl xl:text-3xl text-2xl my-4 mx-9 font-medium text-slate-800 font-Alkatra">Rokhmad Yulian</h3>
    </div>

    <!-- Link -->
    <div class="grow-0 xl:mr-4 hidden md:flex">
      <router-link to="/" class="xl:px-5 md:px-3 hover:bg-blue-300 xl:text-xl md:text-md text-base rounded-xl text-slate-600 hover:text-slate-900 my-auto py-5">Tentang Saya</router-link>
    </div>
    <div class="md:flex grow-0 hidden xl:mr-4">
      <router-link to="kemampuan" class="xl:px-5 md:px-3 hover:bg-blue-300 xl:text-xl md:text-md text-base rounded-xl text-slate-600 hover:text-slate-900 my-auto py-5">Kemampuan</router-link>
    </div>
    <div class="md:flex grow-0 hidden xl:mr-4">
      <router-link to="sosmed" class="xl:px-5 md:px-3 hover:bg-blue-300 xl:text-xl md:text-md text-base rounded-xl text-slate-600 hover:text-slate-900 my-auto py-5">Sosial Media</router-link>
    </div>
    <div class="md:flex grow-0 hidden xl:mr-4 my-auto">
      <router-link to="kontak" class="kontak xl:px-5 md:px-3 h-10 xl:text-xl md:text-md text-base rounded-full bg-green-200 text-slate-600 hover:text-slate-900 hover:bg-green-300 my-auto py-2">Hubungi Saya</router-link>
    </div>
    <!-- End Link -->

    <!-- hamburger menu -->
      <div class="grow-0 md:hidden mr-4 flex my-auto">
        <div class="p-3 cursor-pointer rounded-md hover:bg-blue-300" @click="hamburgerClick">
          <img src="../public/img/hamburgerMenu.png" class="w-8">
        </div>
      </div>

      <div class="hamburgerActive md:hidden flex justify-between animate-hamburger" v-if="showHamburger" :class="{'animate-hideHamburger': hiddenHamburger}">
        <div class="flex">
          <router-link to="/" class="hamburger px-2 py-6 text-center hover:bg-slate-200 text-slate-600 hover:text-slate-900" style="font-size: 13px;">Tentang Saya</router-link>
        </div>
        <div class="flex">
          <router-link to="kemampuan" class="hamburger px-2 py-6 text-center hover:bg-slate-200 text-slate-600 hover:text-slate-900" style="font-size: 13px;">Kemampuan</router-link>
        </div>
        <div class="flex">
          <router-link to="sosmed" class="hamburger px-2 py-6 text-center hover:bg-slate-200 text-slate-600 hover:text-slate-900" style="font-size: 13px;">Sosial Media</router-link>
        </div>
        <div class="flex">
          <router-link to="kontak" class="hamburger px-2 py-6 text-center hover:bg-slate-200 text-slate-600 hover:text-slate-900" style="font-size: 13px;">Hubungi Saya</router-link>
        </div>
      </div>

      <!-- hide Hamburger -->
      <div v-if="showHamburger" class="md:hidden animate-hamburger absolute left-0 right-0 cursor-pointer" @click="hamburgerHide" :class="{'animate-hideHamburger': hiddenHamburger}">
        <h3 class="text-xl mt-16 text-center border-y-2 bg-slate-50 rounded-b-xl hover:bg-slate-100">^</h3>
      </div>
    <!-- END hamburger menu -->
  </nav>
  <router-view/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      showHamburger: false,
      hiddenHamburger: false,
    }
  },
  methods: {
    hamburgerClick() {
      this.showHamburger = true,
      this.hiddenHamburger = false
    },
    hamburgerHide() {
      setTimeout(() => {
        this.showHamburger = false
      }, 1000)
      this.hiddenHamburger = true
    },
  }
}
</script>

<style scoped>
.hamburgerActive {
  background-color: rgb(241 245 249);
  z-index: 10;
  position: absolute;
  width: 100%;
}

.router-link-active {
  background-color: #93c5fd;
  color: #0f172a;
  text-decoration: underline;
}

.router-link-active.kontak {
  background-color: #86efac;
  text-decoration: underline;
  color: #0f172a;
}
.router-link-active.hamburger {
  background-color: #e2e8f0;
  text-decoration: underline;
  color: #0f172a;
}
</style>

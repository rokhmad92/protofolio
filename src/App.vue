<template>
  <!-- google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alkatra&display=swap" rel="stylesheet">
  <!-- END google Font -->

  <nav class="flex bg-blue-400/[0.9] justify-content-around animate-startupNav fixed top-0 left-0 right-0 z-10" v-click-outside="hide">
    <div class="grow my-auto mx-9">
      <h3 class="md:text-3xl xl:text-3xl text-3xl font-medium text-slate-100 font-Alkatra">Rokhmad Yulian</h3>
    </div>

    <!-- Link -->
    <div class="grow-0 xl:mr-4 hidden md:flex">
      <router-link to="/" class="nav xl:px-5 md:px-3 hover:bg-sky-500 xl:text-xl md:text-md text-base rounded-xl text-slate-100 hover:text-slate-900 my-auto py-5">Tentang Saya</router-link>
    </div>
    <div class="md:flex grow-0 hidden xl:mr-4">
      <router-link to="kemampuan" class="nav xl:px-5 md:px-3 hover:bg-sky-500 xl:text-xl md:text-md text-base rounded-xl text-slate-100 hover:text-slate-900 my-auto py-5">Kemampuan</router-link>
    </div>
    <!-- End Link -->

    <!-- hamburger menu -->
      <div class="grow-0 md:hidden mr-4 flex my-auto">
        <div class="p-3 cursor-pointer rounded-md hover:bg-sky-500" @click="hamburgerClick">
          <img src="../public/img/hamburgerMenuWhite.png" class="w-8">
        </div>
      </div>

      <div class="hamburgerActive md:hidden flex animate-hamburger" v-if="showHamburger" :class="{'animate-hideHamburger': hiddenHamburger}">
        <div class="grow my-auto mx-9">
          <h3 class="text-2xl font-medium text-slate-100 font-Alkatra">Rokhmad Yulian</h3>
        </div>
        <div class="flex">
          <router-link to="/" class="hamburger px-2 py-6 text-center mx-2 hover:bg-sky-500 rounded-xl text-slate-100 hover:text-slate-900">Tentang Saya</router-link>
        </div>
        <div class="flex">
          <router-link to="kemampuan" class="hamburger px-2 py-6 text-center hover:bg-sky-500 rounded-xl text-slate-100 hover:text-slate-900">Kemampuan</router-link>
        </div>
      </div>

      <!-- hide Hamburger -->
      <div v-if="showHamburger" class="md:hidden animate-hamburger absolute left-0 right-0 cursor-pointer" @click="hamburgerHide" :class="{'animate-hideHamburger': hiddenHamburger}">
        <h3 class="text-xl mt-16 text-center bg-blue-400/[0.9] rounded-b-xl pt-2 text-slate-100">^</h3>
      </div>
    <!-- END hamburger menu -->
  </nav>

  <!-- scroll to top -->
  <div ref="scrollTopButton" @click="toTop" class="hidden fixed bottom-3 right-5 w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-full cursor-pointer">
      <h1 class="text-center p-1 text-slate-100 text-3xl">^</h1>
  </div>
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
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton

      if(window.scrollY > 0 ) {
        scrollBtn.classList.remove("hidden")
      } else {
        scrollBtn.classList.add("hidden")
      }
    },
    toTop() {
      window.scrollTo({top: 0})
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.handleScroll)
  },
}
</script>

<style>
.hamburgerActive {
  background-color: #60a5fa;
  z-index: 10;
  position: absolute;
  width: 100%;
}

.router-link-active.nav {
  color: #0f172a;
  text-decoration: underline;
}

.router-link-active.hamburger {
  color: #0f172a;
  text-decoration: underline;
}

body {
    background-color: #f1f5f9;
}
</style>

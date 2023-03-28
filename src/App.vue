<template>
  <!-- google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alkatra&display=swap" rel="stylesheet">
  <!-- END google Font -->

  <nav class="flex bg-blue-400/[0.9] dark:bg-slate-700/[0.9] justify-content-around animate-startupNav fixed top-0 left-0 right-0 z-10" v-click-outside="hide">
    <div class="grow my-auto mx-9">
      <h3 class="md:text-3xl xl:text-3xl text-3xl font-medium text-slate-50 font-Alkatra">Rokhmad Yulian</h3>
    </div>

    <!-- Link -->
    <div class="grow-0 xl:mr-4 hidden md:flex">
      <router-link to="/" class="nav xl:px-5 md:px-3 hover:bg-sky-500 dark:hover:bg-slate-500 xl:text-xl md:text-md text-base rounded-xl text-slate-300 hover:text-slate-100 my-auto py-5">Tentang Saya</router-link>
    </div>
    <div class="md:flex grow-0 hidden xl:mr-4">
      <router-link to="kemampuan" class="nav xl:px-5 md:px-3 hover:bg-sky-500 dark:hover:bg-slate-500 xl:text-xl md:text-md text-base rounded-xl text-slate-300 hover:text-slate-100 my-auto py-5">Kemampuan</router-link>
    </div>
    <div class="md:flex grow-0 hidden xl:mr-4 my-auto">
      <img src="../public/img/darkMode.png" @click="darkMode" :class="{'hidden' : darkON}" class="w-10 h-10 cursor-pointer">
      <img src="../public/img/lightMode.png" @click="lightMode" :class="{'hidden' : lightON}" class="w-10 h-10 cursor-pointer">
    </div>
    <!-- End Link -->

    <!-- hamburger menu -->
      <div class="grow-0 md:hidden mr-4 flex my-auto">
        <div class="p-3 cursor-pointer rounded-md hover:bg-sky-500 dark:hover:bg-slate-500" @click="hamburgerClick">
          <img src="../public/img/hamburgerMenuWhite.png" class="w-8">
        </div>
      </div>

      <div class="hamburgerActive bg-blue-400 dark:bg-slate-700 md:hidden flex animate-hamburger" v-if="showHamburger" :class="{'animate-hideHamburger': hiddenHamburger}">
        <div class="grow my-auto mx-9">
          <h3 class="text-2xl font-medium text-slate-100 font-Alkatra">Rokhmad Yulian</h3>
        </div>
        <div class="flex">
          <router-link to="/" class="hamburger px-2 py-6 text-center mx-2 dark:hover:bg-slate-500 hover:bg-sky-500 rounded-xl text-slate-300 hover:text-slate-100">Tentang Saya</router-link>
        </div>
        <div class="flex">
          <router-link to="kemampuan" class="hamburger px-2 py-6 text-center dark:hover:bg-slate-500 hover:bg-sky-500 rounded-xl text-slate-300 hover:text-slate-100">Kemampuan</router-link>
        </div>
      </div>

      <!-- hide Hamburger -->
      <div v-if="showHamburger" class="md:hidden animate-hamburger absolute left-0 right-0 cursor-pointer" @click="hamburgerHide" :class="{'animate-hideHamburger': hiddenHamburger}">
        <h3 class="text-xl mt-16 text-center bg-blue-400/[0.9] dark:bg-slate-500/[0.9] rounded-b-xl pt-2 text-slate-100">^</h3>
      </div>
    <!-- END hamburger menu -->
  </nav>

  <!-- scroll to top -->
  <div ref="scrollTopButton" @click="toTop" class="hidden fixed bottom-3 right-5 w-10 h-10 bg-blue-400 dark:bg-slate-500 hover:bg-blue-300 rounded-full cursor-pointer">
      <h1 class="text-center p-1 text-slate-100 text-3xl">^</h1>
  </div>

  <!-- Sosmed -->
  <div ref="link" class="flex fixed bg-slate-200/80 top-52 pl-1 rounded-l-md flex-col" :class="{'-right-[150px]': sosmed}, {'-right-[0px]': hidesosmed}">
    <div>
      <p ref="showLink" @click="toggleLink" class="text-center cursor-pointer text-3xl float-left font-bold mb-3" v-text="left"></p>
      <p ref="hiddenLink" @click="toggleLinkHide" class="text-center cursor-pointer text-3xl float-left font-bold mb-3 hidden" v-text="right"></p>
    </div>
    <div class="flex mb-2 cursor-pointer group hover:bg-blue-200 dark:hover:bg-slate-500 hover:rounded-l-md" @click="fb">
        <img src="../../public/img/fb.png" class="w-8">
        <p class="ml-1 group-hover:underline dark:group-hover:text-slate-100">Rokhmad Yulian</p>
    </div>
    <div class="flex mb-2 cursor-pointer group hover:bg-blue-200 dark:hover:bg-slate-500 hover:rounded-l-md" @click="ig">
      <img src="../../public/img/ig.png" class="w-8">
      <p class="ml-1 group-hover:underline dark:group-hover:text-slate-100">rokhmad_yulian</p>
    </div>
    <div class="flex mb-2 cursor-pointer group hover:bg-blue-200 dark:hover:bg-slate-500 hover:rounded-l-md" @click="wa">
      <img src="../../public/img/wa.png" class="w-8">
      <p class="ml-1 group-hover:underline dark:group-hover:text-slate-100">+62 895-3363-97742</p>
    </div>
    <div class="flex mb-2 cursor-pointer group hover:bg-blue-200 dark:hover:bg-slate-500 hover:rounded-l-md" @click="link">
      <img src="../../public/img/link.png" class="w-8">
      <p class="ml-1 group-hover:underline dark:group-hover:text-slate-100">Rokhmad Yulian</p>
    </div>
    <div class="flex mb-2 cursor-pointer group hover:bg-blue-200 dark:hover:bg-slate-500 hover:rounded-l-md" @click="github">
      <img src="../../public/img/git.png" class="w-8">
      <p class="ml-1 group-hover:underline dark:group-hover:text-slate-100">rokhmad92</p>
    </div>
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
      left : '<',
      right : '>',
      sosmed: true,
      hidesosmed: false,
      darkON : false,
      lightON : true,
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
    darkMode() {
        document.documentElement.classList.remove('dark')
        this.darkON = !this.darkON
        this.lightON = !this.lightON
    },
    lightMode() {
        document.documentElement.classList.add('dark');
        this.darkON = !this.darkON
        this.lightON = !this.lightON
    },

    // scroll
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
      },
    // END scroll

    // redirect link
      toggleLink() {
        const showLink = this.$refs.showLink
        const hiddenLink = this.$refs.hiddenLink
        const link = this.$refs.link

        showLink.classList.add('hidden')
        hiddenLink.classList.remove('hidden')
        setTimeout(() => {
          this.hidesosmed = !this.hidesosmed
          this.sosmed = !this.sosmed
        }, 2000)
        link.classList.remove('animate-hiddenLink')
        link.classList.add('animate-showLink')
      },
      toggleLinkHide() {
        const showLink = this.$refs.showLink
        const hiddenLink = this.$refs.hiddenLink
        const link = this.$refs.link

        showLink.classList.remove('hidden')
        hiddenLink.classList.add('hidden')
        setTimeout(() => {
          this.hidesosmed = !this.hidesosmed
          this.sosmed = !this.sosmed
        }, 2000)
        link.classList.add('animate-hiddenLink')
        link.classList.remove('animate-showLink')
      },

      fb() {
        window.open('https://www.facebook.com/rokhmad.yulian/', '_blank');
      },
      ig() {
        window.open('https://www.instagram.com/rokhmad_yulian/', '_blank');
      },
      wa() {
        window.open('https://api.whatsapp.com/send/?phone=62895336397742', '_blank');
      },
      link() {
        window.open('https://www.linkedin.com/in/rokhmad-yulian-01b80b212/', '_blank');
      },
      github() {
        window.open('https://github.com/rokhmad92', '_blank');
      },
    // END redirect link
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        this.darkON = false
        this.lightON = true
      } 
      else {
        document.documentElement.classList.remove('dark')
        this.darkON = true
        this.lightON = false
      }
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.handleScroll)
  },
}
</script>

<style>
.hamburgerActive {
  z-index: 10;
  position: absolute;
  width: 100%;
}

.router-link-active.nav {
  color: #F1F5F9;
  text-decoration: underline;
}

.router-link-active.hamburger {
  color: #F1F5F9;
  text-decoration: underline;
}
</style>

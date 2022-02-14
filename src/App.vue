<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
@import "./assets/css/global.css";
#app {
  min-width: 100%;
  min-height: 100vh;
  font-family: "Roboto-Condensed-Regular", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--dark);
  color: var(--snow);
}
/* TRANSITIONS ROUTER */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.2s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.2s ease-in;
}
</style>

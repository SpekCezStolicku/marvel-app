<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <router-view></router-view>
</template>

<style>
@import "./assets/css/global.css";
#app {
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Roboto-Condensed-Regular", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--dark);
  color: var(--snow);
}
</style>

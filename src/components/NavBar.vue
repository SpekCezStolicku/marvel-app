<template>
  <nav>
    <!-- LOGO -->
    <img class="logo" src="../assets/Marvel-logo.svg" alt="Marvel logo" />

    <!-- CONTAINER LINK -->
    <div class="container-link">
      <router-link
        class="link"
        v-for="(route, index) in routes"
        :key="index"
        :to="route.link"
        >{{ route.name }}</router-link
      >
    </div>

    <!-- BANNER -->
    <img class="banner" src="../assets/bg-banner.jpg" alt="Heroes banner" />
  </nav>
</template>

<script setup>
const routes = [
  {
    name: "search",
    link: "/",
  },
  {
    name: "favorites",
    link: "/favorites",
  },
];
</script>

<style scoped>
.logo {
  max-width: 150px;
}
.container-link {
  margin: 1em;
}
.link {
  margin: 1em;
  font-size: 1.1em;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--snow);
  text-decoration: none;
}
.banner {
  max-width: 100vw;
  width: auto;
  height: auto;
}
.router-link-exact-active {
  border-bottom: solid var(--red);
}
@media only screen and (max-width: 450px) {
  .banner {
    display: none;
  }
}
</style>

<template>
  <div class="container">
    <SearchBar />
    <div class="hero-result-container d-flex">
      <HeroCard class="d-flex" />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import HeroCard from "../components/reusable/HeroCard.vue";
export default {
  components: {
    SearchBar,
    HeroCard,
  },
};
</script>

<style>
.hero-result-container {
  flex-wrap: wrap;
  align-items: stretch !important;
  align-content: stretch !important;
}
</style>

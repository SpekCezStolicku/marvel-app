<template>
  <div class="container">
    <SearchBar />
    <div class="hero-result-container d-flex">
      <HeroCard />
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
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>

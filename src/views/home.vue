<template>
  <div class="container">
    <SearchBar />
    <HeroCard />
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

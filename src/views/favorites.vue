<template>
  <div>
    <h1>Your favorite heroes</h1>
    <div class="hero-result-container d-flex">
      <HeroCard :search="profile.favoriteHeroes" />
    </div>
  </div>
</template>

<script>
import HeroCard from "../components/reusable/HeroCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    HeroCard,
  },
  computed: {
    ...mapState(["profile", "favoriteHeroes"]),
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.5em;
  font-weight: bold;
  margin: 1em 0;
}
</style>

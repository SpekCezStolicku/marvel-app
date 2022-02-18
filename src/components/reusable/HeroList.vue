<template>
  <div class="container">
    <BaseTitle
      v-if="search.searchResult.length > 0"
      :title="this.resultTitle"
    />
    <h1 v-if="search.firstSearch">Your hero was not found</h1>
    <!-- LIST OF SEARCHED HEROES -->
    <div class="hero-result-container d-flex">
      <HeroCard v-if="!loading" :search="search.searchResult" />
    </div>
    <Loading v-if="search.loading" />
    <!-- LIST OF RANDOM GENERATED HEROES -->
    <BaseTitle v-if="search.searchRandomResult.length > 0" :title="title" />
    <div class="hero-result-container d-flex">
      <HeroCard :search="search.searchRandomResult" />
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle.vue";
import HeroCard from "./HeroCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    BaseTitle,
    HeroCard,
  },
  data() {
    return {
      resultTitle: "Your wanted hero",
    };
  },
  props: {
    title: {
      type: String,
      require: false,
    },
  },
  computed: {
    ...mapState(
      ["search", "searchRandomResult"],
      ["search", "searchResult"],
      ["search", "firstSearch"],
      ["search", "loading"]
    ),
  },
  created() {
    this.$store.dispatch("randomSearch");
  },
};
</script>

<style scoped>
h1 {
  margin: 2em;
}
@media only screen and (max-width: 450px) {
  .container {
    margin-top: 2.5em;
  }
}
</style>

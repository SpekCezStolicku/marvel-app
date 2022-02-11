<template>
  <div>
    <BaseTitle
      v-if="search.searchResult.length > 0"
      :title="this.resultTitle"
    />
    <div class="hero-result-container d-flex">
      <HeroCard :search="search.searchResult" />
    </div>
    <BaseTitle :title="title" />
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
    ...mapState(["search", "searchRandomResult"], ["search", "searchResult"]),
  },
  created() {
    this.$store.dispatch("randomSearch");
  },
};
</script>

<style scoped>
.hero-result-container {
  margin: auto;
  padding: 2em 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>

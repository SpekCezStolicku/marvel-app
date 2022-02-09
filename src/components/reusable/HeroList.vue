<template>
  <div>
    <BaseTitle :title="title" />
    <div class="hero-result-container d-flex">
      <HeroCard />
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle.vue";
import HeroCard from "./HeroCard.vue";
export default {
  components: {
    BaseTitle,
    HeroCard,
  },
  props: {
    title: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped>
.hero-result-container {
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>

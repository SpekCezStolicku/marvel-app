<template>
  <div>
    <BaseTitle :title="title" />
    <div class="chip-container d-flex">
      <p v-for="item in recent" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./reusable/BaseTitle.vue";
export default {
  components: {
    BaseTitle,
  },
  data() {
    return {
      title: "Your last search",
      recent: JSON.parse(localStorage.getItem("recentSearch")),
    };
  },
};
</script>

<style scoped>
p {
  background: var(--red);
  padding: 0.5em 2em;
  border-radius: 25px;
  margin: 0 2em 1em 2em;
}
.chip-container {
  flex-wrap: wrap;
}
@media only screen and (max-width: 450px) {
  p {
    font-size: 0.8em;
  }
}
</style>

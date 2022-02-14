<template>
  <!-- HERO CARD -->
  <router-link
    class="card"
    v-for="(hero, index) in search"
    :key="index"
    :to="{ name: 'heroProfile', params: { id: hero.id } }"
  >
    <!-- THUMBNAIL -->
    <img
      class="thumbnail"
      :src="hero.thumbnail.path + `.` + hero.thumbnail.extension"
      :alt="hero.name"
    />
    <!-- HERO NAME -->
    <h3>{{ hero.name }}</h3>
  </router-link>
</template>

<script>
export default {
  props: {
    search: {
      type: Array,
      require: false,
    },
  },
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
  margin: 0.3em;
  cursor: pointer;
  text-decoration: none;
}
.card:hover {
  transform: scale(1.05);
  transition: all 0.4s ease;
}
.card:hover:after {
  content: "Explore";
  position: absolute;
  filter: grayscale(0);
  color: var(--snow);
  background: var(--red);
  padding: 0.25em 0.5em;
  font-size: 1.8em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.thumbnail {
  height: 250px;
  width: 300px;
}
h3 {
  font-size: 1.2em;
  color: var(--snow);
}
</style>

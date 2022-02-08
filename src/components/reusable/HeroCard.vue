<template>
  <!-- HERO CARD -->
  <div class="card" v-for="(hero, index) in heroes" :key="index">
    <!-- THUMBNAIL -->
    <img
      class="thumbnail"
      :src="hero.thumbnail.path + `.` + hero.thumbnail.extension"
      :alt="hero.name"
    />
    <!-- HERO NAME -->
    <h3>{{ hero.name }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      heroes: null,
    };
  },
  created() {
    axios({
      method: "get",
      url: "https://gateway.marvel.com/v1/public/characters?ts=12a&apikey=67d5b80b6246066e65409141d355a52a&hash=1676ffca6f2911e555cfb849a1f64c18",
    })
      .then((response) => {
        this.heroes = response.data.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
  margin: 0.3em;
  cursor: pointer;
}
.card:hover {
  filter: grayscale(0);
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
  font-size: 1.3em;
  color: var(--snow);
}
</style>

<template>
  <div class="card" v-for="(hero, index) in heroes" :key="index">
    <img
      class="thumbnail"
      :src="hero.thumbnail.path + `.` + hero.thumbnail.extension"
      :alt="hero.name"
    />
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
  margin: 0.1em;
  cursor: pointer;
}
.card:hover {
  transition: all 0.4s ease;
  transform: scale(1.1);
}
.thumbnail {
  width: 300px;
}
h3 {
  font-size: 1.3em;
  color: var(--snow);
}
</style>

<template>
  <div>
    <h1>{{ heroObject.name }}'s profile</h1>
    <div class="hero d-flex">
      <img
        :src="heroObject.thumbnail.path + '.' + heroObject.thumbnail.extension"
        :alt="heroObject.name"
      />
      <div class="about">
        <h3>
          Name:
          {{ heroObject.name }}
        </h3>
        <p>Story: {{ heroStory }}</p>
        <p>Comics: {{ heroObject.comics.available }}</p>
        <div class="action-bar d-flex">
          <button>Set hero favorite</button>
          <p>or <span @click="$router.go(-1)">return back</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapState(["search", "searchRandomResult"], ["search", "searchResult"]),
    heroObject() {
      if (this.search.searchRandomResult.find((hero) => hero.id == this.id)) {
        return this.search.searchRandomResult.find(
          (hero) => hero.id == this.id
        );
      } else {
        return this.search.searchResult.find((h) => h.id == this.id);
      }
    },
    heroStory() {
      return this.heroObject.description.length > 10
        ? this.heroObject.description
        : "No one cares about the story of this hero. How sad...";
    },
  },
  methods: {
    setFavorite() {
      this.$store.dispatch("favoriteHeroObject", this.heroObject);
    },
  },
};
</script>

<style scoped>
img {
  width: 500px;
  margin: 0 2em;
}
h1 {
  font-size: 2.5em;
  font-weight: bold;
  margin: 1em 0;
}
h3 {
  font-size: 1.8em;
}
.about {
  max-width: 40%;
  text-align: left;
}
p {
  font-size: 1.3em;
}
button {
  padding: 0.5em 1.5em;
  font-size: 1.1em;
  margin: 1.5em 0.8em;
  background: var(--red);
  color: var(--snow);
  border: 0;
  cursor: pointer;
  box-shadow: 1px 1px 5px black;
  transition: all 0.3s ease;
}
button:hover {
  box-shadow: 2px 2px 10px black;
  transition: all 0.3s ease;
}
span {
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease;
}
span:hover {
  transition: all 0.3s ease;
  color: var(--red);
}
</style>

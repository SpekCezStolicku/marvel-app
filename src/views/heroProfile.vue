<template>
  <div>
    <!-- PROFILE TITLE -->
    <h1 class="title">{{ heroObject.name }}'s profile</h1>

    <!-- HERO CARD -->
    <div class="hero d-flex">
      <img
        :src="heroObject.thumbnail.path + '.' + heroObject.thumbnail.extension"
        :alt="heroObject.name"
      />

      <!-- ABOUT HERO SECTION -->
      <div class="about">
        <h3>
          Name:
          {{ heroObject.name }}
        </h3>
        <p>Story: {{ heroStory }}</p>
        <p>Comics: {{ heroObject.comics.available }}</p>

        <p>
          Your Favorite:
          <transition name="fate" appear>
            <strong>{{ notificationFavorite }}</strong>
          </transition>
        </p>

        <!-- ACTION BUTTONS  -->
        <div class="action-bar d-flex">
          <button
            class="active"
            @click="setFavorite"
            :class="{ disabledButton: favorite, active: !favorite }"
            :disabled="favorite"
          >
            Set hero favorite
          </button>
          <button
            class="active"
            @click="beforeRemove"
            v-if="favorite"
            :class="{ disabledButton: !favorite, active: favorite }"
          >
            Remove from favorite
          </button>
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
    ...mapState(["profile", "favoriteHeroes"]),
    // WE HAVE 3 OPTIONS FROM STATE. GET DATA FROM RANDOM RESULT ARRAY, FAVORITE HERO LIST ARRAY OR SEARCH RESULT ARRAY
    // FUNCTION CHOOSE CORRECT STATE SOURCE BASED ON SPECIFIED HERO ID
    // THEN FILTER SINGLE HERO OBJECT FROM STORED ARRAY OF HEROES OBJECTS
    heroObject() {
      if (this.search.searchRandomResult.find((hero) => hero.id == this.id)) {
        return this.search.searchRandomResult.find(
          (hero) => hero.id == this.id
        );
      } else if (this.search.searchResult.find((h) => h.id == this.id)) {
        return this.search.searchResult.find((h) => h.id == this.id);
      } else {
        return this.profile.favoriteHeroes.find((o) => o.id == this.id);
      }
    },
    // IF WE HAVE NO DESCRIPTION FROM API, USE THIS WISE SENTENCE :)
    heroStory() {
      return this.heroObject.description.length > 10
        ? this.heroObject.description
        : "No one cares about the story of this hero. How sad...";
    },
    getHeroIndex() {
      return this.profile.favoriteHeroes.findIndex((o) => o.id == this.id);
    },
  },
  methods: {
    //   COMMIT MUTATION WITH CURRENT HERO OBJECT AS PAYLOAD
    setFavorite() {
      this.$store.commit("ADD_FAVORITE", this.heroObject);
      this.isFavoriteObject();
    },
    isFavoriteObject() {
      if (this.profile.favoriteHeroes.find((o) => o.id == this.id)) {
        this.favorite = true;
        this.notificationFavorite = "This hero is already your favorite";
      } else this.notificationFavorite = "This is not your favorite hero yet";
    },
    removeFavorite() {
      if (
        this.profile.favoriteHeroes.find((o) => o.id == this.id) &&
        this.favorite === false
      ) {
        this.profile.favoriteHeroes.splice(this.getHeroIndex, 1);
      }
    },
    beforeRemove() {
      if (!this.profile.favoriteHeroes.find((o) => o.id == this.id)) {
        this.favorite = false;
        return (this.notificationFavorite =
          "This hero is not your friend anymore");
      } else {
        this.favorite = false;
        this.removeFavorite();
        return (this.notificationFavorite =
          "This hero is not your friend anymore");
      }
    },
  },
  data() {
    return {
      favorite: false,
      notificationFavorite: "",
    };
  },
  mounted() {
    this.isFavoriteObject();
  },
  beforeUnmount() {
    this.removeFavorite();
  },
};
</script>

<style scoped>
img {
  width: 500px;
  margin: 0 2em;
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
.active {
  padding: 0.5em 1.5em;
  font-size: 1.1em;
  margin: 1.5em 0.8em;
  background: var(--red);
  color: var(--snow);
  border: 0;
  cursor: pointer;
  box-shadow: 1px 1px 5px black;
  transition: all 0.3s ease-in-out;
}
.active:hover {
  box-shadow: 2px 2px 10px black;
  transition: all 0.3s ease;
}
.action-bar {
  flex-wrap: wrap;
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
.disabledButton {
  transition: all 0.2s ease;
  cursor: not-allowed;
  background: grey;
  color: black;
}
strong {
  transition: all 0.2s ease-in-out;
  padding: 0 0.5em;
}
@media only screen and (max-width: 1000px) {
  img {
    width: auto;
  }
  h3 {
    font-size: 1.4em;
  }
  .hero {
    flex-wrap: wrap;
  }
  .about {
    margin: 1em;
    max-width: 100%;
    margin: 2em;
  }
  p,
  button {
    font-size: 1em;
  }
}
@media only screen and (max-width: 450px) {
  img {
    width: 250px;
  }
  .hero {
    display: block;
  }
  .about {
    max-width: 100%;
  }
}
</style>

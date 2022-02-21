<template>
  <!-- SEARCH BAR -->
  <form @submit.prevent="startSearch()" class="search-wrapper d-flex">
    <!-- INPUT -->
    <input
      autofocus
      v-model="searchValue"
      type="text"
      placeholder="Search a hero by name"
    />
    <!-- BUTTON -->
    <button @click="startSearch()">
      <img src="../assets/search-icon.svg" alt="Search Icon" />
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchValue: "",
      recentSearch: [],
    };
  },
  methods: {
    addLastSearching() {
      if (this.searchValue.length >= 3) {
        this.recentSearch.push(this.searchValue);
      }
    },
    startSearch() {
      this.$store.dispatch("heroesSearch", this.searchValue);
      this.addLastSearching();
      this.searchValue = "";
    },
  },
  watch: {
    recentSearch: {
      handler() {
        localStorage.setItem("recentSearch", JSON.stringify(this.recentSearch));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.search-wrapper {
  position: relative;
  top: -1.75em;
  align-items: stretch !important;
}
input {
  width: 35%;
  font-size: 1.1em;
  height: 3em;
  border: none;
  box-shadow: 1px 1px 8px black;
  padding-left: 2em;
  border-top-left-radius: var(--b-radius);
  border-bottom-left-radius: var(--b-radius);
  background: var(--snow);
}
input:focus {
  outline: none;
}
button {
  padding: 0 1em;
  background: var(--snow);
  border: none;
  border-top-right-radius: var(--b-radius);
  border-bottom-right-radius: var(--b-radius);
  cursor: pointer;
}

@media only screen and (max-width: 1100px) {
  input {
    width: 60%;
  }
}
@media only screen and (max-width: 450px) {
  input {
    font-size: 0.8em;
  }
  .search-wrapper {
    position: relative;
    top: 1.75em;
    margin-bottom: 2em;
  }
}
</style>

<template>
  <!-- SEARCH BAR -->
  <div class="search-wrapper d-flex">
    <!-- INPUT -->
    <input
      autofocus
      v-model="searchValue"
      type="text"
      placeholder="Search a hero by name"
    />
    <!-- BUTTON -->
    <button @click="addSearchString(this.searchValue)">
      <img src="../assets/search-icon.svg" alt="Search Icon" />
    </button>
  </div>
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
    addSearchString(newSearch) {
      if (newSearch.length >= 3) {
        this.recentSearch.push(newSearch);
      }
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
h3 {
  z-index: 10000;
  color: red;
  font-size: 3em;
}
</style>

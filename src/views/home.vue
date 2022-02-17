<template>
  <div>
    <SearchBar />
    <RecentSearch v-if="notEmptyStorage" />
    <HeroList :title="title" />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import RecentSearch from "../components/RecentSearch.vue";
import HeroList from "../components/reusable/HeroList.vue";
export default {
  components: {
    SearchBar,
    RecentSearch,
    HeroList,
  },
  data() {
    return {
      title: "Meet new heroes",
    };
  },
  computed: {
    notEmptyStorage() {
      return localStorage.getItem("recentSearch");
    },
  },
};
</script>

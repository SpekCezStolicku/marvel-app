<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  border-bottom: 3px solid var(--red);
}
</style>

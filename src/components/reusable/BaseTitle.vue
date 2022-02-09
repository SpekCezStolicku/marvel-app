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
  text-align: left;
  font-size: 2em;
  border-bottom: 4px solid var(--red);
}
div {
  padding: 1em 2.5%;
}
</style>

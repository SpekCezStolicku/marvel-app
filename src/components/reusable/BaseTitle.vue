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
  font-size: 2.25em;
  border-bottom: 4px solid var(--red);
}
div {
  padding: 1em 2.5%;
}
@media only screen and (max-width: 1100px) {
  h1 {
    font-size: 2em;
    padding: 0 0.5em;
  }
}
</style>

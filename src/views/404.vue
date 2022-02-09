<template>
  <div class="absolute-container">
    <img src="../assets/404.png" alt="Not found" />
    <h1>Ooops! You have found my kryptonite.</h1>
    <a href="https://www.dccomics.com/">Get back to safe zone</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a,
a:visited {
  color: var(--red);
  font-size: 1.2em;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
a:hover {
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid var(--snow);
}
.absolute-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}
img {
  margin-top: 10%;
}
</style>

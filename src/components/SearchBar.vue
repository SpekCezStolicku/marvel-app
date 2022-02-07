<template>
  <!-- SEARCH BAR -->
  <div class="search-wrapper d-flex">
    <!-- INPUT -->
    <input autofocus type="text" placeholder="Search a hero by name" />
    <!-- BUTTON -->
    <button>
      <img src="../assets/search-icon.svg" alt="Search Icon" />
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.search-wrapper {
  position: relative;
  top: -1.75em;
  align-items: stretch !important;
}
input {
  width: 35%;
  height: 3.5em;
  border: 0;
  border-top-left-radius: var(--b-radius);
  border-bottom-left-radius: var(--b-radius);
  background: var(--snow);
}
button {
  padding: 0 1em;
  background: var(--snow);
  border: 0;
  border-top-right-radius: var(--b-radius);
  border-bottom-right-radius: var(--b-radius);
}
</style>

<script setup lang="ts"></script>

<template>
  <header>
    <div>
      <RouterLink to="/" class="logo-link">
        <img src="/logo.svg" alt="">
        <span>FormGen</span>
      </RouterLink>
    </div>
    <div>
      <a href="https://github.com/justanorange/formgen" target="_blank">GitHub</a>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
  background-color: light-dark(#ffffff, #000000);

  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    img {
      height: 2rem;
      margin-right: 0.5rem;
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>

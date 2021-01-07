<template>
  <div>
    <b-navbar type="is-primary" centered class="header-navbar">
      <template slot="start">
        <b-navbar-item tag="h1" class="logo"> X-Component </b-navbar-item>
      </template>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .header-navbar {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
  .logo {
    font-size: 30px;
    font-weight: 600;
  }
</style>

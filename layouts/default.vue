<template>
  <div>
    <b-navbar type="is-primary" centered>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/" class="logo">
          X-Component
        </b-navbar-item>
      </template>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .logo {
    font-size: 20px;
    font-weight: 600;
  }
</style>

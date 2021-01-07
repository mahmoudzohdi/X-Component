<template>
  <section class="section">
    <x-card
      v-for="xComponent in XComponents"
      :key="xComponent.dir"
      :component="xComponent"
    ></x-card>
  </section>
</template>

<script>
  import XComponents from '@/static/x-components';
  import XCard from '@/components/x-card';

  export default {
    name: 'home',
    components: {
      XCard,
    },
    data() {
      return {
        XComponents,
      };
    },
  };
</script>

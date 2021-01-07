<template>
  <section class="section">
    <div class="columns is-multiline">
      <div
        v-for="xComponent in XComponents"
        :key="xComponent.dir"
        class="column is-one-third"
      >
        <x-card :component="xComponent"></x-card>
      </div>
    </div>
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

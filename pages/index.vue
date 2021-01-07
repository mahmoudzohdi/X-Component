<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-one-third">
        <x-card
          v-for="xComponent in XComponents"
          :key="xComponent.dir"
          :component="xComponent"
        ></x-card>
      </div>
      <div class="column is-one-third">
        <x-card
          v-for="xComponent in XComponents"
          :key="xComponent.dir"
          :component="xComponent"
        ></x-card>
      </div>
      <div class="column is-one-third">
        <x-card
          v-for="xComponent in XComponents"
          :key="xComponent.dir"
          :component="xComponent"
        ></x-card>
      </div>
      <div class="column is-one-third">
        <x-card
          v-for="xComponent in XComponents"
          :key="xComponent.dir"
          :component="xComponent"
        ></x-card>
      </div>
      <div class="column is-one-third">
        <x-card
          v-for="xComponent in XComponents"
          :key="xComponent.dir"
          :component="xComponent"
        ></x-card>
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

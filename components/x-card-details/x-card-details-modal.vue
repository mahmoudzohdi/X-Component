<template>
  <section>
    <button class="button is-primary is-medium" @click="isModalActive = true">
      show details
    </button>

    <b-modal v-model="isModalActive" :width="640" scroll="keep">
      <x-card-details :component="component"></x-card-details>
    </b-modal>
  </section>
</template>

<script>
  import XCardDetails from './x-card-details.vue';

  export default {
    name: 'x-card-details-modal',
    components: { XCardDetails },
    props: {
      component: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isModalActive: false,
      };
    },
  };
</script>

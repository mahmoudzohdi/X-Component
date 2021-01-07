<template>
  <section>
    <b-button type="is-primary is-light" @click="isModalActive = true">
      show component files
    </b-button>
    <a
      :href="generateCodeSandboxURL(component.dir)"
      class="button is-primary is-light"
      target="_blank"
    >
      demo
    </a>

    <b-modal
      v-model="isModalActive"
      class="x-card-details-modal"
      :width="640"
      scroll="keep"
    >
      <x-card-details :component="component"></x-card-details>
    </b-modal>
  </section>
</template>

<script>
  import { generateCodeSandboxURL } from '@/utils/codesandbox';
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
        generateCodeSandboxURL,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .x-card-details-modal {
    justify-content: start;
    padding-top: 50px;
  }
</style>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <a :href="generateCodeSandboxURL(component.dir)" target="_blank">
          {{ component.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { generateCodeSandboxURL } from '@/utils/codesandbox';

  export default {
    props: {
      component: {
        type: Object,
        required: true,
      },
    },
    data() {
      return { generateCodeSandboxURL };
    },
  };
</script>

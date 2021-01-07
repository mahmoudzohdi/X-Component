<template>
  <section v-if="tabs && tabs.length" class="x-card-details">
    <b-tabs v-model="activeTab" type="is-boxed">
      <b-tab-item
        v-for="(tab, index) in tabs"
        :key="tab.label"
        :label="tab.label"
      >
        <pre>{{ tab.content || getTabContent(index, tab.path) }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
  import { readFileContent } from '@/utils/file-content-reader';

  export default {
    name: 'x-card-details',
    props: {
      component: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        activeTab: 0,
        tabs: [],
      };
    },
    computed: {},
    mounted() {
      // this.component.componentCodeFilesPath
      this.tabs = this.component.componentCodeFilesPath.reduce(
        (tabsArray, path) => {
          const splitPath = path.split('/');

          return tabsArray.concat({
            label: splitPath[splitPath.length - 1],
            content: null,
            path,
          });
        },
        []
      );
    },
    methods: {
      getTabContent(tabIndex, filePath) {
        readFileContent(`/x-components/${this.component.dir}/${filePath}`).then(
          (res) => {
            this.tabs[tabIndex].content = res;
          }
        );
      },
    },
  };
</script>
<style lang="scss" scoped>
  .x-card-details {
    background-color: #fff;
  }
</style>

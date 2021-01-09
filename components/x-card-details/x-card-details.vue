<template>
  <section v-if="tabs && tabs.length" class="x-card-details">
    <b-tabs v-model="activeTab" type="is-boxed" @input="tabsInputHandler">
      <b-tab-item v-for="tab in tabs" :key="tab.label" :label="tab.label">
        <pre>{{ tab.content }}</pre>
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
    mounted() {
      this.tabs = this.component.componentCodeFilesPath.reduce(
        (tabsArray, path) => {
          const splitPath = path.split('/');

          return tabsArray.concat({
            label: splitPath[splitPath.length - 1],
            content: null,
            path,
            fileExtention: splitPath[splitPath.length - 1].split('.')[1],
          });
        },
        []
      );
      this.tabsInputHandler(0);
    },
    methods: {
      getTabContent(tabIndex, filePath) {
        readFileContent(`/x-components/${this.component.dir}/${filePath}`).then(
          (res) => {
            this.tabs[tabIndex].content = res;
          }
        );
      },
      tabsInputHandler(tabIndex) {
        !this.tabs[tabIndex].content &&
          this.getTabContent(tabIndex, this.tabs[tabIndex].path);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .x-card-details {
    background-color: #fff;
  }
</style>

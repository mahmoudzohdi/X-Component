// {
//   name: 'component name',
//   description: 'component description',
//   dir: 'your directory name under x-components directory',
//   componentCodeFilesPath: ['the path of each file related to your component without directory name that you wrote in "dir" property'],
//   github: {
//     name: 'your github account full name',
//     username: 'your github account username',
//   },
//   references: [{name: 'name of the reference', link: 'link of the reference'}],
//   technologies: ['array of technologies that used in your component']
// }
export default [
  {
    name: 'Auth Modal (Reusable “Login First” modal)',
    description: 'Kindly find attached article link for more details',
    dir: 'login-first-modal',
    componentCodeFilesPath: [
      'src/components/auth-modal.vue',
      'src/store/AuthModule/state.js',
      'src/store/AuthModule/mutations.js',
      'src/store/AuthModule/actions.js',
    ],
    github: {
      name: 'Mahmoud Zohdi',
      username: 'mahmoudzohdi',
    },
    references: [
      {
        name:
          'Article: Create reusable “Login First” modal before the user action with Vue.js + Vuex',
        link:
          'https://medium.com/@mahmoud.zohdi/create-reusable-login-first-modal-before-the-user-action-with-vue-js-vuex-caa7038b352b',
      },
    ],
    technologies: ['Vue', 'Vuex'],
  },
];

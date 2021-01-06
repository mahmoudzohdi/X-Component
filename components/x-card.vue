<template>
  <div class="card">
    <div class="card-content">
      <h2 class="title">
        <a :href="generateCodeSandboxURL(component.dir)" target="_blank">
          {{ component.name }}
        </a>
      </h2>
      <div class="content">
        <p>
          {{ component.description }}
        </p>
        <p v-if="component.references">
          References:
          <a
            v-for="(reference, index) in component.references"
            :key="`reference-${index}`"
            :href="reference.link"
            target="_blank"
          >
            {{ reference.name }}
            <span v-if="index < component.references.length - 1">, </span>
          </a>
        </p>
      </div>

      <div class="media">
        <b-image
          :src="getGithubUserAvatarURL(component.github.username)"
          :alt="component.github.name"
          :title="component.github.name"
          class="media-left image circle is-48x48"
          rounded
        ></b-image>

        <div class="media-content">
          <h5 class="title is-5">{{ component.github.name }}</h5>
          <p class="subtitle is-6">
            <a
              :href="getGithubUserProfileURL(component.github.username)"
              :title="component.github.name"
              target="_blank"
              rel="author"
            >
              @{{ component.github.username }}
            </a>
          </p>

          <b-taglist v-if="component.technologies">
            <b-tag
              v-for="technology in component.technologies"
              :key="technology"
            >
              {{ technology }}
            </b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { generateCodeSandboxURL } from '@/utils/codesandbox';
  import {
    getGithubUserAvatarURL,
    getGithubUserProfileURL,
  } from '@/utils/user';

  export default {
    props: {
      component: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        generateCodeSandboxURL,
        getGithubUserAvatarURL,
        getGithubUserProfileURL,
      };
    },
  };
</script>

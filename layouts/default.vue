<template>
  <div class="bg-black text-white">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import metadata from '../utils/metadata'

@Component({
  head () {
    return {
      title: 'Samantha Baita',
      meta: metadata({
        title: 'Samantha Baita',
        description: 'Samantha Baita personal website',
        image: '/og-image.png',
        url: process.env.BASE_URL + this.$route.path
      }),
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path
        }
      ],
      htmlAttrs: {
        lang: 'it'
      }
    }
  }
})
export default class DefaultLayout extends Vue {}
</script>

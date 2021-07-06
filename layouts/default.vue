<template>
  <div class="bg-gray-900 text-white">
    <div class="container mx-auto rounded bg-gray-200 p-2">
      <div class="flex items-center justify-start">
        <p class="text-black">👀 A Revas stiamo assumendo! <a href="https://www.revas.io">Scopri di più</a></p>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {}
</script>

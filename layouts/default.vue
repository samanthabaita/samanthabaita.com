<template>
  <div class="bg-black text-white">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {}
</script>

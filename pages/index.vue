<template>
  <div>
    <div class="w-screen h-screen">
      <div class="container mx-auto py-10 px-4">
        <div class="flex flex-col justify-center">
          <div class="mb-12">
            <span class="text-4xl md:text-6xl">Hello, I'm Samantha Baita.</span>
          </div>

          <div class="mb-10">
            <div>
              <span class="text-xs font-bold uppercase">Work</span>
            </div>
            <div>
              <span class="text-base">I'm a partner of
                <a class="underline" href="https://www.revas.io">Revas Società Benefit</a>, where I mainly deal with software development and design.</span>
            </div>
          </div>

          <div class="mb-10">
            <div>
              <span class="text-xs font-bold uppercase">Contacts</span>
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <div class="flex items-center">
                  <div class="mr-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <span class="text-base">
                      <a class="hover:underline" href="mailto:baita.samantha@gmail.com">Email</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-base">
                      <a class="hover:underline" href="https://twitter.com/samanthabaita">Twitter</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <div>
                <div class="flex items-center">
                  <div class="w-4 h-4 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-base">
                      <a class="hover:underline" href="https://www.linkedin.com/in/samanthabaita/">Linkedin</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <span class="text-xs font-bold uppercase">Hobbies</span>
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 mr-3">
                    🎲
                  </div>
                  <div>
                    <span class="text-base">
                      Secretary @ <a class="hover:underline" href="https://ludimus.it">Ludimus</a> a cultural association that promotes tabletop games 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 mr-3">
                    💃
                  </div>
                  <div>
                    <span class="text-base">
                      I love to dance salsa and bachata 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <div class="flex items-center">
                  <div class="w-4 h-4 mr-3">
                    🎮
                  </div>
                  <div>
                    <span class="text-base">
                      I like to play videogames (League of Legends, TFT and other games that run on MacOS X or on Switch) 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head () {
    return {
      title: 'Home |'
    }
  }
})
export default class IndexPage extends Vue {}
</script>

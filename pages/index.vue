<template>
  <div>
    <div class="w-screen h-screen">
      <div class="container mx-auto rounded border border-gray-50 p-2 z-50">
        <div class="flex items-center justify-start">
          <p class="mr-4">
            👀 Revas is hiring!
          </p>
          <a class="rounded bg-gray-100 text-black px-2 py-1 hover:underline" href="https://www.revas.io">discover more</a>
        </div>
      </div>
      <div class="container mx-auto py-10 px-4">
        <div class="flex flex-col justify-center">
          
          <div class="mb-12">
            <h1 class="text-4xl md:text-6xl">Hello, I'm Samantha Baita 👋</h1>
          </div>

          <div class="mb-10">
            <div class="md:w-1/2 bg-gray-700 rounded p-4">
              <div class="mb-6">
                <span class="text-xs font-bold uppercase">Work</span>
              </div>
              <div>
                <span class="text-base"
                  >I'm a partner of
                  <a class="underline" href="https://www.revas.io"
                    >Revas Società Benefit</a
                  >, where I do frontend development (Vue.js + Typescript), UX design and some app development using Flutter.
                </span>
              </div>
            </div>
          </div>

          <div class="mb-10">
            <div class="md:w-1/2 bg-gray-800 rounded p-4">
              <div class="mb-6">
                <span class="text-xs font-bold uppercase">Contacts</span>
              </div>
              <div class="flex flex-col">
                <div class="mb-4">
                  <div class="flex items-center">
                    <div class="mr-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <span class="text-base">
                        <a
                          class="hover:underline"
                          href="mailto:baita.samantha@gmail.com"
                          >Email</a
                        >
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="mb-4">
                  <div class="flex items-center">
                    <div class="w-4 h-4 mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <div>
                      <span class="text-base">
                        <a
                          class="hover:underline"
                          href="https://twitter.com/samanthabaita"
                          >Twitter</a
                        >
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col">
                <div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <div>
                      <span class="text-base">
                        <a
                          class="hover:underline"
                          href="https://www.linkedin.com/in/samanthabaita/"
                          >Linkedin</a
                        >
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/2 bg-gray-900 rounded  p-4">
            <div>
              <div class="mb-6">
                <span class="text-xs font-bold uppercase">Hobbies</span>
              </div>
              <div class="flex flex-col">
                <div class="mb-4">
                  <div class="flex items-center">
                    <div class="w-4 h-4 mr-3">🎲</div>
                    <div>
                      <span class="text-base">
                        Secretary @
                        <a class="hover:underline" href="https://ludimus.it"
                          >Ludimus</a
                        >
                        a cultural association that promotes tabletop games
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="mb-4">
                  <div class="flex items-center">
                    <div class="w-4 h-4 mr-3">💃</div>
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
                    <div class="w-4 h-4 mr-3">🎮</div>
                    <div>
                      <span class="text-base">
                        I like to play videogames like League of Legends, TFT and
                        other games that run on MacOS X or on Switch.
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head() {
    return {
      title: 'Home |',
    }
  },
})
export default class IndexPage extends Vue {}
</script>

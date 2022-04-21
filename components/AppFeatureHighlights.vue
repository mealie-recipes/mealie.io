<template>
  <div class="relative overflow-hidden bg-white pb-32">
    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
        <div>
          <div>
            <span class="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
              <ArchiveIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Create and Make Changes Easily</h2>
            <p class="mt-4 text-lg text-gray-500">
              Mealie's powerful recipe you can easily create new recipes and edit existing ones with ease. Add
              ingredients, instructions, description, nutrition and more, all from an easy to use editor.
            </p>
            <div class="mt-6">
              <a
                href="https://beta.mealie.io/"
                class="inline-flex rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-300"
              >
                Try It Out
              </a>
              <div class="mt-8 border-t border-gray-200 pt-6">
                <p class="text-base text-gray-500">
                  Power users can take advantage of Mealie's support for API extras on where you can specify additional
                  key/value pairs that will be added to the recipe for consumption by other applications via the Restful
                  API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div class="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0" ref="imageFirst">
          <TransitionFlyLeft>
            <img
              lazy
              v-show="isImageFirstVisible"
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              style="transition-delay: 0.25s"
              src="~assets/mealie-recipe-editor.webp "
              alt="Inbox user interface"
            />
          </TransitionFlyLeft>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-48 lg:px-0">
          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                <PencilAltIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Stay Organized with Machine Learning</h2>
              <p class="mt-4 text-lg text-gray-500">
                Mealie uses machine learning technology to process and parse recipe ingredients to help you stay
                organized and scale your recipe collection. With one click you can parse ingredients, and enable
                advanced features within Mealie like recipe-scaling and shopping list consolidation.
              </p>
              <div class="mt-6">
                <a
                  href="https://beta.mealie.io/admin/parser"
                  class="inline-flex rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-300"
                >
                  Try It Out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0" ref="imageSecond">
            <TransitionFlyRight>
              <img
                lazy
                v-show="isImageSecondVisible"
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 delay-500 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="~assets/mealie-nlp-parser.webp"
                alt="Customer profile user interface"
              />
            </TransitionFlyRight>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArchiveIcon, PencilAltIcon } from "@heroicons/vue/outline";
import { useIntersectOnce } from "~~/composables/use-intersect-once";

const imageFirst = ref<null | HTMLElement>(null);
const isImageFirstVisible = useIntersectOnce()(imageFirst);

const imageSecond = ref<null | HTMLElement>(null);
const isImageSecondVisible = useIntersectOnce()(imageSecond);
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-accent">
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
                class="
                  inline-flex
                  px-4
                  py-2
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  shadow-sm
                  text-white
                  bg-primary
                  hover:bg-primary-300
                "
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
        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            ref="imageFirst"
            class="
              animate__animated
              w-full
              rounded-xl
              shadow-xl
              ring-1 ring-black ring-opacity-5
              lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none
            "
            :class="isImageFirstVisible ? 'animate__backInUp' : ''"
            src="~assets/mealie-recipe-editor.webp "
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-48 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-accent">
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
                  class="
                    inline-flex
                    px-4
                    py-2
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    shadow-sm
                    text-white
                    bg-primary
                    hover:bg-primary-300
                  "
                >
                  Try It Out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              ref="imageSecond"
              class="
                animate__animated
                w-full
                rounded-xl
                shadow-xl
                ring-1 ring-black ring-opacity-5
                lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none
              "
              :class="isImageSecondVisible ? 'animate__backInUp' : ''"
              src="~assets/mealie-nlp-parser.webp"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
import { ArchiveIcon, PencilAltIcon } from "@heroicons/vue/outline";
import { useElementVisibility, watchOnce } from "@vueuse/core";

export default defineComponent({
  name: "AppFeatureHighlights",
  components: {
    ArchiveIcon,
    PencilAltIcon,
  },
  setup() {
    // Image First
    const imageFirst = ref(null);
    const imageFirstVisibility = useElementVisibility(imageFirst);
    const isImageFirstVisible = ref(false);

    watchOnce(imageFirstVisibility, () => {
      isImageFirstVisible.value = imageFirstVisibility.value;
    });

    // Image Second
    const imageSecond = ref(null);
    const imageSecondVisibility = useElementVisibility(imageSecond);
    const isImageSecondVisible = ref(false);

    watchOnce(imageSecondVisibility, () => {
      isImageSecondVisible.value = imageSecondVisibility.value;
    });

    return { imageSecond, imageFirst, isImageSecondVisible, isImageFirstVisible };
  },
});
</script>
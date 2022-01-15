<template>
  <div
  ref="container"
    class="relative py-6 lg:py-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
    :class="{
      'lg:grid-flow-row-dense': left,
    }"
  >
    <div
      class="relative"
      :class="{
        'lg:col-start-2': left,
      }"
    >
      <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">{{ project.header }}</h3>
      <p class="mt-3 text-lg text-gray-500">
        {{ project.description }}
      </p>

      <dl v-if="project.features" class="mt-10 space-y-10">
        <div v-for="item in project.features" :key="item.title" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ item.title }}</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            {{ item.description }}
          </dd>
        </div>
      </dl>
    </div>

    <div
      class="mt-10 -mx-4 relative lg:mt-0"
      aria-hidden="true"
      :class="{
        'lg:col-start-1': left,
      }"
    >
      <svg
        class="absolute left-1/2 transform -translate-x-1/2 z-0"
        width="600"
        :height="svgHeight"
        fill="none"
        viewBox="0 0 600 404"
      >
        <defs>
          <pattern
            id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="600" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
      </svg>
      <img class="relative mx-auto" width="490" :src="project.image" alt="Project Image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DisplayedProject } from "./types";

const container = ref(null)

const svgHeight = computed(() => container?.value?.clientHeight * 0.8 || 0)

const props = defineProps({
  project: {
    type: Object as () => DisplayedProject,
    required: true,
  },
  left: {
    type: Boolean,
    default: false,
  },
});
</script>

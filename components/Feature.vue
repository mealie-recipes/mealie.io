<template>
  <div
    class="flex h-[150px] w-[350px] justify-center space-x-2 p-2 text-white transition duration-500 ease-out hover:-translate-y-2"
  >
    <div
      class="mb-auto mt-1 mr-1 flex h-16 w-16 min-w-[4rem] items-center justify-center rounded-full p-2"
      :class="{
        'bg-primary': color === 'primary',
        'bg-accent': color === 'accent',
      }"
    >
      <component :is="feat.icon" class="h-8 grow text-white" aria-hidden="true" />
    </div>
    <div>
      <div class="flex items-center pb-2">
        <h4 class="text-lg text-gray-50">{{ feat.title }}</h4>
      </div>
      <p :class="textStyle ? textStyle : `text-md text-gray-501`">
        {{ feat.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FunctionalComponent } from "vue";

type colors = "accent" | "primary";

interface Feature {
  title: string;
  text: string;
  icon: FunctionalComponent;
}

defineProps({
  feat: {
    type: Object as () => Feature,
    required: true,
  },
  textStyle: {
    type: String,
    default: null,
  },
  titleStyle: {
    type: String,
    default: null,
  },
  color: {
    type: String as () => colors,
    default: "accent",
  },
});
</script>

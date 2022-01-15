<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-accent-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="md:hidden"> This site is under construction 🏗 </span>
          <span class="hidden md:inline"> Sorry for the mess! We're under construction 🏗 </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";

export default {
  components: {
    XIcon,
  },
};
</script>
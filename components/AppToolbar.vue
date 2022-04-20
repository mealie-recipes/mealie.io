<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative z-20">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-start py-2 md:justify-start md:space-x-10">
        <div class="flex justify-start align-middle lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Mealie</span>
          </a>
          <div class="flex flex-shrink-0 items-center">
            <img class="h-10 w-auto" src="~assets/header-logo.webp" alt="Mealie" />
          </div>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { Popover } from "@headlessui/vue";
import { NavItem } from "./NavButton/types";

defineProps({
  blogUrl: {
    type: String,
    default: "https://blog.tailwindcss.com",
  },
  navigation: {
    type: Array as () => NavItem[],
    default: null,
  },
});
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative z-20 justify-center bg-white">
    <div class="m-auto max-w-7xl sm:px-2 lg:py-1">
      <div class="k flex items-center justify-between py-2 px-2">
        <div class="flex justify-start align-middle">
          <a href="/">
            <span class="sr-only">Mealie</span>
          </a>
          <div class="flex flex-shrink-0 items-center">
            <svg class="h-6 w-6 fill-gray-600 sm:h-9 sm:w-9" viewBox="0 0 24 24">
              <path
                d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"
              />
            </svg>
            <h1 class="ml-2 text-lg text-gray-600 sm:text-3xl">Mealie</h1>
          </div>
        </div>
        <div class="items-bottom my-auto space-x-1 sm:ml-2 sm:space-x-4">
          <a
            v-for="link in links"
            class="rounded-md p-1 px-2 text-sm tracking-wider text-gray-600 hover:bg-gray-200 hover:text-accent-700 sm:p-2 sm:px-3 sm:text-lg sm:font-semibold"
            :href="link.href"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { Popover } from "@headlessui/vue";

const constants = useConstants();

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Features",
    href: "#features",
  },
  {
    text: "Docs",
    href: constants.docs,
  },
];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-primary z-20">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex justify-start items-center py-2 md:justify-start md:space-x-10">
        <div class="flex justify-start align-middle lg:w-0 lg:flex-1">
          <a href="/">
            <span class="sr-only">Workflow</span>
          </a>
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="~/assets/header-logo.webp" alt="Workflow" />
          </div>
        </div>
        <div class="-my-2 ml-auto md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>

        <!-- Desktop Nav -->
        <PopoverGroup as="nav" class="hidden md:flex space-x-8">
          <NavButton v-for="(item, index) in navigation" :item="item" :key="index" />
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href="https://docs.mealie.io"
            target="_blank"
            class="
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-2
              py-2
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-white
              bg-primary
              hover:bg-primary-400
            "
          >
            Docs
          </a>
          <a
            href="https://demo.mealie.io"
            target="_blank"
            class="
              ml-8
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-2
              py-2
              rounded-md
              text-base
              font-medium
              text-white
              bg-primary
              hover:bg-primary-400
            "
          >
            Demo
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-primary-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div>
              <NuxtLink
                to="/portal/login"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-primary-600
                  hover:bg-primary-700
                "
              >
                Docs
              </NuxtLink>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                <a :href="blogUrl" class="text-primary-600 hover:text-primary-500"> Blog </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { NavItem } from "./NavButton/types";

const props = defineProps({
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

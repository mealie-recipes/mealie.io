<template>
  <template v-if="!item.children">
    <a v-if="item.href" :href="item.href" class="text-base font-medium text-gray-500 hover:text-gray-900"> {{ item.name }} </a>
    <NuxtLink v-if="item.to" :to="item.to" class="text-base font-medium text-gray-500 hover:text-gray-900">
      {{ item.name }}
    </NuxtLink>
  </template>
  <template v-else>
    <Popover class="relative" v-slot="{ open }">
      <PopoverButton
        :class="[
          open ? 'text-gray-900' : 'text-gray-500',
          'group bg-white rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 px-1',
        ]"
      >
        <span>{{ item.name }}</span> 
        <ChevronDownIcon
          :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="
            absolute
            z-10
            -ml-4
            mt-3
            transform
            px-2
            w-screen
            max-w-md
            sm:px-0
            lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
          "
        >
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <a
                v-for="item in item.children"
                :key="item.name"
                :href="item.href"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ item.description }}
                  </p>
                </div>
              </a>
            </div>
            <div v-if="callsToAction" class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                <a
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">{{ item.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
</template>

<script setup lang="ts">
import { NavAction, NavItem } from "./types"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

defineProps({
  item: {
    type: Object as () => NavItem,
    required: true,
  },
  callsToAction: {
    type: Array as () => NavAction[],
    required: false,
    default: null,
  },
});
</script>


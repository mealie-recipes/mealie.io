<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="lg:pt-18 py-4 sm:py-10 md:py-16 lg:py-20">
    <main class="mx-auto flex max-w-7xl px-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline"> Recipe Management </span>
          {{ " " }}
          <span class="block text-2xl text-primary sm:text-4xl md:text-6xl"> For The Modern Household </span>
        </h1>
        <p class="mx-auto mt-3 mr-auto text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
          Mealie is an intuitive and easy to use recipe management app. It's designed to make your life easier by being
          the best recipes management experience on the web and providing you with an easy to use interface to manage
          your growing collection of recipes.
        </p>
        <div class="mt-5 flex w-full items-center justify-center space-x-2 sm:space-x-3 md:mt-8 md:justify-start">
          <div class="rounded-md">
            <a
              :href="constants.docs"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white shadow-lg duration-200 ease-in hover:-translate-y-1 hover:bg-primary-200 md:py-4 md:px-10 md:text-lg"
            >
              Get started
            </a>
          </div>
          <div class="rounded-md">
            <a
              :href="constants.demoUrl"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary shadow-lg duration-200 ease-in hover:-translate-y-1 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
const constants = useConstants();
</script>

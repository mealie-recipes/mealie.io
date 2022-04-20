<template>
  <div>
    <Banner />
    <AppHero />

    <!-- Core Features -->
    <div class="bg-gray-900">
      <div
        class="mx-auto flex max-w-7xl flex-col justify-center space-y-4 py-8 px-4 sm:px-6 md:flex-row md:space-y-0 md:space-x-4 lg:py-24 lg:px-8"
      >
        <div
          v-for="feat in coreFeature"
          class="flex h-[150px] w-[350px] justify-center space-x-2 p-2 text-white transition duration-500 ease-out hover:-translate-y-2"
        >
          <div
            class="mb-auto mt-1 mr-1 flex h-16 w-16 min-w-[4rem] items-center justify-center rounded-full bg-accent p-2"
          >
            <component :is="feat.icon" class="h-8 grow text-white" aria-hidden="true" />
          </div>
          <div>
            <div class="flex items-center pb-2">
              <h4 class="text-lg text-gray-50">{{ feat.title }}</h4>
            </div>
            <p class="text-md text-gray-50">
              {{ feat.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- First Section -->
    <div class="relative overflow-hidden bg-gray-50 pt-16">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Beautiful Recipe Feeds</h2>
          <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            When you first login to Mealie, you'll see a new page that displays the latest recipes so you can see what's
            new in your group. Scroll through your recipes and find exactly what's for dinner today and the rest of the
            week.
          </p>
        </div>
        <div class="mt-12 mb-12 min-h-[300px]" ref="mealieMain">
          <FlyIntersector>
            <img
              v-if="isMealieMainVisible"
              ref="mealieMain"
              class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="~assets/mealie-recent.webp"
              alt=""
            />
          </FlyIntersector>
        </div>
      </div>
    </div>

    <AppFeatureHighlights />

    <!-- Features Section -->
    <div class="relative bg-gray-50 py-16 sm:py-24">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-base font-semibold uppercase tracking-wider text-primary-600">Tons of Features</h2>
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">More Than You'll Ever Need</p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Mealie has a whole host of features that you'll love. From the ability to create and manage your own recipes,
          to the being able to share your recipes with your friends, you'll find what you need in Mealie.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg">
                      <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                  <p class="mt-5 text-base text-gray-500">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CloudUploadIcon, CogIcon, RefreshIcon, ServerIcon, ShieldCheckIcon, UserIcon } from "@heroicons/vue/outline";
import AppFeatureHighlights from "~~/components/AppFeatureHighlights.vue";
import { useIntersectOnce } from "~~/composables/use-intersect-once";

const coreFeature = [
  {
    icon: ServerIcon,
    title: "Self Hostable",
    text: "Mealie is self-hostable, meaning you can run it on your own server without any reliance on cloud-services",
  },
  {
    icon: UserIcon,
    title: "Family Friendly",
    text: "An easy to use interface that's familiar to everyone, regardless of their age or background",
  },
  {
    icon: CloudUploadIcon,
    title: "Import Recipes",
    text: "Import recipes using the built in recipe scraper and get access to thousands of recipes from around the web",
  },
];

const features = [
  {
    name: "Import Recipes",
    description: "Easily import recipes from sites around the web using the built in recipe scraper.",
    icon: CloudUploadIcon,
  },
  {
    name: "Users",
    description: "Add new users with sign-up links or simply create a new user in the admin panel.",
    icon: UserIcon,
  },
  { name: "Groups", description: "Sort users into groups to share recipes with the whole family", icon: RefreshIcon },
  {
    name: "Webhooks",
    description: "Schedule webhooks to send notifications to 3rd party services with todays Meal Plan data.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Open API",
    description: "an open gives you full control of the your data with interactive documentation",
    icon: CogIcon,
  },
  {
    name: "Automatic Backups",
    description: "Keep your data safe with automatic backups in any format supported by Jinja2 templates",
    icon: ServerIcon,
  },
];

const mealieMain = ref<null | HTMLElement>(null);
const isMealieMainVisible = useIntersectOnce()(mealieMain);
</script>

<style lang="css">
.fly-move,
.fly-enter-active,
.fly-leave-active {
  transition: all 1s ease;
}
.fly-enter-from,
.fly-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.fly-leave-active {
  position: absolute;
  transform: translateY(30px);
}
</style>

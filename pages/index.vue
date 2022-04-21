<template>
  <div>
    <!-- <Banner /> -->
    <AppToolbar />

    <AppHero />

    <svg class="-mt-10 fill-gray-900 md:-mt-32 lg:-mt-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,234.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        data-darkreader-inline-fill=""
      ></path>
    </svg>

    <!-- Core Features -->
    <div class="bg-gray-900 py-16">
      <h2 class="my-auto mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
        Core Features
      </h2>

      <div
        class="mx-auto flex max-w-7xl flex-col justify-center space-y-4 px-4 sm:px-6 md:flex-row md:space-y-0 md:space-x-4 lg:py-12 lg:px-8"
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
    <div class="hover: h-1 bg-primary"></div>

    <!-- First Section -->
    <div class="relative overflow-hidden bg-gray-900 pt-16">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">Beautiful Recipe Feeds</h2>
          <p class="mx-auto mt-5 max-w-prose text-xl text-gray-200">
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

    <svg class="fill-gray-900 md:-mt-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,234.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        data-darkreader-inline-fill=""
      ></path>
    </svg>

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
    icon: CloudUploadIcon,
    title: "Import Recipes",
    text: "Import recipes using the built in recipe scraper and get access to thousands of recipes from around the web",
  },
  {
    icon: UserIcon,
    title: "Family Friendly",
    text: "An easy to use interface that's familiar to everyone, regardless of their age or background",
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

.custom-shape-divider-top-1650507236 {
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
</style>

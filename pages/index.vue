<template>
  <div>
    <Banner />
    <AppToolbar />
    <AppHero />

    <!-- First Section -->
    <div class="relative bg-gray-50 pt-16 overflow-hidden">
      <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Beautiful Recipe Feeds</h2>
          <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            When you first login to Mealie, you'll see a new page that displays the latest recipes so you can see what's
            new in your group. Scroll through your recipes and find exactly what's for dinner today and the rest of the
            week.
          </p>
        </div>
        <div class="mt-12 mb-12">
          <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="/mealie-recent.png" alt="" />
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="relative bg-white py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 class="text-base font-semibold tracking-wider text-primary-600 uppercase">Tons of Features</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">More Than You'll Ever Need</p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Mealie has a whole host of features that you'll love. From the ability to create and manage your own recipes,
          to the being able to share your recipes with your friends, you'll find what you need in Mealie.
        </p>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                      <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
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

<script>
import { CloudUploadIcon, CogIcon, RefreshIcon, ServerIcon, ShieldCheckIcon, UserIcon } from "@heroicons/vue/outline";

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

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>

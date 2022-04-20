<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white py-4 sm:py-10 md:py-16 lg:py-20 lg:pt-12">
    <main class="mx-auto max-w-7xl px-4 md:flex">
      <div class="text-center md:text-left">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline"> Recipe management </span>
          {{ " " }}
          <span class="block text-primary"> for the modern household </span>
        </h1>
        <p class="mx-auto mt-3 mr-auto max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
          Mealie is an intuitive and easy to use recipe management app. It's designed to make your life easier by being
          the best recipes management experience on the web and providing you with an easy to use interface to manage
          your growing collection of recipes.
        </p>
        <div class="mt-5 flex w-full items-center justify-center space-x-2 sm:space-x-3 md:mt-8 md:justify-start">
          <div class="rounded-md">
            <a
              href="https://docs.mealie.io/"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-primary-200 md:py-4 md:px-10 md:text-lg"
            >
              Get started
            </a>
          </div>
          <div class="rounded-md">
            <a
              href="https://demo.mealie.io"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary shadow-lg hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
      <div class="align-center hidden justify-center md:flex">
        <p></p>
      </div>
    </main>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Inbox",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  { name: "Live Chat", description: "Your customers' data will be safe and secure.", href: "#", icon: ChatAlt2Icon },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      navigation,
    };
  },
};
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white py-4 sm:py-10 md:py-16 lg:py-20">
    <main class="mx-auto max-w-7xl px-4">
      <div class="text-center">
        <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline"> Recipe management </span>
          {{ " " }}
          <span class="block text-primary xl:inline"> for the modern household </span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-4xl">
          Mealie is a self hosted recipe manager and meal planner with a RestAPI backend and a reactive frontend
          application built in Vue for a pleasant user experience for the whole family. 
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <a
              href="https://docs.mealie.io/"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-primary
                hover:bg-primary-200
                md:py-4 md:text-lg md:px-10
              "
            >
              Get started
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="https://demo.mealie.io"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-primary
                bg-white
                hover:bg-gray-50
                md:py-4 md:text-lg md:px-10
              "
            >
              Live demo
            </a>
          </div>
        </div>
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

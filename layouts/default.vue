<template>
  <div>
    <slot />
  </div>
  <div class="hover: h-1 bg-primary"></div>
  <AppFooter :nav="navigation" />
</template>

<script setup lang="ts">
import { useConstants } from "~~/composables/use-constants";
import { NavItem } from "~/components/NavButton/types";
import {
  CheckCircleIcon,
  DesktopComputerIcon,
  DocumentTextIcon,
  NewspaperIcon,
  TemplateIcon,
  ViewGridIcon,
} from "@heroicons/vue/outline";

const designPageLink = (v: string) => `/solutions/design/#${v}`;
const developmentPageLink = (v: string) => `/solutions/development/#${v}`;

const navigation: NavItem[] = [
  {
    name: "Design",
    href: "/",
    children: [
      {
        name: "Marketing Materials",
        description: "Stand out from the crowd with custom designed marketing materials.",
        href: designPageLink("marketing-materials"),
        icon: NewspaperIcon,
      },
      {
        name: "Logo & Brand Designs",
        description: "Need a new logo or a refresh? We can help you with that.",
        href: designPageLink("logos"),
        icon: CheckCircleIcon,
      },
      {
        name: "Custom Designs",
        description: "Need a custom design for your business? We can help you with that.",
        href: designPageLink("custom-designs"),
        icon: ViewGridIcon,
      },
    ],
  },
  {
    name: "Development",
    href: "/",
    children: [
      {
        name: "Custom Websites",
        description: "Need a traditional site with a modern look? We can help you with that.",
        href: developmentPageLink("static-sites"),
        icon: TemplateIcon,
      },
      {
        name: "Custom Applications",
        description: "Need a desktop or custom web application? We can help you with that.",
        href: developmentPageLink("blog"),
        icon: DesktopComputerIcon,
      },
      // {
      //   name: "Zero Maintenance",
      //   description: "Find out why our sites are a set-it-and-forget-it-solution for your business",
      //   href: developmentPageLink("zero-maintenance"),
      //   icon: CheckCircleIcon,
      // },
      // {
      //   name: "Managed Hosting",
      //   description: "We offer a range of hosting solutions for all types of businesses.",
      //   href: developmentPageLink("hosting"),
      //   icon: ServerIcon,
      // },
      {
        name: "Blogs and Newsletters",
        description: "Need a blog or newsletter? We can help you with that.",
        href: developmentPageLink("blog"),
        icon: DocumentTextIcon,
      },
    ],
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Projects",
    href: "/about/#projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const data = useConstants();
</script>

<template>
  <div
    :class="{
      'border-b-2': small,
      'border-b-4': medium,
      'border-b-8': large,
      'border-accent': color === 'accent',
      'border-primary': color === 'primary',
      'border-secondary': color === 'secondary',
    }"
  />
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "none",
  },
  small: {
    type: Boolean,
    default: true,
  },
  medium: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },

});
</script>
